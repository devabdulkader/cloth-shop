"use client"
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import Cookies from "js-cookie";
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
const LOGIN_MUTATION = `
query Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
  }
}
`;
const LoginForm = () => {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("/", {
                query: LOGIN_MUTATION,
                variables: {
                    input: {
                        email,
                        password,
                    },
                },
            });
            if (response.data.errors?.length) {
                setError(response.data.errors[0].message);
                return;
            }
            if (response.data.data.login.accessToken) {
                typeof window !== "undefined" &&
                    Cookies.set(
                        "accessKey",
                        response.data.data.login.accessToken
                    );
                router.push("/account");
            }
        } catch (error) {
            console.log(error);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (

        <Form submitHandler={handleLogin} className=' min-w-full flex flex-col gap-4'>
            <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-full px-4 py-4 text-sm' />

            <FormInput name='password' id='password' placeholder='PASSWORD' type='password' className='  min-w-full border hover:border-black rounded-full px-4 py-4 text-sm' />
            {error && <p className="text-red-500 text-[10px]">{error}</p>}
            <div className='flex items-center gap-1 text-sm'> <MdEmail size={16} /> <Link href={'/forgot-password'} className=' font-semibold'>Forgot your Password?</Link></div>
            <p className=' text-sm font-normal'>If you don&apos;t have an account, please<Link href="/register" className=' font-semibold text-blue-500'> Register Here</Link></p>
           
            <button className='  min-w-full bg-[#132842]  py-4 text-white rounded-full text-base'>
                {loading ? <LoadingSpinner /> : "Login"}
            </button>
        </Form>
    )
}

export default LoginForm