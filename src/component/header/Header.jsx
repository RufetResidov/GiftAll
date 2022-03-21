import React from 'react'
import { Link } from 'react-router-dom'
import "../header/header.scss"
const Header = () => {
    return (

        <div className="header-section">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    {/* Header Logo */}
                    <div className="col-2">
                        <div className="header-logo">
                            <Link to="/">GiftAll</Link>
                        </div>
                    </div>
                    <div className="col-auto m-auto">
                        <nav className="site-main-menu justify-content-center">
                            <ul className='nav-menu d-flex'>
                                <li className="has-children"><Link to="#"><span className="menu-text">Home</span></Link></li>
                                <li className="has-children"><Link to="/about"><span className="menu-text">About</span></Link></li>
                                <li className="has-children"><Link to="/contact"><span className="menu-text">Contact</span></Link></li>
                                <li className="has-children"><Link to="/blog"><span className="menu-text">Blog</span></Link></li>
                                <li className="has-children"><Link to="/blogdetail"><span className="menu-text">Blog-Detail</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header