  "use client";

  import Image from "next/image";

  interface Builder {
    id: number;
    logo: string;
  }

  const builders: Builder[] = [
    { id: 1, logo: "/images/Logo-1.png" },
    { id: 2, logo: "/images/Logo-2.png" },
    { id: 3, logo: "/images/Logo-3.png" },
    { id: 4, logo: "/images/Logo-4.png" },
    // ✅ Duplicate for infinite loop
    { id: 5, logo: "/images/Logo-1.png" },
    { id: 6, logo: "/images/Logo-2.png" },
    { id: 7, logo: "/images/Logo-3.png" },
    { id: 8, logo: "/images/Logo-4.png" },
  ];

  export default function TopBuilders() {
    return (
      <section className="py-16 max-w-[1520px] mx-auto w-full">
        <h2 className="lg:text-[64px] text-[40px]  text-[#3E362E] font-bold text-center mb-10">
          Top Builders
        </h2>

        {/* ✅ Slider container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide">
            {builders.map((b, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-6"
              >
                <Image
                  src={b.logo}
                  alt={`Builder Logo ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
