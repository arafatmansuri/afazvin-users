"use client";

import { Button } from "@/components/ui/Button";
import { useCreateInquiryMutation } from "@/lib/react-query/mutations";
import { cn } from "@/lib/utils";
import { createInquirySchema } from "@/schemas/inquiry.schema";
import { InquiryFormData } from "@/types/inquiry";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CATEGORY_OPTIONS = [
  "General",
  "Blazers",
  "Suit Sherwani",
  "Indo Western",
  "Jodhpuri",
  "Fabrics",
  "Readymade Garments",
  "Ethnic Wear",
  "Koti Indo",
  "Koti Kurta",
];

interface InquiryFormProps {
  defaultCategory?: string;
  className?: string;
  categories: { name: string; slug: string; _id: string }[];
  inquiryType?: "generalInquiry" | "productInquiry";
  productId?: string;
}

export function InquiryForm({
  defaultCategory = "6a76fc1369d1f8dfe00c0a8f",
  className,
  categories,
  inquiryType = "generalInquiry",
  productId,
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useCreateInquiryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(createInquirySchema),
    defaultValues: {
      name: "",
      city: "",
      category: defaultCategory,
      mobile: "",
      email: undefined,
      message: undefined,
      product: productId,
      type: inquiryType,
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    setStatus("idle");
    mutation.mutate(data, {
      onSuccess: () => {
        setStatus("success");
        reset({
          name: "",
          city: "",
          category: defaultCategory,
          mobile: "",
          email: undefined,
          message: undefined,
          product: productId,
          type: inquiryType,
        });
      },
      onError: (err) => {
        setStatus("error");
        setErrorMessage(
          err.message || "Something went wrong. Please try again.",
        );
      },
    });
  };

  return (
    <div className={cn("relative", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Name" required error={errors.name?.message}>
            <input
              type="text"
              autoComplete="name"
              {...register("name")}
              className={inputClass(!!errors.name)}
              aria-invalid={!!errors.name}
            />
          </Field>

          <Field label="City" required error={errors.city?.message}>
            <input
              type="text"
              autoComplete="address-level2"
              {...register("city")}
              className={inputClass(!!errors.city)}
              aria-invalid={!!errors.city}
            />
          </Field>

          {inquiryType === "generalInquiry" && (
            <Field label="Category" required error={errors.category?.message}>
              <select
                {...register("category")}
                className={cn(
                  inputClass(!!errors.category),
                  "appearance-none bg-surface",
                )}
                aria-invalid={!!errors.category}
              >
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </Field>
          )}

          <Field label="Mobile" required error={errors.mobile?.message}>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              {...register("mobile")}
              className={inputClass(!!errors.mobile)}
              aria-invalid={!!errors.mobile}
            />
          </Field>
        </div>

        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={4}
            {...register("message")}
            className={cn(
              inputClass(!!errors.message),
              "min-h-[120px] resize-y py-3",
            )}
            aria-invalid={!!errors.message}
          />
        </Field>
        {status === "success" && (
          <div
            role="status"
            className="mb-6 flex items-start gap-3 rounded-md border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
          >
            <CheckCircle2
              className="h-5 w-5 shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium">Inquiry submitted successfully</p>
              <p className="mt-0.5 opacity-90">
                We’ll get back to you within one business day.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="mb-6 flex items-start gap-3 rounded-md border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
          >
            <AlertCircle
              className="h-5 w-5 shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium">Couldn’t submit inquiry</p>
              <p className="mt-0.5 opacity-90">{errorMessage}</p>
            </div>
          </div>
        )}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={mutation.isPending}
          className="mt-2 uppercase tracking-wider"
        >
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
        {required && (
          <span className="text-primary ml-0.5" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-error flex items-center gap-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full h-[52px] rounded-sm border bg-surface px-4 text-[15px] text-text-primary placeholder:text-text-secondary/50 transition-colors duration-200",
    "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30",
    hasError ? "border-error" : "border-border hover:border-text-secondary/40",
  );
}
