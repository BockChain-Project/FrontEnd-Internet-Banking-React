/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable spaced-comment */

// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";


import {
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Navbar,
  Dropdown,
  NavLink
} from "reactstrap";

// add logo phuong
import logo from './logo.png';

type Props = {
  isAuthenticated: boolean,
  userInfo: Object,
  logout: Object
};

type State = {
  dropdownOpen: boolean
};

class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render = () => {
    const { userInfo, isAuthenticated, logout } = this.props;

    let user;
    if (isAuthenticated) {
      user = (
        <NavItem>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className="user-info">
              <i className="fa fa-user" /> {""}
              {userInfo.display_name}
            </DropdownToggle>
            <DropdownMenu className="dropdown-size">
              <DropdownItem header className="dropdown-header">
                Tài khoản
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="dropdown-item">
                <i className="fa fa-wrench pull-right" />
                Change password
              </DropdownItem>
              <DropdownItem className="dropdown-item" onClick={logout}>
                <i className="fa fa-ban fa-fw pull-right" />
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      );
    }

    return (
      // <div>
      //   <Navbar className="shadow sbi-header">
      //     <Nav navbar className="ml-auto">
      //       {user}
      //     </Nav>
      //   </Navbar>
      //   <a href="/">
      //     <div className="col-md-2 brandName">
      //       <div className="col-md-2 brandName">Home Page</div>
      //     </div>
      //   </a>
      // </div>
      <div>
        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                {/* ============================================================= LOGO ============================================================= */}
                <div className="logo"> <Link to="/"> <img src={logo} alt="logo" /> </Link> </div>
                {/* /.logo */}
                {/* ============================================================= LOGO : END ============================================================= */}
              </div>
              {/* /.logo-holder */}
              <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                {/* /.contact-row */}
                {/* ============================================================= SEARCH AREA ============================================================= */}
                <div >
                  <h2 style={{ fontFamily: '"Pacifico", cursive', fontSize: '60px' }}>Spa internet banking</h2>

                </div>
                <div className="search-area">

                  {/**
                                 <form>
                                        <div className="control-group">
                                            <ul className="categories-filter animate-dropdown">
                                                <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="category.html">Categories
                    <b className="caret" /></a>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li className="menu-header">Computer</li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Clothing</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Electronics</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Shoes</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Watches</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <input className="search-field" placeholder="Search here..." />
                                            <a className="search-button" href="" />
                                        </div>
                                    </form>
                                */}
                </div>
                {/* /.search-area */}
                {/* ============================================================= SEARCH AREA : END ============================================================= */}
              </div>
              {/* /.top-search-holder */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
                <div className="dropdown dropdown-cart"> <Link to="login" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                  <div className="items-cart-inner">
                    <div className="basket">
                      <div className="basket-item-count"><span className="count">2</span></div>
                      <div className="total-price-basket"> <span className="lbl">Detail Account</span>
                        <span className="value">1.000.000VDN</span>
                      </div>
                    </div>
                  </div>
                </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="cart-item product-summary">
                        <div className="row">
                          <div className="col-xs-4">
                            <div className="image"> <Link to="login"><img src="assets/images/products/p4.jpg" alt="no img" /></Link>
                            </div>
                          </div>
                          <div className="col-xs-7">
                            <h3 className="name"><Link to="error">Simple Product</Link></h3>
                            <div className="price">$600.00</div>
                          </div>
                          <div className="col-xs-1 action"> <Link to="error"><i className="fa fa-trash" /></Link> </div>
                        </div>
                      </div>
                      {/* /.cart-item */}
                      <div className="clearfix" />
                      <hr />
                      <div className="clearfix cart-total">
                        <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span>
                        </div>
                        <div className="clearfix" />
                        <Link to="transfers" className="btn btn-upper btn-primary btn-block m-t-20">Transfer</Link>
                      </div>
                      {/*/.cart-total */}
                    </li>
                  </ul>
                  {/* /.dropdown-menu*/}
                </div>
                {/* /.dropdown-cart */}
                {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */}
              </div>
              {/* /.top-cart-row */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.main-header */}

        <div>
          {/* ============================================== NAVBAR ============================================== */}
          <div className="header-nav animate-dropdown">
            <div className="yamm navbar navbar-inverse" role="navigation">
              <div className="navbar-header">
                <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" />
                  <span className="icon-bar" /> </button>
              </div>
              <div className="nav-bg-class">
                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                  <div className="nav-outer">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown"> <Link to="/">Home</Link> </li>

                      <li><Link to="login"><span>Log in</span></Link></li>
                      <li><Link to="history"><span>History</span></Link></li>
                      <li><Link to="listaccount"><span>List Account</span></Link></li>
                      <li><Link to="transfers"><span>Transfer</span></Link></li>
                      <li><Link to="contact"><span>Contact</span></Link></li>


                    </ul>
                    {/* /.navbar-nav */}
                    <div className="clearfix" />
                  </div>
                  {/* /.nav-outer */}
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/* /.nav-bg-class */}
            </div>
            {/* /.navbar-default */}
            {/* /.container-class */}
          </div>
          {/* /.header-nav */}
          {/* ============================================== NAVBAR : END ============================================== */}

        </div>
      </div>
    );
  };
}

export default withRouter(Header);
