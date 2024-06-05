import { SkillCard } from "./SkillCard";
import { skillsData } from "../data/data";

export function Skills() {
  return (
    <>
      <div className="container p-4">
        <h1 className="text-white text-2xl font-semibold">What I know</h1>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
          {skillsData.map((skill, index) => {
            return <SkillCard data={skill} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
