"use client"
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import Cookies from "js-cookie";
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
            const response = await axios.post("/", {
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

            const { accessToken } = response.data.data.login;
            Cookies.set("accessKey", accessToken);

            // // Redirect to the dashboard
            router.push("/account");
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
            <div className='flex items-center gap-1 text-sm'> <MdEmail size={16} /> <p className=' font-semibold'>Forgot your Password?</p></div>
            <p className=' text-sm font-normal'>If you don&apos;t have an account, please<Link href="/register" className=' font-semibold text-blue-500'> Register Here</Link></p>
            <button className='  min-w-full bg-[#132842]  py-4 text-white rounded-full text-base'>
                Submit
            </button>
        </Form>
    )
}

export default LoginForm