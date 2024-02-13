// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <nav className="nav-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
        />
      </div>
      <div>
        <ul className="nav-items">
          <li>
            <Link to="/" className="items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="items">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="items">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
