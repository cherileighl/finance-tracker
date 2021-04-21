import React from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        width: 700,
    },
    table : {
        minWidth: 650,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "#395c35",
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius:  5,
        // backgroundColor: "#1a90ff",
        backgroundColor: "#3b7277",
    },
}))(LinearProgress);

function createData(date, source, amount, form, notes) {
    return {date, source, amount, form, notes};
}

const rows = [
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
    createData("11 March 2021", "Smith's Fuel", "$34.59", "Debit",  "Filled Lincoln with Fuel"),
];

function BudgetCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        C
                    </Avatar>
                    }
                title="Charity"
                subheader="$50 of $150"
            />
            {/* <CardMedia 
                className={classes.media}
                image=""
                title="Paella dish"
            />    */}
            <CardContent>
                <BorderLinearProgress variant="determinate" value={50} />
                
            </CardContent>
            <CardActions disableSpacing>
                <IconButton 
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Transactions</Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="Transaction table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Source</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                    <TableCell align="right">Form</TableCell>
                                    <TableCell align="right">Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        {/* <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell> */}
                                        <TableCell component="th" scope="row">{row.date}</TableCell>
                                        <TableCell align="right">{row.source}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                        <TableCell align="right">{row.form}</TableCell>
                                        <TableCell align="right">{row.notes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default BudgetCard
