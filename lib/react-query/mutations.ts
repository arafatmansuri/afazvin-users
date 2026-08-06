import { useMutation } from "@tanstack/react-query";
import { api } from "../axios";
import { InquiryFormData } from "@/types/inquiry";

export const useCreateInquiryMutation = () =>
  useMutation({
    mutationFn: async (data: InquiryFormData) => {
      const response = await api.post("/inquiries", data);
      return response.data;
    },
  });
