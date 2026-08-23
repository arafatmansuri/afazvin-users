import { z } from "zod";

export const createInquirySchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .nonoptional({ error: "Name is required" }),
  category: z
    .string({ error: "Category is required" })
    .nonoptional({ error: "Category is required" }),
  product: z
    .string(),
  mobile: z
    .string({ error: "Mobile number is required" })
    .regex(/^(?:\+91[-\s]?)?[6-9]\d{9}$/, { error: "Invalid mobile number" }).nonempty({ error: "Mobile number is required" }),
  city: z.string({ error: "City is required" }).nonoptional({ error: "City is required" }),
  email: z.email({ error: "Invalid email address" }).optional(),
  message: z.string().optional(),
  type: z.enum(["generalInquiry", "productInquiry"], { error: "Type is required" }).nonoptional({ error: "Type is required" }),
});