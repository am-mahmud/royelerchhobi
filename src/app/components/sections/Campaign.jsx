import Image from "next/image";

const Campaign = () => {
  return (
    <div className="relative w-full flex items-center justify-center px-6 md:px-20 py-24">
      <span className="font-serif absolute top-10 right-60 text-[2rem] md:text-[8rem] font-bold text-black select-none leading-none pointer-events-none z-10">
        CITY OF SOUND
      </span>
      <div className="relative w-full max-w-2xl aspect-3/2">
        <Image
          src="/assest/campaign-1.jpeg"
          alt="Campaign Image"
          fill
          className="object-contain rounded-lg opacity-25"
        />
      </div>
      <span className="font-serif text-[#EDB731] leading-snug max-w-sm absolute top-50 right-20 text-[2rem] md:text-lg select-none pointer-events-none -z-10">
        In a city where horns scream louder than rock concerts and silence has
        become a memory, one man stood still. For years, on weekends and after
        long workdays, Mominur Rahman Royal has held a single yellow placard at
        a Dhaka intersection not shouting, not blocking, just standing. His
        message is simple, almost a joke: only fools honk without reason. But
        beneath the rhyme is a quieter plea for a city that listens before it
        reacts, for streets where peace isn't drowned out by impatience. This
        isn't a campaign we designed. It's one we live.
      </span>
    </div>
  );
};

export default Campaign;
