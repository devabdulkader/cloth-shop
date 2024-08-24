import Link from 'next/link'
import React from 'react'

const FrequentlyAskedQuestionsPage = () => {
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-3xl font-semibold md:font-medium'>FREQUENTLY ASKED QUESTIONS</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>frequently-asked-questions</span></p>
            </div>
            <div className=' flex flex-col  gap-8 py-10 md:py-14 text-md font-normal'>
                <p className=' font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
            </div>
            <div className='flex flex-col  justify-center items-center gap-4 py-10 md:py-20'>
                <p className='text-2xl  font-semibold'>Can&lsquo;t find the answer you are looking for?</p>
                <p className='text-2xl  font-semibold'>We&lsquo;re Here to Help!</p>
                <button className='bg-[#132842] w-48 h-14 text-white rounded-3xl text-md'>
                    Contact Us Now
                   </button>
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestionsPage





