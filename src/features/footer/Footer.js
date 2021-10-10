import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-navigation">
        <ul className="footer-menu">
          <li className="footer-menu-item">Support</li>
          <li className="footer-menu-item">Learning</li>
          <li className="footer-menu-item">Русская версия</li>
        </ul>
      </nav>
      <span className="copyright">© 2020 Your Name</span>
    </div>
  );
};

export default Footer;
