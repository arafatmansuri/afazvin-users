import { createInquirySchema } from "@/schemas/inquiry.schema";
import z from "zod";

export type InquiryFormData = z.infer<typeof createInquirySchema>;