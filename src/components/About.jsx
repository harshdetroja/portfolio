export function About() {
  const arrowIcon = (
    <svg
      width="30px"
      height="30px"
      viewBox="-2.64 -2.64 29.28 29.28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#8b8a91"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          opacity="0.4"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#000000"
        ></path>{" "}
        <path
          d="M10.7397 16.2802C10.5497 16.2802 10.3597 16.2102 10.2097 16.0602C9.91969 15.7702 9.91969 15.2902 10.2097 15.0002L13.2097 12.0002L10.2097 9.00016C9.91969 8.71016 9.91969 8.23016 10.2097 7.94016C10.4997 7.65016 10.9797 7.65016 11.2697 7.94016L14.7997 11.4702C15.0897 11.7602 15.0897 12.2402 14.7997 12.5302L11.2697 16.0602C11.1197 16.2102 10.9297 16.2802 10.7397 16.2802Z"
          fill="#000000"
        ></path>{" "}
      </g>
    </svg>
  );
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
