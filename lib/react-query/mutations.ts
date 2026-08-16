import { ApiErrorResponse } from "@/types/api";
import { InquiryFormData, InquiryResponse } from "@/types/inquiry";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { APIResponse } from "../apiResponse";
import { api } from "../axios";
import { ProductListParams, ProductListResult } from "@/types/product";

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

async function fetchProducts(
  data: ProductListParams,
): Promise<APIResponse<ProductListResult>> {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.set(key, String(value));
      }
    });
    const response = await api.get(`/products?${queryParams.toString()}`);
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
export const useFetchProductsMutation = () =>
  useMutation<
    APIResponse<ProductListResult>,
    ApiErrorResponse,
    ProductListParams
  >({
    mutationFn: async (
      data: ProductListParams,
    ): Promise<APIResponse<ProductListResult>> => {
      return await fetchProducts(data);
    },
  });

export const useFetchProductsInfinite = (
  filters: Omit<ProductListParams, "page">,
  initialData?: APIResponse<ProductListResult>,
) => {
  return useInfiniteQuery<APIResponse<ProductListResult>, ApiErrorResponse>({
    queryKey: ["products", filters],

    queryFn: ({ pageParam }) =>
      fetchProducts({
        ...filters,
        page: pageParam as number,
      }),

    initialPageParam: 1,

    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [1],
        }
      : undefined,

    staleTime: 5 * 60 * 1000, // 5 minutes

    getNextPageParam: (lastPage) => {
      const data = lastPage.data;

      if (!data?.hasMore) {
        return undefined;
      }

      return data.page + 1;
    },
  });
};