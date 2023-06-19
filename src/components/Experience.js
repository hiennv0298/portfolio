import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark capitalize"
          >
            @{company}
          </a>
          &nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Intern Application Developer"}
            companyLink={"https://vietmap.vn"}
            company={"VietMap JSC"}
            time={"2018-2019"}
            address={"District 5, HCMC"}
            work={
              "As an intern Application Developer at VietMap JSC, I would have collaborated with experienced developers, assisting in various software development tasks such as coding, testing, and debugging. I would have had the opportunity to learn and enhance my technical skills while contributing to real-world projects. Additionally, I would have participated in team meetings, documentation, and code reviews, gaining practical experience in a professional software development environment and fostering my growth as a developer."
            }
          />

          <Details
            position={"AEM Developer"}
            companyLink={"https://fptsoftware.com/"}
            company={"FPT Software"}
            time={"2021-2022"}
            address={"District 9, HCMC"}
            work={
              "As a junior AEM Developer, I would be responsible for assisting in the development and maintenance of web applications and websites using the Adobe Experience Manager platform. My role would involve tasks such as implementing new features and functionalities within AEM, troubleshooting and resolving issues, and ensuring the smooth functioning of the applications and websites. I would work closely with the development team, following coding standards and best practices to deliver high-quality solutions. As a junior developer, I would also have opportunities to learn and grow in my role, gaining valuable experience in AEM development and contributing to the success of digital experiences."
            }
          />

          <Details
            position={"Sitecore Developer"}
            companyLink={"https://www.themission.co.uk/"}
            company={"The Mission Made Vietnam"}
            time={"2023-now"}
            address={"Binh Thanh District, HCMC"}
            work={
              "As a junior Sitecore Developer, my role would encompass providing support in the development and upkeep of websites and applications utilizing the Sitecore Experience Platform. This would entail participating in tasks such as customizing Sitecore components, templates, and layouts to align with specific project requirements. I would also contribute to the identification and resolution of issues and bugs within the Sitecore environment, ensuring seamless functionality and optimal performance. Working collaboratively with the development team, I would actively contribute to the delivery of engaging and personalized digital experiences powered by Sitecore. As a junior developer, this role presents an opportunity for continuous learning and growth in the realm of Sitecore development."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
