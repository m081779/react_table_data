import React, { Component } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Heading from "./Heading";
import Row from './Row';
import Data from "./Data.js";
import table_data from '../data/table_data.js'

export default class Table extends Component {
    state = {
      table_data: table_data
    }

    render(){
      return(
        <div className="container table-responsive"> 
          <table className="table table-bordered table-striped table-hover">
            <TableHeader>
              <Row>
                <Heading align="centered">First Name</Heading>
                <Heading>Last Name</Heading>
                <Heading>Home</Heading>
              </Row>
            </TableHeader>
            <TableBody>
              {this.state.table_data.map(item => {
                return(
                  <Row> 
                    <Data>
                      {item.first_name}
                    </Data>
                    <Data>
                      {item.last_name}
                    </Data>
                    <Data>
                      {item.home}
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