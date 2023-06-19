import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/The-Ascott-Limited.jpg";
import project2 from "../../public/images/projects/croda.jpg";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl  border border-solid border-dark rounded-3xl bg-light shadow-2xl p-6">
       <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 pr-6">
          <span className="text-primary font-medium pb-2 text-xl">{type}</span>
          <Link href={link} target="_blank" className="pb-3">
            <h2 className="text-bold text-4xl">{title}</h2>
          </Link>
          <p>{summary}</p>
        </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Danie Nguyen | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" />
          <div className="grid grid-cols-12 gap-24 pt-10">
            <div className="col-span-12">
              <FeaturedProject
                title={"Ascott"}
                summary={
                  "A website using AEM with Java and Vuejs, the website provide services about booking for apartment, hotel, resort,... Group many development members together and implement website."
                }
                link={"https://www.discoverasr.com"}
                img={project1}
                type={"Project"}
                github={"/"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Croda"}
                summary={
                  "A website using Sitecore with ASP.NET MVC and Vuejs, the website provide some products, formulation,... about medicines, crop, home care, personal care. Group many development members together and implement website."
                }
                link={"https://www.croda.com"}
                img={project2}
                type={"Project"}
                github={"/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
