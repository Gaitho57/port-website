import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import SkillComponent from "./SkillComponent";
import data from "@/data/work"; // Assuming the path to data.js

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>work history</Heading>
      {/* Assuming you have a SkillComponent component to render skills */}
      <div className="mt-6 flex gap-x-6" key={data[0].id}>
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
          <Image
            src={data[0].image}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-black dark:text-white capitalize font-bold text-base">
            {data[0].role}
          </h2>
          <span className="capitalize text-sm font-bold text-zinc-500">
            {data[0].company}
          </span>
          <div className="flex items-center gap-x-1 ">
            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[]2px[">
              {data[0].type}
            </span>
            <span className="text-black dark:text-white">-</span>
            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[]2px[">
              {data[0].date}
            </span>
          </div>
          {data[0].skills && (
            <div className="flex gap-2 flex-wrap my-2">
              {data[0].skills.map((skill) => (
                <SkillComponent key={skill.id} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkHistory;
