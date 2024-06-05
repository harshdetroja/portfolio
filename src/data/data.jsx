import ecomImg from "../assets/ecom.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import todoImg from "../assets/todo.png";
import spotifyImg from "../assets/spotify.jpg";
import expenseImg from "../assets/expense.jpg";
import mngImg from "../assets/mng.png";

export const socialsList = [
  {
    name: "Github",
    link: "https://github.com/harshdetroja",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        className=""
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            stroke="#EF4444"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
            d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshd21/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30px"
        height="30px"
        viewBox="0,0,256,256"
      >
        <g
          fill="#FACC15"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M8,3.01172c-1.68739,0 -3.16452,0.47991 -4.24609,1.35352c-1.08157,0.8736 -1.74219,2.16798 -1.74219,3.58203c0,2.74357 2.45699,4.8672 5.70508,4.99414c0.09162,0.02933 0.18702,0.04512 0.2832,0.04688c1.75357,0 3.24619,-0.51401 4.3125,-1.42383c1.06631,-0.90981 1.67578,-2.22152 1.67578,-3.61719c-0.00015,-0.01824 -0.0008,-0.03648 -0.00195,-0.05469c-0.15402,-2.76089 -2.61155,-4.88086 -5.98633,-4.88086zM8,4.98828c2.60907,0 3.89588,1.28106 4.00586,2.98438c-0.0071,0.83228 -0.3293,1.53924 -0.97461,2.08984c-0.65244,0.55669 -1.65982,0.94922 -3.03125,0.94922c-2.60195,0 -4.01172,-1.41255 -4.01172,-3.06445c0,-0.82595 0.33939,-1.50502 1.00781,-2.04492c0.66843,-0.5399 1.6913,-0.91406 3.00391,-0.91406zM3,15c-0.55226,0.00006 -0.99994,0.44774 -1,1v29c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-9.33594v-19.66406c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM18,15c-0.55226,0.00006 -0.99994,0.44774 -1,1v29c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16v-0.25v-0.25c0,-1.94442 1.55558,-3.5 3.5,-3.5c1.94442,0 3.5,1.55558 3.5,3.5v16.5c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-17c0,-4.12652 -1.21211,-7.39555 -3.25586,-9.625c-2.04375,-2.22945 -4.89493,-3.375 -7.95703,-3.375c-3.90424,0 -6.26548,1.42608 -7.78711,2.60156v-1.60156c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM4,17h8v18.66406v8.33594h-8zM19,17h8v2.63867c0.00013,0.41422 0.2556,0.78549 0.64242,0.93364c0.38682,0.14814 0.82494,0.0425 1.10172,-0.26567c0,0 2.9657,-3.30664 8.04297,-3.30664c2.5729,0 4.82842,0.92227 6.48242,2.72656c1.654,1.8043 2.73047,4.53496 2.73047,8.27344v16h-8v-15.5c0.00126,-0.14111 -0.02737,-0.28089 -0.08398,-0.41016c-0.22196,-2.82573 -2.53569,-5.08984 -5.41602,-5.08984c-3.02558,0 -5.5,2.47442 -5.5,5.5v0.25v0.25v15h-8z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Twitter",
    link: "https://twitter.com/HarshDetroja01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30px"
        height="30px"
        viewBox="0,0,256,256"
      >
        <g
          fill="#22D3EE"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/17496240/harsh-detroja",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
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
            d="M2.5 9V14.5H12.5V9M4 12.5H11M4 10L11 10.7M4.29999 7.5L11 9M5.29999 4.5L11.4 7.6M7 2L12 6.50002M9.5 0.5L13 5.5"
            stroke="#4ADE80"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harshdetroja_/",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            fill="#FB923C"
          ></path>{" "}
          <path
            d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
            fill="#FB923C"
          ></path>{" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
            fill="#FB923C"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
];

export const navList = [
  {
    name: "About Me",
    link: "#about",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>about</title>{" "}
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g
              id="about-white"
              fill="#8b8a91"
              transform="translate(42.666667, 42.666667)"
            >
              {" "}
              <path
                d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                id="Shape"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "Skills",
    link: "#skill",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
            d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16"
            stroke="#8b8a91"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "Projects",
    link: "#project",
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect
            width="48"
            height="48"
            fill="white"
            fill-opacity="0.01"
          ></rect>{" "}
          <path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01"></path>{" "}
          <path
            d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"
            stroke="#8b8a91"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M41 14L7 34"
            stroke="#8b8a91"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M24 4L24 44"
            stroke="#8b8a91"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M7 14L41 34"
            stroke="#8b8a91"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
];

export const arrowIcon = (
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

export const colors = [
  "border-red-500",
  "border-yellow-400",
  "border-cyan-400",
  "border-green-400",
  "border-orange-400",
  "border-pink-400",
  "border-violet-400",
  "border-lime-400",
];

export const skillsData = [
  {
    title: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    tech: ["Node.js", "Express.js", "Mongoose", "Zod"],
  },
  {
    title: "Database",
    tech: ["MongoDB", "MySQL", "PostgreSQL"],
  },
];

export const projectData = [
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

export const LinkedInIcon = (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
        fill="#8b8a91"
      ></path>{" "}
      <path
        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
        fill="#8b8a91"
      ></path>{" "}
      <path
        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
        fill="#8b8a91"
      ></path>{" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        fill="#8b8a91"
      ></path>{" "}
    </g>
  </svg>
);
