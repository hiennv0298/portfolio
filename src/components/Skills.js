import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark py-3 px-6 cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2>
      <div className="w-[110%] h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center text-2xl justify-center rounded-full font-semibold bg-dark text-light shadow-dark px-6 py-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web Dev
        </motion.div>
        <Skill name={"HTML"} x={"-13vw"} y={"-5vw"} />
        <Skill name={"Css"} x={"0vw"} y={"-8vw"} />
        <Skill name={"Javascript"} x={"15vw"} y={"-2vw"} />
        <Skill name={"TypeScript"} x={"10vw"} y={"6vw"} />
        <Skill name={"NodeJS"} x={"10vw"} y={"-11vw"} />
        <Skill name={"ReactJs"} x={"28vw"} y={"-7vw"} />
        <Skill name={"NextJs"} x={"30vw"} y={"-13vw"} />
        <Skill name={"NestJs"} x={"20vw"} y={"-17vw"} />
        <Skill name={"Angular"} x={"-5vw"} y={"-15vw"} />
        <Skill name={"Material"} x={"-15vw"} y={"-19vw"} />
        <Skill name={"NGX"} x={"5vw"} y={"-20vw"} />
        <Skill name={"VueJS"} x={"-25vw"} y={"-10vw"} />
        <Skill name={"Vuetify"} x={"-35vw"} y={"-8vw"} />

        <Skill name={".NET"} x={"-7vw"} y={"7vw"} />
        <Skill name={"C#"} x={"-22vw"} y={"3vw"} />
        <Skill name={"EF"} x={"-33vw"} y={"10vw"} />
        <Skill name={"ASP.NET"} x={"5vw"} y={"12vw"} />
        <Skill name={"SQL"} x={"20vw"} y={"12vw"} />
        <Skill name={"No-SQL"} x={"30vw"} y={"12vw"} />
        <Skill name={"Web API"} x={"-18vw"} y={"13vw"} />
        <Skill name={"Winform"} x={"-18vw"} y={"13vw"} />
        <Skill name={"ASP.NET Core"} x={"30vw"} y={"3vw"} />
        <Skill name={"ASP.NET MVC"} x={"18vw"} y={"18vw"} />
        <Skill name={"ASP.NET Core Web Api"} x={"-5vw"} y={"20vw"} />
      </div>
    </>
  );
};

export default Skills;