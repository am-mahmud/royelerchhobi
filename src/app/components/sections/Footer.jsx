import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/royalerchhobi",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/royalerchhobi",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UC_v1UPT8P3y7hXNeXVS17qA",
    label: "YouTube",
  },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-16 md:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 items-center">
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <h3 className="font-serif text-lg text-white mb-1">
            Royalerchhobi Communications
          </h3>
          <p className="leading-relaxed">
            House 27, Road 2, Block B, Niketan,
            <br />
            Gulshan 01, Dhaka 1212, Bangladesh
          </p>
          <p>+880 1954 468837</p>
          <p>royalerchhobicommunications@gmail.com</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/assest/logo.png"
            alt="Royalerchhobi logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="text-xs text-white/30 text-center">
            © {new Date().getFullYear()} Royalerchhobi. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
