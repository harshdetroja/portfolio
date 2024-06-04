import { ProjectCard } from "./ProjectCard";
import ecomImg from "../assets/ecom.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import todoImg from "../assets/todo.png";
import spotifyImg from "../assets/spotify.jpg";
import expenseImg from "../assets/expense.jpg";
import mngImg from "../assets/mng.png";

export function ProjectCarousel() {
  const projectData = [
    {
      title: "Ecommerce Website",
      description: "Next.js, Tailwind CSS, Mongoose ODM, MongoDB.",
      img: ecomImg,
      link: "https://github.com/harshdetroja/elitecommerce-solutions",
    },
    {
      title: "Portfolio Website",
      description: "React.js, Tailwind CSS.",
      img: portfolioImg,
      link: "https://github.com/harshdetroja/portfolio",
    },
    {
      title: "Full-Stack Todo app",
      description:
        "React.js, Tailwind CSS, Express.js, Zod, Mongoose ODM, MongoDB.",
      img: todoImg,
      link: "https://github.com/harshdetroja/fullstack-todo-app",
    },
    {
      title: "Spotify Stats",
      description: "React.js, JQuery, Spotify Web API.",
      img: spotifyImg,
      link: "https://github.com/harshdetroja/SoundStats",
    },
    {
      title: "Expense Tracker",
      description: "React.js, CSS.",
      img: expenseImg,
      link: "https://github.com/harshdetroja/Expense-Tracker",
    },
    {
      title: "Project Management App",
      description: "React.js, CSS.",
      img: mngImg,
      link: "https://github.com/harshdetroja/project-management-app",
    },
  ];
  return (
    <div className=" p-4 rounded-md my-4">
      <div className="text-xs grid grid-cols-4 gap-6 ">
        {projectData.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}
