import Image from "next/image";

const team = [
  {
    name: "Md. Mominur Rahman",
    role: "Founder",
    image: "/assest/team-1.png",
  },
  {
    name: "A F Rabbi",
    role: "Visualizer",
    image: "/assest/team-2.png",
  },
  {
    name: "A B M Ehesanul Haque",
    role: "Brand Executive",
    image: "/assest/team-3.png",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-3 items-center justify-center px-6 py-24 md:px-20"
    >
      <h2 className="col-span-1 font-serif text-4xl font-bold text-black md:text-6xl lg:text-7xl">
       Making it happen By
      </h2>

      <div className="col-span-2 mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
        {team.map((member) => (
          <div key={member.name} className="group">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 font-serif text-2xl text-black ">
              {member.name}
            </h3>
            <p className="text-base font-serif tracking-wide text-black/50 ">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
