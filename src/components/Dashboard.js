import React from "react";
import BudgetCard from "./BudgetCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Dashboard() {
    const classes = useStyles();

    return (
        <Grid
            container 
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <br></br>
            <h2>Dashboard: January 2021</h2>
            <Grid item xs={12}>
                {/* <Paper className={classes.paper}>Groceries</Paper>
                <Paper className={classes.paper}>Utilities</Paper>
                <Paper className={classes.paper}>Hygiene</Paper>
                <Paper className={classes.paper}>Education</Paper>
                <Paper className={classes.paper}>Entertainment</Paper>
                <Paper className={classes.paper}>Charity</Paper> */}

                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />

            </Grid>

        </Grid>

    )
}

export default Dashboard
