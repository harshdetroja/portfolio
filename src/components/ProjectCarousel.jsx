import { ProjectCard } from "./ProjectCard";
import { projectData } from "../data/data";
export function ProjectCarousel() {
  return (
    <div className=" p-4 rounded-md my-4">
      <div className="text-xs grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {projectData.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}
