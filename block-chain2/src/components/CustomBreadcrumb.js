// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

type Props = {
  breadcrumbInfo: Array<any>
};

type State = {};
class CustomBreadcrumb extends Component<Props, State> {
  componentDidMount = () => {};

  render = () => {
    const { breadcrumbInfo } = this.props;
    const drawBreadcrumbs = () =>
      _.map(breadcrumbInfo, (b: Object) => {
        if (b.isActive) {
          return (
            <BreadcrumbItem active className="custom-breadcrumb-item-active">
              {b.label}
            </BreadcrumbItem>
          );
        }
        return (
          <BreadcrumbItem className="custom-breadcrumb-item">
            <Link to={b.link}>{b.label}</Link>
          </BreadcrumbItem>
        );
      });
    return <Breadcrumb className="custom-breadcrumb float-right">{drawBreadcrumbs()}</Breadcrumb>;
  };
}

export default CustomBreadcrumb;
