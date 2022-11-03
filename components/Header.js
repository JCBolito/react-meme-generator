import Image from "next/image";
import styles from "../styles/Header.module.css";
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image
					src="/troll.png"
					alt=""
					width={32}
					height={27}
				/>
				<h2>Meme Generator</h2>
			</div>
			<h4>React Course - Project 3</h4>
		</header>
	);
}