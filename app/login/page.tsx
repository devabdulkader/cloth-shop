
import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'
const LoginPage = () => {

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>ACCOUNT</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Account</span></p>
            </div>
            <div className=' flex  justify-center pb-10 md:pb-20'>
                <div className=' min-w-full md:min-w-[50%]'>
                    <div className='flex flex-col gap-2 py-4'>
                        <h1 className=' text-2xl font-bold uppercase'>Sign In</h1>
                        <p className=' text-sm font-normal'>Insert your account information:</p>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>

    )
}

export default LoginPage