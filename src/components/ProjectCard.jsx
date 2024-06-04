export function ProjectCard({ data }) {
  const handleClick = () => {
    const url = data.link;

    window.open(url, "_blank");
  };
  return (
    <>
      <div
        className="max-w-[300px] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out	duration-500 "
        onClick={handleClick}
      >
        <div className="">
          <img
            src={data.img}
            alt=""
            className="h-40 border-b-[1px] border-bodyBg w-full"
          />
        </div>
        <div className="px-4 py-6 bg-white h-32">
          <h4 className="text-sm font-bold mb-2">{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
}
