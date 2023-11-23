import React from "react";
import { motion } from "framer-motion";

import styles from "./HomePageAirplane.module.css";

import plane from "/airplane.png";
import cloud from "/cloud.png";

const HomePageAirplane = () => {
	const planeVariants = {
		initial: {
			x: "-25vw",
			scale: 0.5,
		},
		animate: {
			x: 0,
			scale: 1,
			y: [10, 0, 10],
			transition: {
				scale: {
					duration: 2,
				},
				x: {
					duration: 3,
				},
				y: {
					repeat: Infinity,
					duration: 2,
				},
				ease: "easeInOut",
			},
		},
	};

	const cloudsVariants = {
		initial: {
			scale: 0.8,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			y: [0, 10, 0],
			transition: {
				y: {
					repeat: Infinity,
					duration: 2,
				},
				scale: {
					duration: 2,
				},
				opacity: {
					duration: 2,
				},
				ease: "easeInOut",
                delay:2
			},
		},
	};

	return (
		<div className={styles.parent}>
			<motion.div
				className={styles.parent_clouds1}
				variants={cloudsVariants}
				initial='initial'
				animate='animate'>
				<img src={cloud} alt='cloud 1' className={styles.clouds}></img>
			</motion.div>
			<motion.div
				className={styles.parent_airplane}
				initial='initial'
				animate='animate'
				variants={planeVariants}>
				<img src={plane} alt='airplane icon' className={styles.plane}></img>
			</motion.div>
			<motion.div
				className={styles.parent_clouds2}
				variants={cloudsVariants}
				initial='initial'
				animate='animate'>
				<img src={cloud} alt='cloud 1' className={styles.clouds}></img>
			</motion.div>
		</div>
	);
};

export default HomePageAirplane;
