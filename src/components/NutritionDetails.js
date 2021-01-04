import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListingPage from './common/Listing';
import NutrientsData from './../MockData/NutritionDetailsData';

class NutritionDetails extends React.PureComponent  {
  constructor(props){
	  super(props);
	  this.state = {
		  lstDieatData : []
	  }
  }
  
  async componentDidMount () {
	await this.setState({
		lstDieatData: NutrientsData
	});
  } 
  
  render (){
	  return (
		<React.Fragment>
		  <Card className="main-content-section">
			  <CardContent>
				  <Typography gutterBottom variant="h5" component="h2">
					Nutrition Fact
				  </Typography>
				  <Grid container spacing={0}>
					<Grid item xs className="text-left">
					  <Typography gutterBottom variant="subtitle1" component="h5">Serving size</Typography>
					</Grid>
					<Grid item xs className="text-right">
					  <Typography gutterBottom variant="subtitle1" component="h5">100 g</Typography>
					</Grid>
				  </Grid>
				  <hr className="devider-medium"/>
				  <Grid container spacing={0}>
					<Grid item xs className="text-left">
					  <Typography gutterBottom variant="h5" component="h1">Calories</Typography>
					</Grid>
					<Grid item xs className="text-right">
					  <Typography gutterBottom variant="h5" component="h2">89</Typography>
					</Grid>
				  </Grid>
				  <hr className="devider-medium margin-0"/>
				  {
					  this.state.lstDieatData && this.state.lstDieatData.EssentialNutritients ? 
					  <ListingPage 
					  Data={this.state.lstDieatData.EssentialNutritients} 
					  DataColumns={ ["name", "precentage"] }
					  DataHeadings={ ["", "% Daily Value *"] } /> : null
				  }
				  <hr className="devider-medium margin-0"/>
				  {
					  this.state.lstDieatData && this.state.lstDieatData.SecondaryNutritients ? 
					  <ListingPage Data={this.state.lstDieatData.SecondaryNutritients} /> : null
				  }
				  <hr className="devider-medium margin-0"/>
				</CardContent>
			</Card>
		</React.Fragment>
	  );
  }
}

export default NutritionDetails;