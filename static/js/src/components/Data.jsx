import React, { Component } from "react";
// import PropTypes from "prop-types";
import ReactTable from "react-table";

class Data extends Component {
  
  render() {
    const data = this.props.data
    const columns = this.props.columns
  
  return (    <ReactTable
        data={data}
        columns={columns}/>
  )
  }
}

export default Data;
