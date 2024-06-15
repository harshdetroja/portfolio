import { Chip } from "./Chip";
import { colors } from "../data/data";

export function SkillCard({ data }) {
  return (
    <>
      <div className="text-primary bg-primaryBg px-6 py-4 rounded-md h-[300px]">
        <h3 className="my-2 font-medium text-xl">{data.title}</h3>

        <div className="grid grid-cols-2 gap-4 text-sm font-light my-4">
          {data.tech.map((skill, index) => {
            return <Chip key={index} title={skill} color={colors[index]} />;
          })}
        </div>
      </div>
    </>
  );
}
