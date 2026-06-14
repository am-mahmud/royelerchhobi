const services = [
  {
    title: "Branding & Identity",
    description:
      "Logos, visual identity systems, typography, and brand guidelines — a complete identity built to make your business unforgettable.",
  },
  {
    title: "Web Design & Development",
    description:
      "Fast, modern websites — from one-page brand sites to full custom builds — designed to convert visitors into clients.",
  },
  {
    title: "Ad Creatives & Campaigns",
    description:
      "Static and dynamic ad campaigns, social strategy, and content calendars across every platform — designed to stop the scroll.",
  },
  {
    title: "Packaging Design",
    description:
      "Shelf-ready packaging that captures attention and tells your product's story at a glance.",
  },
  {
    title: "Film, Video & Photography",
    description:
      "TVC and OVC production alongside conceptual photo art — visual storytelling from concept to final cut.",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <div className="flex flex-col gap-4 py-10 px-6 rounded-lg border border-gray-200 h-full">
      <h3 className="font-serif text-center items-center justify-center text-xl leading-tight text-black">
        {service.title}
      </h3>
      <p className="text-sm font-serif text-gray-500 grow">
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-20 py-24">
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="font-serif  text-xl md:text-[80px] font-bold text-black">
            Services
          </h2>
          <div className="grid grid-cols-2 gap-6">
          {services.slice(3, 5).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
        </div>

      
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
