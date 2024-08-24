"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validation";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface FormTextareaProps {
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  rows?: number;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormTextarea = ({
  name,
  value,
  id,
  placeholder,
  validation,
  rows = 4,
  label,
  required,
  className,
}: FormTextareaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`flex flex-col mb-4`}>
      {label && (
        <label className="mb-2 font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const fieldValue = value !== undefined ? value : field.value || "";
          return (
            <textarea
              placeholder={placeholder}
              {...field}
              value={fieldValue}
              rows={rows}
              required={required}
              className={` ${className}`}
            />
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormTextarea;