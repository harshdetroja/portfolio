export function Navbar() {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1oZguQsslpqAjOXbhc3bAM6tc3scneW7w/view?usp=sharing";

    window.open(pdfUrl, "_blank");
  };

  // const hamburgerIcon = (
  //   <svg
  //     width="30px"
  //     height="30px"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  //     <g
  //       id="SVGRepo_tracerCarrier"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //     ></g>
  //     <g id="SVGRepo_iconCarrier">
  //       {" "}
  //       <path
  //         d="M20 7L4 7"
  //         stroke="#8b8a91"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //       ></path>{" "}
  //       <path
  //         d="M20 12L4 12"
  //         stroke="#8b8a91"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //       ></path>{" "}
  //       <path
  //         d="M20 17L4 17"
  //         stroke="#8b8a91"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //       ></path>{" "}
  //     </g>
  //   </svg>
  // );
  return (
    <>
      <nav className=" py-4 px-4 xs:px-6 sm:px-8 lg:px-10 flex justify-between items-center fixed bg-bodyBg top-0 w-screen">
        <div className="flex gap-2 ">
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        </div>
        {/* <div className="flex gap-2 lg:hidden">{hamburgerIcon}</div> */}

        <button
          onClick={handleDownload}
          className="text-white text-sm bg-green-500 p-2 rounded-md hover:outline-2 hover:outline-green-500 hover:bg-white hover:text-green-500"
        >
          Resume Download
        </button>
      </nav>
    </>
  );
}
