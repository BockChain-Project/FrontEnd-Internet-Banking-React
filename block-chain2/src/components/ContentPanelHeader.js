// @flow
import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import CustomBreadcrumb from "./CustomBreadcrumb";

type Props = {
  title: string,
  breadcrumbInfo: Array<any>
};

type State = {};
class ContentPanelHeader extends PureComponent<Props, State> {
  render = () => {
    const { title, breadcrumbInfo } = this.props;
    return (
      <Row>
        <Col md="6" sm="6">
          <b>{title}</b>
        </Col>
        <Col md="6" sm="6">
          <CustomBreadcrumb breadcrumbInfo={breadcrumbInfo} />
        </Col>
      </Row>
    );
  };
}

export default ContentPanelHeader;
