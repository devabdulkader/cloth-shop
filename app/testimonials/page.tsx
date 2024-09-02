import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Quote from "@/public/about-us/quote.png"
import Ion_Quote from "@/public/about-us/icon_quote.webp"

interface Testimonials {
    id:number,
    content:string,
    customer_name:string,
    postion:string,

}

const testimonialData:Testimonials[] = [
    {
        id: 1,
        content: "I’m very satisfied with this theme, especially its design freedom for users choices: so many possibilities at any step you can imagine for your business. But beyond such qualities (that anyone can see just looking theme page/demo), I must to mention my satisfaction with the support team: very professional. They clarified many doubts, solved little problems in my configuration and made easier and safer all the process. Thank you!",
        customer_name: "Abdour Rouf Jibon",
        postion: "Managing Director"
    },
    {
        id: 2,
        content: "I’m very satisfied with this theme, especially its design freedom for users choices: so many possibilities at any step you can imagine for your business. But beyond such qualities (that anyone can see just looking theme page/demo), I must to mention my satisfaction with the support team: very professional. They clarified many doubts, solved little problems in my configuration and made easier and safer all the process. Thank you!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 3,
        content: "Great theme, support and help reply very quickly, thank you, cost-effective theme and service, thank you sincerely",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 4,
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Abdour Rouf Jibon",
        postion: "Managing Director"
    },

    {
        id: 5,
        content: "3 Months before i purchased sale hub E-commerce shopify theme. it is very easy customized themes, and support team is also nice response. Thank you sale hub team",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 6,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 7,
        content: "I’m very satisfied with this theme, especially its design freedom for users choices: so many possibilities at any step you can imagine for your business. But beyond such qualities (that anyone can see just looking theme page/demo), I must to mention my satisfaction with the support team: very professional. They clarified many doubts, solved little problems in my configuration and made easier and safer all the process. Thank you!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 8,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 9,
        content: "Truly elegant theme built with customer in mind, excellent design that facilitates navigation across the many categories of skin and hair care. Fancy looking with elegant animations and subtle touches here and there.and the support is A class. I contacted them many many times and they always deliver, and they actually made some customizations for me for free ! I think this theme is essential if you're in the beauty industry with large collections and many categories.",
        customer_name: "Abdour Rouf Jibon",
        postion: "Managing Director"
    },
    {
        id: 10,
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Abdour Rouf Jibon",
        postion: "Managing Director"
    },
    {
        id: 11,
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },

    {
        id: 12,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Abdour Rouf Jibon",
        postion: "Managing Director"
    },

]

const TestimonialPage:React.FC = () => {
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'> Testimonials</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Testimonials</span></p>
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
            <div className="mb-8 gap-7 py-8 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:4]">
                {/* Item */}
                {
                    testimonialData.map((item, index) => (
                        <div key={index} className="mb-6 gap-6 overflow-hidden rounded-lg shadow-xl border border-solid border-gray-300 bg-white px-6 py-8">

                            <p className="mb-8 text-sm text-gray-500">
                                {item.content}
                            </p>
                            <div className="flex flex-col">
                                <h6 className="text-sm font-semibold">{item.customer_name}</h6>
                                <p className="text-sm text-gray-500">{item.postion}</p>
                            </div>
                        </div>
                    ))

                }


            </div>
        </div>

    )
}

export default TestimonialPage

