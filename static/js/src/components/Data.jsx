import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { reject } from "bluebird";

// any new args (filtered, subreddit) go in requestData function
const requestData = (pageSize, page, data) => {
  
  return new Promise((resolve, reject) => {

    const res = {
      rows: data.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(data.length / pageSize)
    };

    // Here we'll simulate a server response with 500ms of delay.
    setTimeout(() => resolve(res), 500);
  })
};

class Data extends Component {
  constructor() {
    super();
    this.state = {
      pages: 3,
      loading: false,
      pageSize: 20,
      page: 1,

    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(pageSize, page, data) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    requestData(
      pageSize,
      page,
      data
    ).then(res => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      this.setState({
        data: res.rows,
        pages: res.pages,
        loading: false
      });
    });
  }
  
  render() {
    const data = this.props.data;
    const columns = this.props.columns;
    const { pages, loading, pageSize, page } = this.state;
    console.log(data);
    return (    
      <ReactTable
        data={data}
        columns={columns}
        pages={pages}
        loading={loading}
        // onFetchData={this.fetchData}
        defaultPageSize={30}
        className="-striped -highlight"
      />
    )
  }
}

export default Data;
