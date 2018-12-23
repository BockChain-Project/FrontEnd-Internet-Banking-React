/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/no-redundant-roles */
// @flow
import React, { Component } from "react";

type Props = {

};
type State = {
    showError: boolean
};
class History extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <ul className="list-inline list-unstyled">
                                <li><a href="home.html">Home</a></li>
                                <li className="active">History</li>
                            </ul>
                        </div>{/* /.breadcrumb-inner */}
                    </div>{/* /.container */}
                </div>{/* /.breadcrumb */}
                <div className="body-content">
                    <div className="container">
                        <div className="my-wishlist-page">
                            <div className="row">
                                <div className="col-md-12 my-wishlist">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th colSpan={4} className="heading-title">My History</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-7 col-sm-6 col-xs-6">
                                                        <div className="product-name"><a href="#">Floral Print Buttoned</a></div>
                                                        <div className="rating">
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star non-rate" />
                                                            <span className="review">( 06 Reviews )</span>
                                                        </div>
                                                        <div className="price">
                                                            $400.00
                <span>$900.00</span>
                                                        </div>
                                                    </td>
                                                    <td className="col-md-2 ">
                                                        <a href="#" className="btn-upper btn btn-primary">Add to cart</a>
                                                    </td>
                                                    <td className="col-md-1 close-btn">
                                                        <a href="#" ><i className="fa fa-times" /></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-7">
                                                        <div className="product-name"><a href="#">Floral Print Buttoned</a></div>
                                                        <div className="rating">
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star rate" />
                                                            <i className="fa fa-star non-rate" />
                                                            <span className="review">( 06 Reviews )</span>
                                                        </div>
                                                        <div className="price">
                                                            $450.00
                <span>$900.00</span>
                                                        </div>
                                                    </td>
                                                    <td className="col-md-2">
                                                        <a href="#" className="btn-upper btn btn-default">Add to cart</a>
                                                    </td>
                                                    <td className="col-md-1 close-btn">
                                                        <a href="#" ><i className="fa fa-times" /></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>{/* /.row */}
                        </div>{/* /.sigin-in*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default History;
