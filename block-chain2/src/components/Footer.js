/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  componentDidMount = () => { };

  render() {
    return (
      <div>

        {/* ============================================================= FOOTER ============================================================= */}
        <footer id="footer" className="footer color-bg">
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="address-block">
                    {/* /.module-heading */}
                    <div className="module-body">
                      <ul className="toggle-footer" style={{}}>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body">
                            <p>253, Nguyễn Văn Cừ, District 4, County 5, Ho Chi Minh City</p>
                          </div>
                        </li>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body">
                            <p>+(888) 123-4567<br />
                              +(888) 456-7890</p>
                          </div>
                        </li>
                        <li className="media">
                          <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse" /> </span> </div>
                          <div className="media-body"> <span><Link to="">marazzo@themesground.com</Link></span> </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.module-body */}
                </div>
                {/* /.col */}
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="module-heading">
                    <h4 className="module-title">Customer Service</h4>
                  </div>
                  {/* /.module-heading */}
                  <div className="module-body">
                    <ul className="list-unstyled">
                      <li className="first"><Link to="login" title="Contact us">My Account</Link></li>
                      <li><Link to="history" title="About us">History</Link></li>
                      <li className="last"><Link to="error" title="Where is my order?">Help Center</Link></li>
                    </ul>
                  </div>
                  {/* /.module-body */}
                </div>
                {/* /.col */}
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="module-heading">
                    <h4 className="module-title">Corporation</h4>
                  </div>
                  {/* /.module-heading */}
                  <div className="module-body">
                    <ul className="list-unstyled">
                      <li className="first"><Link to="login" title="Contact us">My Account</Link></li>
                      <li><Link to="history" title="About us">History</Link></li>
                      <li className="last"><Link to="error" title="Where is my order?">Help Center</Link></li>
                    </ul>
                  </div>
                  {/* /.module-body */}
                </div>
                {/* /.col */}

              </div>
            </div>
          </div>
          <div className="copyright-bar">
            <div className="container">
              <div className="col-xs-12 col-sm-4 no-padding social">
                <ul className="link">
                  <li className="fb pull-left"><a target="_blank" rel="nofollow" href="" title="Facebook" /></li>
                  <li className="tw pull-left"><a target="_blank" rel="nofollow" href="" title="Twitter" /></li>
                  <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="" title="GooglePlus" /></li>
                  <li className="rss pull-left"><a target="_blank" rel="nofollow" href="" title="RSS" /></li>
                  <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="" title="PInterest" /></li>
                  <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="" title="Linkedin" /></li>
                  <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="" title="Youtube" /></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 no-padding copyright"><Link to="templatespoint.net">Banking</Link> </div>
              <div className="col-xs-12 col-sm-4 no-padding">
                <div className="clearfix payment-methods">
                  <ul>
                    <li><img src="assets/images/payments/1.png" alt="no image" /></li>
                    <li><img src="assets/images/payments/2.png" alt="no image" /></li>
                    <li><img src="assets/images/payments/3.png" alt="no image" /></li>
                    <li><img src="assets/images/payments/4.png" alt="no image" /></li>
                    <li><img src="assets/images/payments/5.png" alt="no image" /></li>
                  </ul>
                </div>
                {/* /.payment-methods */}
              </div>
            </div>
          </div>
        </footer>
        {/* ============================================================= FOOTER : END============================================================= */}

      </div>
    );
  }
}

export default Footer;
