import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Meme.module.css";
export default function Meme() {
	// const [memeImage, setMemeImage] = React.useState({"https://i.imgflip.com/1g8my4.jpg");
	const [meme, setMeme] = React.useState({
		topText: "Look at me.",
		bottomText: "I am the Meme Generator now.",
		randomImage: "https://i.imgflip.com/hlmst.jpg"
	});

	const [allMemes, setAllMemes] = React.useState([]);
	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setAllMemes(data.data.memes));
		// async function getMemes() {
		// 	const res = await fetch("https://api.imgflip.com/get_memes");
		// 	const data = await res.json();
		// 	setAllMemes(data.data.memes);
		// }
		// getMemes();
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(prevMeme => {
			return ({
				...prevMeme,
				[name]: value
			});

		});
	}
	function getMemeImg() {
		const randomizer = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomizer].url;
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}));
	}
	return (
		<main className={styles.main}>
			<div className={styles.form}>
				<input
					type="text"
					name="topText"
					id="upperText"
					placeholder="Top Text"
					onChange={handleChange}
					value={meme.topText}
				/>
				<input
					type="text"
					name="bottomText"
					id="lowerText"
					placeholder="Bottom Text"
					onChange={handleChange}
					value={meme.bottomText}
				/>
				<button onClick={getMemeImg}>Get a new meme image 🎨</button>
			</div>
			<div className={styles.meme}>
				<div className={styles.image}>
					<Image
						src={meme.randomImage}
						alt=""
						fill
						sizes="(max-width: 500px) 100vw"
						priority
					/>
				</div>
				<h2 className={styles.topText}>{meme.topText}</h2>
				<h2 className={styles.bottomText}>{meme.bottomText}</h2>
			</div>
		</main>
	);
}