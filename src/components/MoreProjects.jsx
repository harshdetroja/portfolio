import { moreIcon } from "../data/data";

export function MoreProjects() {
  const handleClick = () => {
    const url = "https://github.com/harshdetroja?tab=repositories";

    window.open(url, "_blank");
  };
  return (
    <>
      <div
        className="rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out	duration-500 bg-primaryBg text-primary p-4 border-[0.5px] border-primary"
        onClick={handleClick}
      >
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          <div className="text-2xl font-bold">More Projects</div>
          <div className="">{moreIcon}</div>
        </div>
      </div>
    </>
  );
}
