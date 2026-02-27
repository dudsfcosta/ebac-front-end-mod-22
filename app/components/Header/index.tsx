import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href="/">Cinelista</Link>
                </h1>
                <nav className={styles.header__nav}>
                    <Link href="/">Home</Link>
                    <Link href="/filmes/em-alta">Trending</Link>
                    <Link href="/filmes/populares">Popular</Link>
                    <Link href="/filmes/top-filmes">Top Movies</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;