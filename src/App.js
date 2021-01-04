import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Typography from '@material-ui/core/Typography';
import NutritionDetails from './components/NutritionDetails';
import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="dashboard-main" maxWidth="md">
	  <Grid container spacing={0}>
			<Grid item xs>
			  <Header/>
			</Grid>
		  </Grid>
        <Grid container spacing={0}>
			<Grid item xs>
			  <div className="slide slide1"/>
			</Grid>
		  </Grid>
		  <Grid container spacing={0}>
			<Grid item xs>
			  <div className="slide slide2"/>
			</Grid>
		  </Grid>
		  <Grid container spacing={0}>
			<Grid item xs>
			  <div className="slide slide3"/>
			</Grid>
		  </Grid>
		  <Grid container spacing={0}>
			<Grid item xs className="main-content">
			  <NutritionDetails />
			</Grid>
		  </Grid>
		  <Grid container spacing={0}>
			<Grid item xs className="main-content">
			  <ul>
				  <li><Typography variant="h6" gutterBottom className="color-aqua-green">Delivering with love and care for you to relish</Typography></li>
			  </ul>
			</Grid>
		  </Grid>
		  <hr className="devider-medium"/>
		  <Grid container spacing={0} className="footer">
			<Grid item xs className="main-content">
				<Typography variant="h6" gutterBottom>About Demo Group</Typography>
				<Typography variant="body1" gutterBottom>Leading the Crops Devision for Demo Group is India's best branded fruit
				 company and a market leader in controlled cultivation and marketing of high quality fruits to domestic and internation customers in socially responsible manner.
				</Typography>
				<Typography variant="body1" gutterBottom>We are happy to server fresh and delicious fruits.</Typography>
				<hr className="devider-medium margin-top-30"/>
			</Grid>
		  </Grid>
      </Container>
    </React.Fragment>
  );
}
