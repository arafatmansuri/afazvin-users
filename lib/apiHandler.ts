import { errorHandler } from "./errorHandler";

export function apiHandler(
  handlers: Partial<
    Record<
      "GET" | "POST" | "PUT" | "DELETE",
      (req: Request) => Promise<Response>
    >
  >,
) {
  return async (req: Request) => {
    const method = req.method as keyof typeof handlers;
    const handler = handlers[method];

    if (!handler) {
      return Response.json(
        { success: false, message: "Method Not Allowed" },
        { status: 405 },
      );
    }

    try {
      return await handler(req);
    } catch (err) {
      return errorHandler(err);
    }
  };
}
