/* eslint-disable array-callback-return */
// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink, NavItem } from "reactstrap";
import PubSub from "pubsub-js";

type Props = {
  itemId: number,
  page: Object,
  children_pages: Array
};

type State = {
  open: boolean
};

const NAV_ITEM_TOPIC = "NavItemCollapsing";

class NavItemCollapse extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    };
    this.onDropdownClick = this.onDropdownClick.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe(NAV_ITEM_TOPIC, (msg, data) => {
      console.log(msg, data);
      if (this.props.itemId !== data) {
        this.setState({
          open: false
        });
      }
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(NAV_ITEM_TOPIC);
  }

  onDropdownClick = e => {
    this.setState({
      open: !this.state.open
    });
    // publish a topic asynchronously
    PubSub.publishSync(NAV_ITEM_TOPIC, this.props.itemId);
  };

  render = () => {
    const { open } = this.state;
    // eslint-disable-next-line camelcase
    const { page, children_pages, itemId } = this.props;

    // eslint-disable-next-line no-var
    var showChildren = children_pages.map((item, index) => {
      if (item.enable === 1 && item.isVisible === 1) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <NavItem key={index}>
            <Link className="sidebar-subitem" to={item.url}>
              <i className="fa fa-circle-o" />
              &nbsp;&nbsp;&nbsp;
              {item.cation}
            </Link>
          </NavItem>
        );
      }
    });

    if (page.isVisible === 1 && page.enable === 1) {
      return (
        <div>
          <NavItem>
            <NavLink
              className="sidebar-item"
              href="#"
              onClick={this.onDropdownClick}
              active={open}
            >
              {page.cation}
              <i className={open ? "fa fa-caret-down" : "fa fa-caret-right"} />
            </NavLink>
          </NavItem>
          <div
            className="dropdown-container"
            style={open ? { display: "block" } : { display: "none" }}
          >
            {showChildren}
          </div>
        </div>
      );
      // eslint-disable-next-line no-else-return
    } else {
      return [];
    }
  };
}

export default withRouter(NavItemCollapse);
