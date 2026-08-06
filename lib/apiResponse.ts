export interface APIResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export const successResponse = <T>(
  message: string,
  data?: T,
): APIResponse<T> => ({
  success: true,
  message,
  data,
});

export const errorResponse = (
  message: string,
  error?: string,
): APIResponse => ({
  success: false,
  message,
  error,
});
// interface PaginationMeta {
//   page: number;
//   limit: number;
//   total: number;
//   totalPages: number;
//   hasNext: boolean;
//   hasPrev: boolean;
// }