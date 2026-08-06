import { apiHandler } from "@/lib/apiHandler";
import { successResponse } from "@/lib/apiResponse";
import { AppError } from "@/lib/appError";
import { connectDB } from "@/lib/mongoose";
import { createInquirySchema } from "@/schemas/inquiry.schema";
import Inquiry from "@/models/inquiry.model";

export const POST = apiHandler({
  POST: async (req: Request) => {
    const body = await req.json();

    // Validate request body
    const parsed = createInquirySchema.safeParse(body);
    if (!parsed.success) {
      throw AppError.badRequest(parsed.error.issues[0].message);
    }
    await connectDB();
    const recentInquiry = await Inquiry.findOne({mobile: parsed.data.mobile}).sort({ createdAt: -1 });
    if(recentInquiry && (new Date().getTime() - recentInquiry.createdAt.getTime()) < 3600000) {
      throw AppError.rateLimited("You can only submit one inquiry per hour.");
    }
    const inquiry = await Inquiry.create(parsed.data);
    if (!inquiry) {
      throw AppError.internal("Failed to create inquiry");
    }
    return Response.json(
      successResponse("Inquiry created successfully", inquiry),
      {
        status: 201,
      },
    );
  },
});
