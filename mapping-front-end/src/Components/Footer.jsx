const Footer = () => {
    return (
        <footer
            style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                fontSize: "14px",
            }}
        >
            Created by | {"Jonel P. Tapia | Fullstack Developer"} {""}
            <a
                href="https://github.com/KingNelx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#111827", textDecoration: "underline" }}
            >
                GitHub
            </a>
        </footer>
    );
};

export default Footer;
