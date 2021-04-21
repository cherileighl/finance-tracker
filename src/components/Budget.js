import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return { 
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute', 
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

function Budget() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in Modal</h2>
            <p id="simple-modal-description">Simple description</p>
        </div>
    );

    return (
        <Grid container spacing={5} id="budget">
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4' className="section-title">
                    New Budget
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormControl>
                        <TextField
                            required={true}
                            type="text"
                        />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="budget-name">Budget Name</InputLabel>
                        <Input id="budget-name" aria-describedby="my-helper-text" />
                    </FormControl>
                </FormControl>

                
            </Grid>

            {/* <Grid item xs={12} align="center">
               
            </Grid> */}

            <Grid item xs={12} align="center">
                <Button className="standard-btn" variant="contained">
                    Create Budget
                </Button>
                {/* <Button onClick={handleOpen} className="standard-btn" variant="contained">
                    Add Category
                </Button> */}
                {/* <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                > {body}
                </Modal> */}
            </Grid>
        </Grid>
    )
}

export default Budget
