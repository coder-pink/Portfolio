import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { useCallback } from "react";

function Footer() {
    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#work">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/coder-pink/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/coder-pink" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FaGithub />
                    </a>
                </div>
                <div className="footer-scroll-to-top">
                    <BsChevronDown onClick={scrollToTop} className="scroll-to-top-icon" />
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024, PS. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
