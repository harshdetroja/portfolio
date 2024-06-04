import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="fixed mx-4 top-16 max-lg:hidden">
        <Sidebar />
      </div>
      <section className=" lg:ml-[320px] pt-14">
        <div id="about">
          <About />
        </div>
        <div id="skill">
          <Skills />
        </div>
        <div id="project">
          <Projects />
        </div>
      </section>
    </>
  );
}

export default App;
