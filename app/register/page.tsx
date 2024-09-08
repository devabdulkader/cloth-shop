
import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link'
const RagisterPage = () => {

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>CREATE ACCOUNT</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Create Account</span></p>
            </div>
            <div className=' flex  justify-center pb-10 md:pb-20'>
                <div className=' min-w-full md:min-w-[50%]'>

                    <RegisterForm />

                </div>
            </div>
        </div>

    )
}


export default RagisterPage