"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { instance } from "@/axios/axiosInstance";
import LoadingSpinner from "../common/LoadingSpinner";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const FORGOT_PASSWORD_MUTATION = `
mutation ForgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(input: $input) {
    message
  }
}
`;

const ForgotPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleForgotPassword = async ({ email }: { email: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await instance.post("/", {
        query: FORGOT_PASSWORD_MUTATION,
        variables: {
          input: {
            email,
          },
        },
      });

      if (response.data.errors?.length) {
        setError(response.data.errors[0].message);
        return;
      }

      setSuccess(response.data.data.forgotPassword.message);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      submitHandler={handleForgotPassword}
      className="min-w-full flex flex-col gap-4"
    >
      <FormInput
        name="email"
        id="email"
        placeholder="ENTER YOUR EMAIL"
        type="email"
        className="min-w-full border hover:border-black rounded-full px-4 py-4 text-sm"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <div className="flex items-center gap-1 text-sm">
        <MdEmail size={16} />
        <p className="font-semibold">
          We&apos;ll send you a password reset link
        </p>
      </div>
      <p className="text-sm font-normal">
        Remember your password?{" "}
        <Link href="/login" className="font-semibold text-blue-500">
          Login Here
        </Link>
      </p>
      <button className="min-w-full bg-[#132842] py-4 text-white rounded-full text-base">
        {loading ? <LoadingSpinner /> : "Send Reset Link"}
      </button>
    </Form>
  );
};

export default ForgotPasswordForm;
