import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../Context/auth-context";
import Posts from "../components/Posts";
import Spinner from "../shared/Spinner";

import styles from "./UserPosts.module.css";

const UserPosts = (props) => {
	const auth = useContext(AuthContext);

	const [post, setPost] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/post/${auth.userId}`)
			.then((resposne) => {
				setIsLoading(true);
				setPost(resposne.data.posts);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	}, []);

	return (
		<div>
			{isLoading && <Spinner />}
			<ul className={styles.ul_list}>
				{post &&
					!isLoading &&
					post.map((post) => (
						<Posts
							key={post.id}
							postTime={post.currentTime}
							title={post.title}
							description={post.description}
							travelDate={post.travelDate}
							destinationPinCode={post.destinationPinCode}
							editBtn={true}
							connectBtn={false}
						/>
					))}
			</ul>
		</div>
	);
};

export default UserPosts;
