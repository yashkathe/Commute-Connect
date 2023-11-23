import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HomePageAirplane from "../components/HomePageAirplane";
import HomePageDescription from "../components/HomePageDescription";

import styles from "./Home.module.css";

const Home = () => {
	const linkVariant = {
		initial: {
			opacity: 0,
			y: "10",
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				opacity: {
					duration: 1,
				},
				delay: 2,
			},
		},
		hover: {
			scale: 1.1,
		},
	};
	return (
		<div className={styles.parent}>
			<div className={styles.children_1}>
				<HomePageAirplane />
			</div>
			<div className={styles.children_2}>
				<HomePageDescription />
				<motion.div
					className={styles.get_started}
					variants={linkVariant}
					initial='initial'
					animate='animate'
					whileHover='hover'>
					<Link to='/signup'>Get Started</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
