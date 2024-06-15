import profileImg from "../assets/hd.png";
import { socialsList, navList } from "../data/data";

export function Sidebar() {
  return (
    <>
      <aside
        id=""
        className="bg-primaryBg w-[300px] h-[calc(100vh-80px)] p-4 rounded-lg flex flex-col justify-center gap-10"
      >
        {/* <section className="">
          <div>
            <img
              className="h-48 rounded-full mx-auto border-4 border-yellow-500"
              src={profileImg}
              alt="profile img"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-white text-3xl font-semibold text-center">
              Harsh Detroja
            </h2>
          </div>
        </section> */}

        <section className=" text-primary">
          <div className="">
            <div className="pl-4">
              {navList.map((nav, index) => {
                return (
                  <div
                    key={index}
                    className="my-6 hover:-translate-y-1 transition-all ease-in-out duration-300"
                  >
                    <a href={nav.link} className="flex items-center gap-4">
                      <span>{nav.icon}</span>
                      <span className="">{nav.name}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className=" text-primary ">
          <div className="">
            <h4 className="text-lg">Socials:</h4>
            <div className="pl-4">
              {socialsList.map((social, index) => {
                return (
                  <div
                    key={index}
                    className="my-6 hover:-translate-y-1 transition-all ease-in-out duration-300"
                  >
                    <a
                      href={social.link}
                      className="flex items-center gap-4"
                      target="_blank"
                    >
                      <span>{social.icon}</span>
                      <span className="">{social.name}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}
