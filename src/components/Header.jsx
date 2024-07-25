
import { AiOutlineMenu } from "react-icons/ai";
import Logo from '/ps.svg'

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2 className="nav-logo">  <img src={Logo} alt="Logo"  /></h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About
      </a>
      <a onClick={() => setMenuOpen(false)} href="#experience">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Projects
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="\PinkySingh_Developer.pdf" download>     
      <button>Resume</button>
    </a>
  </>
);

export default Header;