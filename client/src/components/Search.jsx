import React from "react";
import axios from 'axios';
import ReactTable from "react-table";

import "react-table/react-table.css";


class Search extends React.Component {
  constructor() {
    super();
    // needed for backend requests
    this.headers = {
      'min_score' : '5',
      'ignore_empties' : true,
      'ignore_http' : true,
      'subreddit' : 'science',
      'total_amount' : '100'
    };

    // needed for state of table browsing
    this.state = {
      pages: 3,
      pageSize: 20,
      page: 1,
      data: [],
      columns: [],
    };  
    this.httpIgnored = this.httpIgnored.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // Following two functions return truth value of the ignoring headers to the input form checkbox
  httpIgnored() {
    return this.headers.ignore_http === true
  }
  
  emptiesIgnored() {
    return this.headers.ignore_empties === true
  }

  // called when form is submitted, updates the headers then calls fetchData
  handleSubmit(event) {
    //stops reload
    event.preventDefault();
    console.log('handling submit...')
    // if the value is not empty, it is updated
    if (event.target.min_score.value) {
      this.headers.min_score = event.target.min_score.value;
    }
    if (event.target.ignore_empties.value) {
      this.headers.ignore_empties = event.target.ignore_empties.value;
    }
    if (event.target.ignore_http.value) {
      this.headers.ignore_http = event.target.ignore_http.value;
    }
    if (event.target.subreddit.value) {
      this.headers.subreddit = event.target.subreddit.value;
    }
    if (event.target.total_amount.value) {
      this.headers.total_amount = event.target.total_amount.value;
    }

    this.fetchData();

  }
  // sends POST request to python script data.py
  fetchData() {
    console.log('fetch Data')
    axios.post('/query/', this.headers)
      .then((response) => {
        const { data, columns } = response.data;
        this.setState({
          data,
          columns,
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
    });
  }

  render() {
    const { pages, data, columns } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post" encType="text/plain">
          <div className="flex">
            <h2 className="">Subreddit: </h2>
            <input type="text" name="subreddit" placeholder={this.headers.subreddit} className="text-field"/>

            <h2 className="">Minimum Score: </h2>
            <input type="text" name="min_score" placeholder={this.headers.min_score} className="text-field"/>

            <h2 className="">Search Size: </h2>
            <input type="text" name="total_amount" placeholder={this.headers.total_amount}className="text-field"/>
            <div>
              <input type="checkbox" name="ignore_http" checked={this.httpIgnored()}/> HTTP
              <br/>
              <input type="checkbox" name="ignore_empties" checked={this.emptiesIgnored()}/> [deleted]
            </div>
            <input type="submit" value="Search"/>
          </div>
        </form>
        <ReactTable
          data={data}
          columns={columns}
          pages={pages}
          onFetchData={this.fetchData}
          defaultPageSize={30}
          className="-striped -highlight"
        />
      </div>
    )
  }
}
export default Search;