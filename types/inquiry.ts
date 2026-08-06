import { createInquirySchema } from "@/schemas/inquiry.schema";
import z from "zod";

export type InquiryFormData = z.infer<typeof createInquirySchema>;
export type InquiryResponse = InquiryFormData & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};