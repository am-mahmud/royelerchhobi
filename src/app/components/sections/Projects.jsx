import Image from "next/image";

const projects = [
  {
    image: "/assest/porject_5.jpg",
    alt: "Aarong Winter Wonderland 2025",
    title: "Aarong Winter Wonderland 2025",
    description:
      "A celebration fair of crafts — bringing Aarong's winter collection to life through immersive visuals, festive branding, and a space designed to make heritage feel exciting again.",
  },
  {
    image: "/assest/porject_4.jpg",
    alt: "Aarong Shyamoli Opening",
    title: "Aarong Shyamoli Opening",
    description:
      "Launch campaign for Aarong's new Shyamoli outlet — visual identity and on-ground creatives designed to turn a store opening into a neighborhood event.",
  },
  {
    image: "/assest/porject_2.jpg",
    alt: "Shilpokola Mishti Mela 2024",
    title: "Shilpokola Mishti Mela 2024",
    description:
      "Brand visuals for Shilpokola's Mishti Mela 2024 — a festival celebrating Bangladesh's sweets, captured through warm, inviting design that matched the energy of the fair itself.",
  },
];
const Projects = () => {
  return (
    <section className="px-6 py-24 md:px-20">
      <h2 className="font-serif text-center text-4xl font-bold text-black md:text-[6rem]">
        We have Done
      </h2>

      <div className="mt-16 flex flex-col gap-16">
        {projects.map((project, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2"
          >
            <div className="flex justify-end">
              <Image
                src={project.image}
                alt={project.alt}
                width={350}
                height={350}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="max-w-md">
              <h3 className="font-serif text-2xl text-black md:text-3xl mb-3">
                {project.title}
              </h3>
              <p className="font-serif text-lg leading-snug text-[#EDB731] md:text-xl">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
