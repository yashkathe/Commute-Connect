import React from "react";
import HomePageAirplane from "../components/HomePageAirplane";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div>
			<div className={styles.children_1}>
				<HomePageAirplane />
			</div>
			<div className={styles.children_2}></div>
		</div>
	);
};

export default Home;
