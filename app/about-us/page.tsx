import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUs_Fashion from "@/public/about-us/AboutUs_Fashion.webp"
import Quote from "@/public/about-us/quote.png"
import Ion_Quote from "@/public/about-us/icon_quote.webp"
import Shopping_Cart_Loader from "@/public/about-us/shopping-cart-loader.webp"
import Swipe_For_Shopping from "@/public/about-us/swipe-for-shopping.gif"
const AboutUsPage = () => {
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>About Us</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>About us</span></p>
            </div>
            <Image src={AboutUs_Fashion} alt='AboutUs_Fashion' className=' rounded-3xl' />
            <div className=' flex flex-col  gap-8 py-10 md:py-14 text-md font-normal'>
                <p className=' font-semibold'>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
                <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.</p>
            </div>
            <div className=' flex flex-col md:flex-row gap-8 md:px-8 py-8 md:py-14 rounded-3xl bg-gray-100 items-center'>
                <Image src={Quote} alt='quote' width={350} height={300} className='' />
                <div className='flex flex-row gap-8 justify-center pt-0 px-8 md:pt-20'>
                    <Image src={Ion_Quote} alt='Ion Quote' className=' w-12 h-10 pt-2' />
                    <div >
                        <h2 className=' text-sm md:text-xl font-normal'>Best purchase I&lsquo;ve made this winter! The color and knitting are exquisite and it&lsquo;s so comfy! Went from NYC to Miami without ever taking it off. Super cute!!</h2>
                        <p className='text-[12px] md:text-[14px] font-semibold py-4'>Kwang Shang. - CEO Vinovathemes</p>
                    </div>
                </div>
            </div>
            <div className=' grid md:grid-cols-2 gap-2 justify-between items-center py-10'>
                <div className=' order-2 md:order-none'>
                    <h2 className=' text-xl font-semibold pb-10'>Why choose us?</h2>
                    <p className=' text-sm md:text-base font-normal leading-6 md:leading-8 text-gray-600'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <Image src={Shopping_Cart_Loader} alt='Shopping Cart Loader' width={700} height={700} className='  order-1 md:order-none' />
                    </div>


            </div>
            <hr/>
            <div className=' grid md:grid-cols-2 gap-2 justify-between items-center py-10'>
            <div className='flex justify-center items-center'>
                    <Image src={Swipe_For_Shopping} alt='Shopping Cart Loader' width={700} height={700} />
                    </div>
                <div >
                    <h2 className=' text-xl font-semibold pb-10'>Trusted online shopping</h2>
                    <p className=' text-sm md:text-base font-normal leading-6 md:leading-8 text-gray-600'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                </div>
                


            </div>


        </div>
    )
}

export default AboutUsPage