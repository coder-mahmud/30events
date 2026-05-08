import Image from "next/image";


export default function JoinSection() {
  return (
    <section id="join" className="bg-[#130A10] py-16  md:py-20  lg:py-28  scroll-mt-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="max-w-[560px]">

          <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="mb-3 text-[30px] font-semibold uppercase tracking-[0.22em] text-pink">
            Join Us
          </p>


          <h2 data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="font-heading text-[48px] uppercase leading-none text-[#FAF3F7] md:text-[54px] lg:text-[60px] tracking-[-1.2px]">
            30 Plus &amp; Lovin&apos; Life
          </h2>

          <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="mt-8 max-w-[540px] text-[18px] leading-[1.55] text-bodyPink md:text-[20px]">
            We host events for grown-ups who still know how to have fun! We&apos;ll
            be playing your favorite songs from the 80s, 90s &amp; early 2000s.
            No kids, no late nights, just good times!
          </p>
        </div>

        {/* Image */}
        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="800" data-aos-delay="0" className="relative">
          
          <Image
            src="/images/cocktail.svg"
            alt="People enjoying a party"
            className="h-[420px] w-full rounded-2xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:h-[560px] lg:h-[680px]"
            width={610} height={780}
          />
        </div>
      </div>
    </section>
  );
}