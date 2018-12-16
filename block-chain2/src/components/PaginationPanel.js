/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
// @flow
import React, { Component } from "react";
import classnames from "classnames";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

type Props = {
  totalPages: number,
  currentPage: number,
  numOfVisiblePages: number,
  onPageChanged: Function,
  pageSizeArray: Array<any>,
  defaultPageSize: number
};
type State = {};

class PaginationPanel extends Component<Props, State> {
  totalPages: number;
  currentPage: number;
  numOfVisiblePages: number;
  startIndex: number;
  endIndex: number;
  visibleSize: number;
  showPages: Array;
  moveRightToLeft: boolean;
  pageSizeArray: Array<any>;
  pageSize: number;

  constructor(props: any) {
    super(props);
    this.showPages = [];
    this.pageSizeArray = [5, 10, 20, 50, 100, 200, 500, 1000];
  }

  getVisibleSize = () => {
    var visibleSize = this.numOfVisiblePages;
    if (this.totalPages < this.numOfVisiblePages) {
      visibleSize = this.totalPages;
    }
    return visibleSize;
  };

  updateShowPage = () => {
    if (this.moveRightToLeft) {
      this.endIndex = this.currentPage;
      this.startIndex = this.endIndex - this.visibleSize + 1;
      if (this.startIndex <= 0) {
        this.startIndex = 1;
        this.endIndex = this.startIndex + this.visibleSize - 1;
      }
      this.moveRightToLeft = false;
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.currentPage - this.visibleSize > 0) {
        this.startIndex = this.currentPage;
        if (this.startIndex + this.visibleSize - 1 >= this.totalPages) {
          this.startIndex = this.totalPages - this.visibleSize + 1;
        }
      } else {
        this.startIndex = 1;
      }
    }
    this.endIndex = this.startIndex + this.visibleSize - 1;
  };

  pageChanged = (page: Number) => {
    if (page <= 0) {
      page = 1;
    }
    if (page > this.totalPages) {
      page = this.totalPages;
    }
    if (this.currentPage != page) {
      this.currentPage = page;
      this.props.onPageChanged(page, this.pageSize);
    }
  };

  pageSizeChange = event => {
    this.pageSize = Number.parseInt(event.target.value);
    this.props.onPageChanged(this.currentPage, this.pageSize);
  };

  jumpPrevious = () => {
    this.moveRightToLeft = true;
    this.pageChanged(this.endIndex - this.visibleSize);
  };

  jumpNext = () => {
    this.pageChanged(this.startIndex + this.visibleSize);
  };

  previous = () => {
    this.pageChanged(this.currentPage - 1);
  };

  next = () => {
    this.pageChanged(this.currentPage + 1);
  };

  first = () => {
    this.pageChanged(1);
  };

  last = () => {
    this.pageChanged(this.totalPages);
  };

  componentDidUpdate = () => {
    if (this.totalPages > 0 && this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.moveRightToLeft = true;
      this.showPages = [];
      this.props.onPageChanged(this.currentPage, this.pageSize);
    }
  };

  render() {
    this.totalPages = this.props.totalPages;
    this.numOfVisiblePages = this.props.numOfVisiblePages;
    this.currentPage = this.props.currentPage;
    this.pageSize = this.props.pageSize;

    if (this.props.pageSizeArray) {
      this.pageSizeArray = this.props.pageSizeArray;
    }

    if (!this.pageSize || this.pageSizeArray.indexOf(this.pageSize) == -1) {
      this.pageSize = this.pageSizeArray[0];
    }

    this.visibleSize = this.getVisibleSize();
    if (
      this.visibleSize != this.showPages.length ||
      this.showPages.indexOf(this.currentPage) == -1
    ) {
      this.updateShowPage();
    }
    this.showPages = [];

    const drawPageSize = () => {
      var pageSizeOptions = [];
      for (let i = 0; i < this.pageSizeArray.length; i++) {
        var value = this.pageSizeArray[i];
        pageSizeOptions.push(
          <option key={value.toString()} value={value}>
            {value}
          </option>
        );
      }
      return pageSizeOptions;
    };

    const drawPagination = () => {
      var pageItems = [];
      if (this.startIndex > 1) {
        pageItems.push(
          <PaginationItem
            key="jumpPrevious"
            className={classnames({
              disabled: this.currentPage <= 1
            })}
            onClick={() => {
              this.jumpPrevious();
            }}
          >
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        );
      }
      for (let i = this.startIndex; i <= this.endIndex; i++) {
        pageItems.push(
          <PaginationItem
            key={i.toString()}
            className={classnames({
              active: this.currentPage == i
            })}
            onClick={() => {
              this.pageChanged(i);
            }}
          >
            <PaginationLink>{i}</PaginationLink>
          </PaginationItem>
        );
        this.showPages.push(i);
      }
      if (this.endIndex < this.totalPages) {
        pageItems.push(
          <PaginationItem
            key="jumpNext"
            className={classnames({
              disabled: this.currentPage >= this.totalPages
            })}
            onClick={() => {
              this.jumpNext();
            }}
          >
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        );
      }
      return pageItems;
    };

    if (this.totalPages <= 0) {
      return null;
    }

    return (
      <Row>
        <Col>
          <div className="form-inline">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="pageSize" className="mr-sm-2">
                Page Size:
              </Label>
              <Input
                type="select"
                name="pageSize"
                id="pageSize"
                value={this.pageSize}
                onChange={this.pageSizeChange}
              >
                {drawPageSize()}
              </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label>
                Page {this.currentPage} of {this.totalPages} pages
              </Label>
            </FormGroup>
            <Pagination className="custom-pagination mb-2 mr-sm-2 mb-sm-0">
              <PaginationItem
                className={classnames({
                  disabled: this.currentPage <= 1
                })}
                onClick={() => {
                  this.first();
                }}
              >
                <PaginationLink previous />
              </PaginationItem>
              <PaginationItem
                className={classnames({
                  disabled: this.currentPage <= 1
                })}
                onClick={() => {
                  this.previous();
                }}
              >
                <PaginationLink>{"‹"}</PaginationLink>
              </PaginationItem>

              {drawPagination()}

              <PaginationItem
                className={classnames({
                  disabled: this.currentPage >= this.totalPages
                })}
                onClick={() => {
                  this.next();
                }}
              >
                <PaginationLink>{"›"}</PaginationLink>
              </PaginationItem>
              <PaginationItem
                className={classnames({
                  disabled: this.currentPage >= this.totalPages
                })}
                onClick={() => {
                  this.last();
                }}
              >
                <PaginationLink next />
              </PaginationItem>
            </Pagination>
          </div>
        </Col>
      </Row>
    );
  }
}

export default PaginationPanel;
