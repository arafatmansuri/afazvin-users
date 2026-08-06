import { AppError } from "./appError";
import { errorResponse } from "./apiResponse";

export function errorHandler(err: unknown): Response {
  console.error("API Error:", err);

  if (err instanceof AppError) {
    return Response.json(errorResponse(err.message), {
      status: err.statusCode,
    });
  }

  return Response.json(errorResponse("Internal Server Error"), { status: 500 });
}
