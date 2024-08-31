import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Quote from "@/public/about-us/quote.png"
import Ion_Quote from "@/public/about-us/icon_quote.webp"

const TestimonialData = [
    {
        id: 1,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 2,
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 3,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 4,
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
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
        content: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },
    {
        id: 8,
        content: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
        customer_name: "Sariot Hossain",
        postion: "Jonior Web Developer"
    },

]

const PagetestimonialPage = () => {
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>APage Testimonial</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Page Testimonial</span></p>
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


            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container px-6 py-12 mx-auto">
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                                   
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                   
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
                                 
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                  
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
                                   
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
                                 
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default PagetestimonialPage