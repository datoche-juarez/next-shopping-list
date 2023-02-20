import styles from "../styles/Home.module.css";

const Header = () => {
    return (
        // <div style={{ padding: "10px", textAlign: "center" }}>
        <div className={styles.header}>
            <h1>
                <span>⚡️ Vinyl Shopping List ⚡️</span>
            </h1>
            <p>An interactive tool for Spotify playlists.</p>
        </div>
    );
};

export default Header;