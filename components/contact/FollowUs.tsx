import { CONTACT } from "@/constants/contact";

export function FollowUs() {
  const { instagram, facebook } = CONTACT.social;

  const platforms = [
    {
      key: "instagram",
      ...instagram,
    },
    {
      key: "facebook",
      ...facebook,
    },
  ] as const;

  return (
    <section
      className="section-padding"
      aria-labelledby="follow-us-heading"
    >
      <div className="container-xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="type-eyebrow mb-3">Social</p>
          <h2
            id="follow-us-heading"
            className="type-h1 text-text-primary"
          >
            Follow Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.key}
              className="flex flex-col items-center text-center space-y-5"
            >
              <div className="relative h-[160px] w-[160px] rounded-md overflow-hidden border border-border bg-surface p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.qrSrc}
                  alt={`QR code for Afazvin on ${platform.label}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-3">
                <p className="type-eyebrow text-text-secondary">
                  {platform.label}
                </p>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[44px] px-6 rounded-sm border-[1.5px] border-primary text-primary text-sm font-semibold tracking-wide uppercase hover:bg-primary/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {platform.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
