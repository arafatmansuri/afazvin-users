import { apiHandler } from "@/lib/apiHandler";
import { successResponse } from "@/lib/apiResponse";
import { getProducts, getProductsFilter } from "@/lib/products";

export const GET = apiHandler({
  GET: async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const {
      filters: filter,
      skip,
      page,
    } = await getProductsFilter({
      searchParams,
      usedBy: "route",
    });
    const { data } = await getProducts(filter, skip, "route", page);
    return Response.json(
      successResponse("Products fetched successfully", { ...data }),
      {
        status: 200,
      },
    );
  },
});
