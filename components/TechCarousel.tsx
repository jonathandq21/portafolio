"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "react.png",
  "nextjs.png",
  "angular.png",
  "csharp.png",
  "java.png",
  "php.png",
  "typescript.png",
  "sql.png",
  "postgresql.png",
  "git.png",
  "linux.png",
];

export default function TechCarousel() {
  return (
    <div className="mt-10">
      <Marquee pauseOnHover gradient={false} speed={40}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-10">
            <Image
              src={`/logos/${logo}`}
              alt={logo}
              width={80}
              height={80}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
