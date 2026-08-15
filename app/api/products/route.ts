import { apiHandler } from "@/lib/apiHandler";
import { successResponse } from "@/lib/apiResponse";
import { AppError } from "@/lib/appError";
import { connectDB } from "@/lib/mongoose";
import Product from "@/models/product.model";
import { Types } from "mongoose";

const LIMIT = 20;

const validSorts = ["hand-picked", "best-sellers", "new", "popular"] as const;

export const GET = apiHandler({
  GET: async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const category = searchParams.get("category");
    const occasion = searchParams.get("occasion");
    const sortParam = searchParams.get("sort");
    const pageParam = searchParams.get("page");

    const page = Math.max(1, Number.parseInt(pageParam || "1", 10) || 1);

    const sort = validSorts.includes(sortParam as (typeof validSorts)[number])
      ? sortParam
      : "new";

    const filter: Record<string, unknown> = {};

    if (category) {
      if (!Types.ObjectId.isValid(category)) {
        throw AppError.badRequest("Invalid category");
      }

      filter.category = new Types.ObjectId(category);
    }

    if (occasion) {
      if (!Types.ObjectId.isValid(occasion)) {
        throw AppError.badRequest("Invalid occasion");
      }

      filter.occasion = new Types.ObjectId(occasion);
    }

    if (sort === "hand-picked") {
      filter.isHandPicked = true;
    }

    if (sort === "best-sellers") {
      filter.isBestSeller = true;
    }

    await connectDB();

    const skip = (page - 1) * LIMIT;

    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(
          sort === "new"
            ? {
                createdAt: -1 as const,
                _id: -1 as const,
              }
            : sort === "popular"
              ? {
                  views: -1 as const,
                  createdAt: -1 as const,
                  _id: -1 as const,
                }
              : {
                  createdAt: -1 as const,
                  _id: -1 as const,
                },
        )
        .skip(skip)
        .limit(LIMIT)
        .lean(),

      Product.countDocuments(filter),
    ]);

    return Response.json(
      successResponse("Products fetched successfully", {
        products,
        total,
        totalPages: Math.ceil(total / LIMIT),
        page,
        hasMore: page * LIMIT < total,
      }),
      {
        status: 200,
      },
    );
  },
});
