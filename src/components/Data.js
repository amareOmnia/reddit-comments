import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";

import "react-table/react-table.css";
import '../styles/Data.css';
import '../components/Query.js';
  

class Data extends React.Component {
  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },{
      name: 'Cooper Linsley',
      age: 23,
      friend: {
        name: 'Jason Borne',
        age: 22,
      }
    }]
    
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
    
    return (
      <ReactTable
        data={data}
        columns={columns}
      />
    )
  }
}

export default Data;
