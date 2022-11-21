import React from "react";

export default function About() {
	return (
		<section  id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-black">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<p className="title-font sm:text-3xl text-3xl mb-4 font-sm text-white line-1 anim-typewriter font-mono">
					I'm Troy.  I like to code ! :)</p>
					<div className="flex justify-center">
						<a 
							href='#contact'
							className="ml-40 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-mono">
								Work With Me
						</a>
						<a
							href='#projects'
							className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg font-mono">
								Check Out My Work
						</a>
						<a
							href='#contact'
							className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg font-mono">
								Contact Me
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img 
						className="object-cover object-center rounded"
						alt="the man, the myth, the legend"
						src="./portpic.jpg"
						/>		
				</div>
			</div>
		</section>
	);
}

