"use client"
import { instance } from '@/axios/axiosInstance';
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import LoadingSpinner from '../common/LoadingSpinner';
const REGISTER_MUTATION = `
 mutation Register($input: RegisterInput!) {
  register(input: $input) {
      accessToken
    }
  }
`;
const RegisterForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async ({
        fullName,
        email,
        password,
    }: {
        fullName: string,
        email: string;
        password: string;
    }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("/", {
                query: REGISTER_MUTATION,
                variables: {
                    input: {
                        fullName,
                        email,
                        password,
                    },
                },
            });
            if (response.data.errors?.length) {
                setError(response.data.errors[0].message);
                return;
            }
            if (response.data.data.register.accessToken) {
                typeof window !== "undefined" &&
                    Cookies.set(
                        "accessKey",
                        response.data.data.register.accessToken
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
        <Form submitHandler={handleRegister} className=' min-w-full flex flex-col gap-4'>
            <FormInput name='fullName' id='fullName' placeholder='FULL NAME' type='text' className='min-w-full border hover:border-black rounded-full px-4 py-4 text-sm' />

            <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-full px-4 py-4  text-sm' />

            <FormInput name='password' id='password' placeholder='PASSWORD' type="password" className='  min-w-full border hover:border-black rounded-full px-4 py-4  text-sm' />
            {error && <p className="text-red-500 text-[10px]">{error}</p>}
            <div className='flex items-center gap-1 text-sm'> <FormInput name="check" type="checkbox" /><p>Sign up for our newsletter</p></div>
            <p className=' text-sm font-normal'>If you don&apos;t have an account, please<Link href="/login" className=' text-sm font-semibold text-blue-500'> Login Here</Link></p>
            <button className='  min-w-full bg-[#132842]  py-4 text-white rounded-full text-base'>
            {loading ? <LoadingSpinner /> : "Registration"}
            </button>
        </Form>
    )
}

export default RegisterForm