import { Link } from "react-router-dom";

const Navbar: React.FC= () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <Link to="/" style={styles.link}>
                    Nalaria <span style={{color: "#4f46e5"}}>AI</span>
                </Link>
            </div>
            <ul style={styles.menu}>
                <li>
                    <Link to="/kakao" style={styles.link}>
                    Kakao Detection
                    </Link>
                </li>
                <li>
                    <Link to="/image" style={styles.link}>
                    Image AI Check
                    </Link>
                </li>
                <li>
                    <Link to="/text" style={styles.link}>
                    Text AI Check
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

// ========= Inline Styles (example) =========
const styles: { [key: string]: React.CSSProperties } = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#0f172a",
        color: "#ffffff",
    },

    logo: {
        fontSize: "20px",
        fontWeight: "bold",
    },

    menu: {
        display: "flex",
        gap: "20px",
        listStyle: "none",
        margin: 0,
        padding: 0,
    },

    link: {
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "14px"
    },
};