import "./Header.css";
import { Link } from "react-router-dom";





const Header = () => {

  return (
    <div className="Header-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <h5 className=" fw-bold mt-3 align-items-start ">Excellence Academy</h5>
          </div>
          <div className="col-md-9 text-black">
            <div className="menu-container ">
              <ul className="d-flex align-items-end  justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>Courses</li>
                </Link>
                <Link to="/blog" className="items">
                  <li>Blog</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
