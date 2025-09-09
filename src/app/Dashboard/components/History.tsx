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
    <div className="bg-[#f7f5f0] rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">History</h3>
      <div className="space-y-4">
        {history.map((h) => (
          <div key={h.id} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <Image
              src={h.image}
              alt={h.title}
              width={100}
              height={100}
              className="rounded-md w-[100px] h-[100px] object-cover"
            />
            <div>
              <h4 className="font-semibold">{h.title}</h4>
              <p className="text-sm text-gray-500">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
