// dependencies
import React, { Component } from 'react';

// stateless components and data file
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Heading from "./Heading";
import Row from './Row';
import Data from "./Data.js";
import table_data from '../data/table_data.js'

export default class Table extends Component {

  state = {
    table_data: table_data // array of data retrieved from external data file, or database table
  }

  render(){
    return(
      <div className="container table-responsive"> 
        <table className="table table-bordered table-striped table-hover">
          <TableHeader>
            <Row>
              <Heading >First Name</Heading> 
              <Heading>Last Name</Heading>
              <Heading>Home</Heading>
            </Row>
          </TableHeader>
          <TableBody>
          {/* map through table_data array in state, and construct rows with data for each object in the array */}
            {this.state.table_data.map((row, i) => {
              return(
                <Row key={i}>
                  <Data>
                    {row.first_name ? row.first_name : 'Not Available'/* ternary to handle null entries in database */}
                  </Data>
                  <Data>
                    {row.last_name ? row.last_name : 'Not Available'/* ternary to handle null entries in database */}
                  </Data>
                  <Data>
                    {row.home ? row.home : 'Not Available'/* ternary to handle null entries in database */}
                  </Data>
                </Row>
              )
            })}
          </TableBody>
        </table>
      </div>
    )
  }
}