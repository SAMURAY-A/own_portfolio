"use client";

import { useSectionInView } from "@/common/lib/hooks";
import portfolioImg from "@/../public/images/photo.jpg";
import { smoothScrollTo } from "@/common/lib/utils";
import SectionDivider from "@/common/components/shared/section-divider";
import SectionHeading from "@/common/components/shared/section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("about", 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden px-4 py-12 sm:w-[60%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="group relative w-full">
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary lg:absolute lg:right-0 lg:top-[27%] lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:h-[442px] xl:max-w-[650px]">
              <div className="flex h-full flex-col justify-center gap-6">
                <span>
                Hello! My name is Abdullohaziz Jumanazarov, a Fullstack Developer from Bagdad district, Fergana region, Uzbekistan. I began programming in 2023 with C and Python at Najot Ta'lim, where I built a strong foundation. Currently, I specialize in Node.js and React.js to create intuitive and efficient web applications.
                </span>
                <span>
                During my studies at Najot Ta'lim, I not only strengthened my knowledge of C and Python but also focused on acquiring in-depth skills in Node.js and React.js. My goal is to create web applications that offer intuitive user experiences. Throughout my learning journey, I worked on numerous projects, each of which provided me with the opportunity to develop new skills and master various technologies. 
                </span>
                <span>Now, as a Fullstack Developer, I am continuously expanding my expertise to build more advanced and efficient web applications.</span>
                
                <p className="flex flex-col items-start sm:items-center lg:items-start">
                  <span>So if you are interested,</span>
                  <Link
                    href={"contact"}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: "contact" });
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case">
                      Contact me!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="absolute z-30 hidden lg:left-0 lg:top-1/4 lg:block">
              <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-60"></div>
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={470}
                    height={470}
                    className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
