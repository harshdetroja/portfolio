import { SkillCard } from "./SkillCard";

const skillsData = [
  {
    title: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    tech: ["Node.js", "Express.js", "Mongoose", "Zod"],
  },
  {
    title: "Database",
    tech: ["MongoDB", "MySQL", "PostgreSQL"],
  },
];
export function Skills() {
  return (
    <>
      <div className="container p-4">
        <h1 className="text-white text-2xl font-semibold">What I know</h1>
        <div className="grid grid-cols-3 gap-4 my-4">
          {skillsData.map((skill, index) => {
            return <SkillCard data={skill} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
