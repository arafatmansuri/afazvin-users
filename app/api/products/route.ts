import { apiHandler } from "@/lib/apiHandler";
import { connectDB } from "@/lib/mongoose";
import Product from "@/models/product.model";
import { Types } from "mongoose";

export const GET = apiHandler({
  GET: async (req: Request) => {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const category = searchParams.get("category");
    const occasion = searchParams.get("occasion");
    const sort = searchParams.get("sort");
    const limit = 20;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const filter: Record<string, unknown> = {};
    if (category) {
      filter.category = new Types.ObjectId(category);
    }
    if (occasion) {
      filter.occasion = new Types.ObjectId(occasion);
    }
    if (sort == "hand-picked") {
      filter.isHandPicked = true;
    } else if (sort == "best-sellers") {
      filter.isBestSeller = true;
    }
    await connectDB();
    const products = await Product.find(filter)
      .sort(
        sort == "new"
          ? { createdAt: -1 }
          : sort == "popular"
            ? { views: -1 }
            : {},
      )
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Product.countDocuments(filter);
    return Response.json({
      products,
      total,
      limit,
      totalPages: Math.ceil(total / limit),
      page,
      hasMore: page * limit < total,
    });
  },
});
