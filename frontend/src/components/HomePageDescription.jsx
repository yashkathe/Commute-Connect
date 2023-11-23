import React from "react";
import { motion } from "framer-motion";

import styles from "./HomePageDescription.module.css";

const HomePageDescription = () => {
	const parentVarients = {
		initial: {
			opacity: 0,
            y:'-10'
		},
		animate: {
			opacity: 1,
            y:0,
			transition: {
				duration: 1,
				delay: 2,
			},
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={parentVarients}
			initial='initial'
			animate='animate'>
			<h3>Commute Connect is your travel buddy</h3>
			<p>
				Connecting you with like-minded travelers for shared trips, reducing gas
				usage and cutting down your travel costs
			</p>
		</motion.div>
	);
};

export default HomePageDescription;
