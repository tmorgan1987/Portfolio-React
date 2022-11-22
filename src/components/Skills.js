import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMysql, SiSequelize, SiHandlebarsdotjs, SiMongodb, SiReact } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4 font-mono">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-mono">
            I'm fluent in these languages and technologies!
          </p>
        </div>
			<div class="flex flex-row justify-center">
				<SiHtml5 className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiCss3 className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiJavascript className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiNodedotjs className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiExpress className="mx-auto inline-block w-10 mb-4 techicons" />
			</div>
			<div class="flex flex-row justify-center">
				<SiMysql className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiSequelize className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiHandlebarsdotjs className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiMongodb className="mx-auto inline-block w-10 mb-4 techicons" />
				<SiReact className="mx-auto inline-block w-10 mb-4 techicons" />
			</div>
    </div>
    </section>
  );
}