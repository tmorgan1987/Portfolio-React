import { CodeIcon } from "@heroicons/react/solid";
import React from "react";


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
				<img className="images" src="./html5.png" alt="html5"></img>
				<img className="images" src="./css.png" alt="css"></img>
				<img className="images" src="./js.png" alt="javascript"></img>
				<img className="images" src="./node.jpg" alt="nodejs"></img>
				<img className="images" src="./express.png" alt="express"></img>
			</div>
			<div class="flex flex-row justify-center">
				<img className="images" src="./mysql.png" alt="mysql"></img>
				<img className="images" src="./sequelize.png" alt="sequelize"></img>
				<img className="images" src="./handlebars.png" alt="handlebars"></img>
				<img className="images" src="./mongodb.jpg" alt="handlebars"></img>
				<img className="images" src="./react.png" alt="react"></img>
			</div>
    </div>
    </section>
  );
}