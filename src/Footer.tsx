import "./Footer.scss";

function Footer() {
    return (
        <footer id="footer">
            Copyright (c) 2022 Theis Pieter Hollebeek |{" "}
            <a href="https://tldrlegal.com/license/mit-license" target="_blank">
                MIT licensed
            </a>{" "}
            |{" "}
            <a
                href="https://github.com/camper0008/gas-price-sim"
                target="_blank"
            >
                Code available on GitHub
            </a>
        </footer>
    );
}

export default Footer;
