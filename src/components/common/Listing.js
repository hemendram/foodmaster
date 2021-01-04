import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';

class ListingPage extends React.PureComponent  {
  constructor(props){
	  super(props);
	  this.state = {
		  lstData : []
	  }
  }
  
  async componentDidMount () {
      await this.setState({
          lstData: this.props.Data
      });
  } 
  
  render (){
	  return (
		<React.Fragment>
		  <TableContainer component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                {
                    this.props.DataHeadings && this.props.DataHeadings.length > 0 ? 
                    this.props.DataHeadings.map((heading, index) => {
                        <TableCell key={"head_" + heading + "" + index} align="right">{ heading }</TableCell>
                    })
                : null
                }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    this.state.lstData && this.state.lstData.length > 0 ? 
                    this.state.lstData.map((row, index) => (
                        <React.Fragment>
                        <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <b>{row.name}</b><label className="margin-left-10">{row.quantity}</label>
                                </TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    {row.percentage}
                                </TableCell>
                        </TableRow>
                        {row.subNutrients && row.subNutrients !== null && row.subNutrients.length > 0 ? 
                            row.subNutrients.map((sub, index_sub) => (
                                <TableRow key={index_sub}>
                                        <TableCell component="th" scope="row">
                                            {sub.name}<label className="margin-left-10">{sub.quantity}</label>
                                        </TableCell>
                                        <TableCell component="th" scope="row" align="right">
                                            {sub.percentage}
                                        </TableCell>
                                </TableRow>
                            ))
                        : null}
                        </React.Fragment>
                    ))
                    :
                    <TableRow key="no-data-found">
                        <TableCell colSpan={2} component="th" scope="row">
                            <Alert variant="filled" severity="error">
                                No record found...
                            </Alert>
                        </TableCell>
                    </TableRow>
                }
            </TableBody>
            </Table>
        </TableContainer>
		</React.Fragment>
	  );
  }
}

export default ListingPage;