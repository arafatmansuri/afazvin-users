import { ApiErrorResponse } from "@/types/api";
import { InquiryFormData, InquiryResponse } from "@/types/inquiry";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { APIResponse } from "../apiResponse";
import { api } from "../axios";

async function createInquiry(
  data: InquiryFormData,
): Promise<APIResponse<InquiryResponse>> {
    try {
      const response = await api.post("/inquiries", data);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw {
          message: err.response?.data?.message || "Unknown error",
          status: err.response?.status,
        };
      }

      throw {
        message: "Something went wrong from ourside",
      };
    }
}

export const useCreateInquiryMutation = () =>
  useMutation<APIResponse<InquiryResponse>, ApiErrorResponse, InquiryFormData>({
    mutationFn: async (
      data: InquiryFormData,
    ): Promise<APIResponse<InquiryResponse>> => {
      return await createInquiry(data);
    },
  });
