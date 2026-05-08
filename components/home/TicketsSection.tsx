import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const events = [
  {
    date: "May 24 · Canada",
    title: "Vinyl Nights Vol. 7",
    image: "/images/tickets/ticket-bg-1.svg",
    tickets: [
      {
        name: "Early Bird",
        desc: "Entry before 11 PM · Coat check",
        price: "$28",
        qty: "Sold Out",
        soldOut: true,
      },
      {
        name: "Standard",
        desc: "Entry all night",
        price: "$38",
        qty: 0,
      },
      {
        name: "VIP Booth",
        desc: "Reserved booth (4 ppl) · Bottle service · Dedicated host",
        price: "$180",
        qty: 0,
      },
    ],
  },
  {
    date: "Jun 07 · Manchester",
    title: "After Dark Lounge",
    image: "/images/tickets/ticket-bg-2.svg",
    tickets: [
      {
        name: "Standard",
        desc: "Entry · Welcome drink",
        price: "$22",
        qty: 0,
      },
      {
        name: "Plus One",
        desc: "Entry for two · Welcome drink",
        price: "$40",
        qty: 0,
      },
      {
        name: "VIP Table",
        desc: "Reserved table (6 ppl) · Premium bottle · Cheese & charcuterie",
        price: "$220",
        qty: 0,
      },
    ],
  },
  {
    date: "Jun 19 · Birmingham",
    title: "Throwback Thursday: 90s & 00s",
    image: "/images/tickets/ticket-bg-3.svg",
    tickets: [
      {
        name: "Standard",
        desc: "Entry",
        price: "$18",
        qty: 0,
      },
      {
        name: "Skip-The-Queue",
        desc: "Priority entry · Cloakroom included",
        price: "$32",
        qty: 0,
      },
      {
        name: "Group of 6",
        desc: "Six entries · Reserved area",
        price: "$96",
        qty: 2,
      },
    ],
  },
];

export default function TicketsSection() {
  const aosBase = {
    "data-aos-offset": "0",
    "data-aos-duration": "800",
  };

  return (
    <section id="tickets" className="bg-black py-16 md:py-20 lg:py-28 scroll-mt-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-12 max-w-[760px]">
          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="800"
            data-aos-delay="0"
            className="mb-3 text-[18px] font-semibold uppercase tracking-[0.24em] text-pink md:text-[20px]"
          >
            Box Office
          </p>

          <h2
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="100"
            className="font-heading text-[54px] uppercase leading-none tracking-[-1.2px] text-[#FAF3F7] md:text-[70px] lg:text-[82px]"
          >
            Get Your Tickets
          </h2>

          <p
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="900"
            data-aos-delay="200"
            className="mt-6 text-[18px] leading-[1.55] text-bodyPink md:text-[20px]"
          >
            Pick your nights, pick your tiers. Add as many as you like —
            checkout in one go.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                {...aosBase}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
                data-aos-delay={index * 120}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#130A10]"
              >
                {/* Event Image Header */}
                <div className="relative h-[180px] md:h-[210px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#130A10] via-[#130A10]/55 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="700"
                      data-aos-delay="100"
                      className="mb-2 text-[13px] font-bold uppercase tracking-[0.22em] text-pink md:text-[15px]"
                    >
                      {event.date}
                    </p>

                    <h3
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="700"
                      data-aos-delay="180"
                      className="font-heading text-[34px] uppercase leading-none tracking-[-0.7px] text-[#FAF3F7] md:text-[42px]"
                    >
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Ticket Rows */}
                <div>
                  {event.tickets.map((ticket, ticketIndex) => (
                    <div
                      key={ticketIndex}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="700"
                      data-aos-delay={ticketIndex * 100}
                      className="grid grid-cols-[1fr_auto] items-center gap-5 border-t border-white/10 px-5 py-5 md:px-6"
                    >
                      <div>
                        <h4 className="flex items-center gap-1 text-[15px] font-bold uppercase tracking-wide text-[#FAF3F7] md:text-[17px]">
                          {ticket.name}

                          <Image
                            src="/images/tickets/tick-pink.png"
                            width={12}
                            height={12}
                            alt="tick"
                          />
                        </h4>

                        <p className="mt-1 text-[13px] leading-relaxed text-bodyPink md:text-[15px]">
                          {ticket.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 md:gap-5">
                        <p className="text-[18px] font-bold text-pink md:text-[20px]">
                          {ticket.price}
                        </p>

                        {ticket.soldOut ? (
                          <button
                            disabled
                            className="min-w-[120px] rounded-full border border-white/10 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bodyPink opacity-60"
                          >
                            Sold Out
                          </button>
                        ) : (
                          <div className="flex h-10 min-w-[120px] items-center justify-between rounded-full border border-white/10 bg-black px-4">
                            <button className="text-bodyPink transition hover:text-pink">
                              −
                            </button>

                            <span className="text-[17px] font-bold text-white">
                              {ticket.qty}
                            </span>

                            <button className="text-bodyPink transition hover:text-pink">
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* House Rules */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="900"
              data-aos-delay="150"
              className="rounded-2xl border border-white/10 bg-[#130A10] px-6 py-6 text-[15px] leading-relaxed text-bodyPink md:text-[17px]"
            >
              <span className="font-bold uppercase tracking-wide text-[#FAF3F7]">
                House Rules:
              </span>{" "}
              Strict 30+ ID check at the door. Smart-casual minimum. No phones
              on the dancefloor — we mean it. Tickets are non-refundable but
              transferable up to 48 hrs prior.
            </div>
          </div>

          {/* Order Card */}
          <aside
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="sticky top-28 rounded-2xl border border-white/10 bg-[#130A10] shadow-[0_30px_90px_rgba(225,129,176,0.18)]"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
              <ShoppingBag size={18} className="text-pink" />

              <h3 className="font-heading text-[26px] uppercase leading-none text-[#FAF3F7]">
                Your Order
              </h3>
            </div>

            <div className="border-b border-white/10 px-6 py-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[16px] font-bold text-[#FAF3F7]">
                    Throwback Thursday: 90s &amp; 00s
                  </p>

                  <p className="mt-1 text-[14px] text-bodyPink">
                    Group of 6 × 2
                  </p>
                </div>

                <p className="text-[15px] font-bold text-pink">$192</p>
              </div>
            </div>

            <div className="px-6 py-7">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[13px] uppercase tracking-[0.22em] text-bodyPink">
                  Total (2)
                </p>

                <p className="text-[34px] font-bold text-pink">$192</p>
              </div>

              <button className="w-full rounded-full bg-pink px-8 py-4 text-[14px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(225,129,176,0.55)]">
                Checkout
              </button>

              <p className="mt-5 text-center text-[11px] uppercase tracking-[0.22em] text-bodyPink">
                Secure Payment · Instant E-Ticket
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}