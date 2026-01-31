import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import SocialContact from "./SocialContact";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between justify-center p-3 sticky top-0 backdrop-blur-sm z-50">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.avif"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-3xl"
        />
        <h3
          className={`${spaceGrotesk.className} text-xl text-gray-800 dark:text-white leading-tight text-center md:text-left md:text-4xl sm-text-2xl text-nowrap`}
        >
          <TypeAnimation
            sequence={[
              "Li Anthony Gómez",
              2000,
              "Desarrollador FullStack",
              2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="font-bold text-blue-400"
          ></TypeAnimation>
        </h3>
      </div>
      <SocialContact />
    </header>
  );
}

export default Header;
