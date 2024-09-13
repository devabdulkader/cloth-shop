import Image from "next/image";
import React from "react";

import Amex from "@/public/common/amex.webp";
import Dinners from "@/public/common/dinners-club.png";
import Discover from "@/public/common/discover.png";
import Mastercard from "@/public/common/mastercardpng.png";
import Paypal from "@/public/common/paypal.png";
import Visa from "@/public/common/visa.png";

const PaymentCards = () => {
  // PAYMENT CARD IMAGE
  const CardImag = [
    {
      image: Visa,
      title: "Visa",
    },
    {
      image: Mastercard,
      title: "Mastercard",
    },
    {
      image: Amex,
      title: "American Express",
    },

    {
      image: Paypal,
      title: "Paypal",
    },
    {
      image: Dinners,
      title: "Dinners card",
    },
    {
      image: Discover,
      title: "Discover",
    },
  ];

  return (
    <div className="border relative  px-4 z-0">
      <p className="absolute left-1/2 transform -translate-x-1/2 -top-5 text-nowrap bg-white p-2 text-center font-semibold text-gray-800">
        Guaranteed safe checkout
      </p>{" "}
      <div className=" flex justify-evenly  gap-2 py-8">
        {CardImag.map((item, index) => (
          <div key={index} className="h-10  md:h-14  rounded-xl  border">
            <Image
              src={item.image}
              alt="Card Image"
              title={item.title}
              width={300}
              height={300}
              className=" w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentCards;
