import Image from "next/image";

const services = [
  {
    icon: "/shirt-icon.png", // Replace with actual icon path
    title: "Custom-Made Suits",
    description: "Designed for your body, your style, your moment. Suit Hire – Affordable, hassle-free, and delivered fast."
  },
  {
    icon: "/dress-icon.png", // Replace with actual icon path
    title: "Bridal, Formal & Racewear Alterations",
    description: "Because the perfect dress deserves the perfect fit."
  },
  {
    icon: "/tape-icon.png", // Replace with actual icon path
    title: "Clothing Repairs & Restyling",
    description: "Don’t toss it, tailor it!"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-12 text-center w-full min-h-[85vh]">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">Services</h2>
      <div className="w-[80vw] border-b border-[2px] border-yellow-300 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={service.icon} alt={service.title} width={200} height={200} className="mb-4" />
            <h3 className="text-lg font-medium mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
