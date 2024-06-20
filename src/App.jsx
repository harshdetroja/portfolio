import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { LeetCode } from "./components/LeetCode";

function App() {
  return (
    <>
      <div className="font-inter">
        <Navbar />
      </div>
      <div className="fixed mx-4 top-16 max-lg:hidden font-inter">
        <Sidebar />
      </div>
      <section className=" lg:ml-[320px] pt-14 font-inter">
        <div>
          <Profile />
        </div>
        <div id="about" className="flex justify-center items-center">
          <About />
        </div>
        <div id="skill" className="flex justify-center items-center">
          <Skills />
        </div>
        <div id="project" className="flex justify-center items-center">
          <Projects />
        </div>
        <div id="leetcode" className="flex justify-center items-center">
          <LeetCode />
        </div>
      </section>
    </>
  );
}

export default App;
