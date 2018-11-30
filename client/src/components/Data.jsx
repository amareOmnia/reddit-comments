import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { reject } from "bluebird";
import axios from 'axios';

import "react-table/react-table.css";

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
      data: [],
      columns: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(pageSize, page, data) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    axios.get('http://127.0.0.1:5000/comments/')
      .then((response) => {
        const { data, columns } = response.data;
        this.setState({
          data,
          columns,
          loading: false,
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  
  render() {
    const { pages, loading, pageSize, page, data, columns } = this.state;
    return (    
      <ReactTable
        data={data}
        columns={columns}
        pages={pages}
        loading={loading}
        onFetchData={this.fetchData}
        defaultPageSize={30}
        className="-striped -highlight"
      />
    )
  }
}

export default Data;
