import React from "react";
import moment from "moment";

import editIcon from "/icons-edit.png";

import styles from "./Posts.module.css";

const Posts = (props) => {
	const travelDate = moment(props.travelDate).format("MMM Do YY");
	const postTime = moment(props.postTime).fromNow();

	return (
		<div className={styles.parent}>
			<div className={styles.main}>
				<div>
					<h3>{props.title}</h3>
					{props.editBtn && (
						<button
							className={styles.edit_icon}
							onClick={() => {
								console.log("clicked");
							}}>
							<img src={editIcon} alt='edit icon' />
						</button>
					)}
				</div>
				<p>Posted {postTime}</p>
			</div>
			<div className={styles.description}>
				<p>{props.description}</p>
			</div>
			<div className={styles.code}>
				<p>Travel-Date : {travelDate}</p>
				<p>Destination-Code: {props.destinationPinCode}</p>
			</div>
			{props.connectBtn && (
				<div className={styles.connect}>
					<button>Connect With User</button>
				</div>
			)}
		</div>
	);
};

export default Posts;
