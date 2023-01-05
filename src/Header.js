import React from "react" 
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
 
 function Header () {
    return (
        <div className="header">
          {/* <Link to="/" style={{ textDecoration:"none" }}> */}
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          {/* </Link> */}
            

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        {/* <Link to="/login" style={{ textDecoration:"none" }}> */}
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        {/* </Link> */}
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        {/* <Link to="/checkout" style={{ textDecoration: "none" }}> */}
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
                {/* {basket.length} */}
                </span>
          </div>
        {/* </Link> */}
      </div>
        </div>
    //     <div className="header">
    //              <div className='header_logo'>
    //     <StorefrontIcon className="header_logoImage" fontSize="large"/>
    //     <h2 className='header_logoTitle'>eShop</h2>
    //             </div> 
    //   <div className="header_search">
    //     <input type="text" className='header_searchInput'/>
    //     <SearchIcon className='header_searchIcon'/>

    //   </div>
    //   <div className="header_nav">
    //     <div className="nav_item">
    //       <span className="nav_itemLineOne">Hello Guest</span>
    //       <span className="nav_itemLineTwo">Sign In</span>
    //     </div>
    //     <div className="nav_item">
    //       <span className="nav_itemLineOne">Your</span>
    //       <span className="nav_itemLineTwo">Shop</span>
    //     </div>
    //     <div className="nav_item">
    //       <ShoppingBasketIcon className="itemBasket"/>
    //       <span className="nav_itemLineTwo nav_basketCount">0</span>
    //     </div>
    //   </div>
    // </div>
    )

 }

 export default Header