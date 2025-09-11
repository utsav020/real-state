import Image from "next/image";

const history = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur. In nibh fames sollicitudin in placerat. Ut aliquet.",
    image: "/images/Like-1.png",
  },
];

export default function History() {
  return (
    <div className="bg-[#f7f5f0] max-w-[960px] mx-auto rounded-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">History</h3>
      <div className="space-y-4">
        {history.map((h) => (
          <div
            key={h.id}
            className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-4 shadow-sm"
          >
            <div className="flex-shrink-0 w-full sm:w-[100px] md:w-[200px] h-[200px] relative">
              <Image
                src={h.image}
                alt={h.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base sm:text-lg">{h.title}</h4>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
