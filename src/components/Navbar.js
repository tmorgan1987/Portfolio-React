import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href className="title-font font-medium text-white mb-4 md:mb-0 font-mono">
          <a href="#about" className="ml-3 text-xl">
					<CodeIcon className="mx-auto inline-block w-5 mb-1 mr-1" />
            Troy Morgan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-slate-400 justify-center">
          <a href="#projects" className="mr-5 hover:text-white font-mono ">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white font-mono">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-slate-400 mt-4 md:mt-0 font-mono font-semibold">
				<SocialIcon url="https://github.com/tmorgan1987" />
				<SocialIcon url="https://www.linkedin.com/in/troy-morgan-6a6845252/" />
				
        </a>
      </div>
    </header>
  );
}