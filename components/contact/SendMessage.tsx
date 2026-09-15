import { InquiryForm } from "@/components/forms/InquiryForm";
import { getCategories } from "@/lib/placeholder-data/landing";

export async function SendMessage() {
  const categories = await getCategories();

  return (
    <section
      className="section-padding bg-surface"
      aria-labelledby="send-message-heading"
    >
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="type-eyebrow mb-3">Write to Us</p>
            <h2
              id="send-message-heading"
              className="type-h1 text-text-primary mb-4"
            >
              Send a Message
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-xl mx-auto">
              Share your enquiry and we&apos;ll respond within one business day.
            </p>
          </div>

          <div className="rounded-lg bg-background p-6 md:p-10 shadow-md border border-border/60">
            <InquiryForm categories={categories} inquiryType="contactInquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}
