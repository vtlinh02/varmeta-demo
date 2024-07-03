"use client";
import { fadeIn } from "@/constants/variants";
import { Heading } from "@var-meta/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	MouseParallaxChild,
	MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";

const data = [
	"Blockchain",
	3000,
	"VR-AR",
	3000,
	"Artificial Intelligence",
	3000,
	"Game",
	3000,
	"Software Consulting",
];

const HeroSection = () => {
	return (
		<section className="h-[calc(100vh-64px)] bg-[#312cc9]">
			<div className="container relative mx-auto h-full flex justify-center items-center lg:justify-start">
				<div className="h-full flex flex-col justify-center items-center lg:items-start z-20 pt-12">
					<MouseParallaxContainer
						globalFactorX={0.1}
						globalFactorY={0.2}
						resetOnLeave
						className="relative flex items-center h-[120px] lg:h-max lg:w-[640px] xl:w-[840px]"
					>
						<MouseParallaxChild
							factorX={0.2}
							factorY={0.4}
							className="relative"
						>
							<motion.div
								variants={fadeIn("up", 0.4)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.3 }}
								className="w-[250px] h-[101.37px] lg:w-[425px] lg:h-[199.97px] xl:w-[625px] xl:h-[244.97px]"
							>
								<Heading weight="bold" size="9xl" className="uppercase inline" color="#111111">BUILT</Heading>
							</motion.div>
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.9}
							factorY={0.9}
							className="absolute lg:left-6 z-30"
						>
							<motion.div
								variants={fadeIn("up", 0.7)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.3 }}
								className="w-[250px] h-[101.37px] lg:w-[425px] lg:h-[199.97px] xl:w-[525px] xl:h-[244.97px]"
							>
								<Heading weight="semibold" size="6xl" className="text-white my-12">On Gno</Heading>
							</motion.div>
						</MouseParallaxChild>
					</MouseParallaxContainer>

				</div>
				<motion.div
					variants={fadeIn("left", 0.2)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.7 }}
					className="hidden lg:flex absolute right-0"
				>
					<div className="relative flex flex-col items-center">
						<Image
							src="/var-meta-logo.png"
							className="z-50 w-[400px] h-[300px] xl:w-[400px] xl:h-[300px]"
							width={600}
							height={600}
							alt="bear"
						/>
						<motion.div
							variants={fadeIn("up", 1)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.7 }}
							className="min-h-[60px] flex items-center mb-6 text-[26px]"
						>
							<div className="hidden lg:flex items-center lg:gap-x-0">
								<div>VAR META</div>
								<div className="relative w-2 h-2 mx-2 rounded-full bg-slate-500" />
							</div>
							<TypeAnimation
								sequence={data}
								wrapper="div"
								speed={10}
								deletionSpeed={10}
								repeat={Infinity}
								cursor={false}
							></TypeAnimation>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;