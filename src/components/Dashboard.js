import React from "react";
import BudgetCard from "./BudgetCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
            id="dashboard"
        >
            <br></br>
            <Typography component='h4' variant='h4' className="section-title">
                Dashboard
            </Typography>
            <Grid item xs={12}>
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
                <BudgetCard />
            </Grid>
        </Grid>

    )
}

export default Dashboard
