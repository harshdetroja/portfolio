import { arrowIcon } from "../data/data";

export function About() {
  return (
    <>
      <div className="container p-4">
        <h1 className="text-white text-2xl font-semibold">About Me</h1>
        <div className="p-4 text-primary bg-primaryBg rounded-md my-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            dolores sequi labore totam pariatur libero harum fugiat deleniti
            similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam doloribus vitae magnam! Quaerat animi corrupti ipsam
            reprehenderit ipsum laboriosam beatae enim quo eaque officia.
          </p>

          <div className="mt-6 text-primary">
            <h4 className="text-lg">Experience:</h4>
            <div className="pl-1 my-2">
              <div className="flex gap-2 my-2">
                <span>{arrowIcon}</span>
                <div className="flex flex-col">
                  <p>Centricwave LLP</p>
                  <p className="text-xs pl-2">Software Engineering Intern</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span>{arrowIcon}</span>
                <div className="text-sm">Tech Stack : React.js, Nextjs.</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-primary">
            <h4 className="text-lg">Education:</h4>
            <div className="pl-1 my-2">
              <div className="flex gap-2 my-2">
                <span>{arrowIcon}</span>
                <div className="flex flex-col">
                  <p>Vellore Institue of Technolgy</p>
                  <p className="text-xs pl-2">
                    Computer Science and Engineering
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span>{arrowIcon}</span>
                <div className="text-sm">CGPA : 8.65</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
