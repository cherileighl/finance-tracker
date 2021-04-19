import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function Transaction() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    New Transaction
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    {/* <FormHelperText>
                        <div align="center">
                            Create Account
                        </div>
                    </FormHelperText> */}

                    <FormControl>
                        <TextField
                            required={true}
                            type="text"
                        />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="first-name">First Name</InputLabel>
                        <Input id="first-name   " aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="last-name">Last Name</InputLabel>
                        <Input id="last-name" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" aria-describedby="my-helper-text" />
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>

                </FormControl>
            </Grid>
           
            <Grid item xs={12} align="center">
                <Button className="standard-btn" variant="contained">
                    Create Transaction
                </Button>
            </Grid>
        </Grid>
    )
}

export default Transaction
