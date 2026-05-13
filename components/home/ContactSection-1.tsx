import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#130A10] py-16 md:py-20 lg:py-28  scroll-mt-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          {/* Left */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="800"
              data-aos-delay="0"
              className="mb-4 text-[16px] font-semibold uppercase tracking-[0.35em] text-pink"
            >
              Talk To Us
            </p>

            <h2
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="900"
              data-aos-delay="100"
              className="font-heading text-[48px] uppercase leading-none tracking-[-1.2px] text-[#FAF3F7] md:text-[64px] lg:text-[76px]"
            >
              Drop Us A Line.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="900"
              data-aos-delay="200"
              className="mt-7 max-w-[560px] text-[18px] leading-[1.55] text-bodyPink md:text-[20px]"
            >
              Private bookings, VIP tables, press and partnerships. We reply
              within 24 hours.
            </p>

            {/* Form */}
            <form
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="mt-8 rounded-2xl border border-white/10 bg-black/45 px-6 py-8 md:px-8 md:py-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] uppercase tracking-[0.22em] text-bodyPink">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="h-12 w-full rounded-lg bg-[#2A1723] px-4 text-[#FAF3F7] outline-none transition focus:ring-2 focus:ring-pink"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] uppercase tracking-[0.22em] text-bodyPink">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-12 w-full rounded-lg bg-[#2A1723] px-4 text-[#FAF3F7] outline-none transition focus:ring-2 focus:ring-pink"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-[13px] uppercase tracking-[0.22em] text-bodyPink">
                  Enquiry
                </label>
                <select className="h-12 w-full rounded-lg bg-[#2A1723] px-4 text-[#FAF3F7] outline-none transition focus:ring-2 focus:ring-pink">
                  <option>Private booking</option>
                  <option>VIP tables</option>
                  <option>Press</option>
                  <option>Partnerships</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-[13px] uppercase tracking-[0.22em] text-bodyPink">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us what you have in mind..."
                  className="w-full resize-none rounded-lg bg-[#2A1723] px-4 py-4 text-[#FAF3F7] outline-none transition placeholder:text-bodyPink focus:ring-2 focus:ring-pink"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink px-8 py-4 text-[14px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(225,129,176,0.55)]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Cards */}
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-delay="350"
            className="space-y-5 lg:pt-10"
          >
            <InfoCard
              icon={<Mail size={22} />}
              label="Email"
              value="yourthirtyplusevents@gmail.com"
              delay={0}
            />

            <InfoCard
              icon={<MapPin size={22} />}
              label="HQ"
              value="Vancouver, BC."
              delay={120}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-duration="800"
      data-aos-delay={delay}
      className="rounded-2xl border border-white/10 bg-black/45 p-6 md:p-7"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-pink/40 bg-pink/10 text-pink">
        {icon}
      </div>

      <p className="mb-2 text-[13px] uppercase tracking-[0.22em] text-bodyPink">
        {label}
      </p>

      <p className="text-[17px] font-bold text-[#FAF3F7] md:text-[18px]">
        {value}
      </p>
    </div>
  );
}