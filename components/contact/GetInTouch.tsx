import { CONTACT } from "@/constants/contact";

export function GetInTouch() {
  const { phones, email, whatsapp, timings } = CONTACT;

  return (
    <section
      className="pb-16 md:pb-24"
      aria-labelledby="get-in-touch-heading"
    >
      <div className="container-xl">
        <p className="type-eyebrow mb-3">Reach Us</p>
        <h2
          id="get-in-touch-heading"
          className="type-h1 text-text-primary mb-10 md:mb-14"
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Phone */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="type-eyebrow text-text-secondary">Phone</h3>
            <ul className="space-y-2">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="text-lg text-text-primary hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="type-eyebrow text-text-secondary">Email</h3>
            <a
              href={email.href}
              className="text-lg text-text-primary hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline break-all"
            >
              {email.label}
            </a>
          </div>

          {/* Shop timings */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="type-eyebrow text-text-secondary">Shop Timings</h3>
            <ul className="space-y-3">
              {timings.map((row) => (
                <li key={row.days}>
                  <p className="text-text-primary font-medium">{row.days}</p>
                  <p className="text-text-secondary text-sm mt-0.5">
                    {row.hours}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="type-eyebrow text-text-secondary">WhatsApp</h3>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-5">
              <div className="relative h-[140px] w-[140px] shrink-0 rounded-md overflow-hidden border border-border bg-surface p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={whatsapp.qrSrc}
                  alt="QR code to chat with Afazvin on WhatsApp"
                  width={220}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-text-primary hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {whatsapp.label}
                </a>
                <p className="text-sm text-text-secondary">Scan to chat</p>
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
