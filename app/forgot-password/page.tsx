import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="container">
      <div className=" text-center py-20 md:py-40">
        <h1 className=" text-2xl md:text-4xl font-semibold md:font-medium">
          ACCOUNT
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Forgot Password</span>
        </p>
      </div>
      <div className=" flex  justify-center pb-10 md:pb-20">
        <div className=" min-w-full md:min-w-[50%]">
          <div className="flex flex-col gap-2 py-4">
            <h1 className=" text-2xl font-bold uppercase">Forgot Password</h1>
            <p className=" text-sm font-normal">
              Insert your email to reset your password:
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
