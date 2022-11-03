import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from "../components/Header";
import Meme from "../components/Meme";

export default function Home() {
	const [count, setCount] = React.useState(0);
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Meme />
		</div>
	);
}
