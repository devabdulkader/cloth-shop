"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { instance } from "@/axios/axiosInstance";
import LoadingSpinner from "../common/LoadingSpinner";

const RESET_PASSWORD_MUTATION = `
mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input) {
    message
  }
}
`;

const ResetPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");

  useEffect(() => {
    if (!token) {
      setError("Invalid reset token. Please request a new password reset.");
    }
  }, [token]);

  const handleResetPassword = async ({
    newPassword,
    confirmPassword,
  }: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await instance.post("/", {
        query: RESET_PASSWORD_MUTATION,
        variables: {
          input: {
            token,
            newPassword,
          },
        },
      });

      if (response.data.errors?.length) {
        setError(response.data.errors[0].message);
        return;
      }

      setSuccess(response.data.data.resetPassword.message);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <p className="text-red-500">
        Invalid reset token. Please request a new password reset.
      </p>
    );
  }

  return (
    <Form
      submitHandler={handleResetPassword}
      className="min-w-full flex flex-col gap-4"
    >
      <FormInput
        name="newPassword"
        id="newPassword"
        placeholder="NEW PASSWORD"
        type="password"
        className="min-w-full border hover:border-black rounded-full px-4 py-4 text-sm"
      />
      <FormInput
        name="confirmPassword"
        id="confirmPassword"
        placeholder="CONFIRM NEW PASSWORD"
        type="password"
        className="min-w-full border hover:border-black rounded-full px-4 py-4 text-sm"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <button className="min-w-full bg-[#132842] py-4 text-white rounded-full text-base">
        {loading ? <LoadingSpinner /> : "Reset Password"}
      </button>
    </Form>
  );
};

export default ResetPasswordForm;
