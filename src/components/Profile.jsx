import profileImg from "../assets/hd.png";
import { LinkedInIcon } from "../data/data";
export function Profile() {
  return (
    <>
      <div className="realtive bg-profile-bg p-4 bg-center bg-cover mx-4 rounded-md my-4">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={profileImg}
              alt=""
              className="h-40 rounded-full border-2 border-yellow-500"
            />
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-black">Harsh Detroja</h1>
              <a
                href="https://github.com/harshdetroja"
                className="text-xs sm:text-sm font-light"
                target="_blank"
              >
                @harshdetroja
              </a>
            </div>
          </div>
          <a
            className="bg-bodyBg flex items-center p-2 gap-2 h-10 rounded-md text-sm md:text-sm max-sm:hidden hover:ring-2 hover:ring-primary "
            href="https://www.linkedin.com/in/harshd21/"
            target="_blank"
          >
            <span>{LinkedInIcon}</span>
            <span className="text-primary">Let's connect on LinkedIn!</span>
          </a>
        </div>
      </div>
    </>
  );
}
