import React from 'react';
import { connect } from 'react-redux';
import * as softwareActions from '../../actions/softwareActions';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Software extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
  
    return (
    <div>
      <h1>Sofware</h1>
      <div className="btn-toolbar"> 
        <button className="btn btn-primary" >New +</button>
        <button className="btn btn-alert">Delete</button>
      </div>
      <div >
      <BootstrapTable
          data={ this.props.softwares }
          pagination options={ { noDataText: 'No data' }}>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Software Name</TableHeaderColumn>
          <TableHeaderColumn dataField='version'>Version</TableHeaderColumn>
          <TableHeaderColumn dataField='softwareType'>Art Der Software</TableHeaderColumn>
          <TableHeaderColumn dataField='updateType'>Upate Art</TableHeaderColumn>
          <TableHeaderColumn dataField='machines'>Für Maschinen</TableHeaderColumn>
          <TableHeaderColumn dataField='serialNumbers'>Für Seriennummern</TableHeaderColumn>
      </BootstrapTable>

      </div>
      
    </div>
  );
}
}


const mapStateToProps = (state, ownProps) => {
  return {
    softwares: state.softwares
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Software);
