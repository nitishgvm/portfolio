import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projectData } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleButtonClick = (e,url) => {
    e.preventDefault()
    window.open(url, '_blank');
  };

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projectData.map((el) => (
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
            >
              <a href="hello">
                <img class="rounded-t-lg w-full" src={el.img} alt={el.name} />
              </a>
              <div class="p-5">
                <a href="helo">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.name}
                  </h5>
                </a>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.desc}
                </p> */}
                <div className="relative group w-full">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    {el.desc}
                  </p>
                  <span className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded-lg shadow-lg z-10 w-full">
                    {el.desc}
                  </span>
                </div>
                <a
                  href="hello"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  onClick={(e)=>handleButtonClick(e,el.url)}
                >
                  Know more
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
