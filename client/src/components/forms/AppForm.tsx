import React, { useState } from 'react';
import { useStyles } from '../../styles/main';
import { Formik, Form } from 'formik';
import { Grid, Paper, Button, Typography, Hidden } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import image from '../../img/Register.png'
import { ModeType } from '../../logic/types';

// const EmailValidator = _;
// TODO: add a mechanism from router to make sure user wants to close the window if the forms are partially filled but not submitted
interface Props {
    mode: ModeType,
    initialValues: object,
    onSubmit?: any,
    validate?: any,
    validationSchema?: any,
    children: any,
    child?: any,
}

/* 
    Raw form to use in components with paper.
    Provide either validate or validationSchema
*/
// TODO: handle providing both validate and validationSchema / provide validate as a function
// TODO: Display error messages
export const AppForm = ({ mode, initialValues, onSubmit, validationSchema, children }: Props) => {
    const classes = useStyles();

    // Disable submit button if errors appear, enable if all input values meet validation criteria
    const [submitDisabled, setDisabled] = useState(false);

    const getValue = (obj: object, name: string) => {
        for (const [key, value] of Object.entries(obj || {})) {
            if (key === name) {
                return value;
            }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validate={validate}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) => {
                return <Form>
                    <Grid item>
                        {/* [].flat applied as 'children' might be an array of components (Login, Register) or  */}
                        {[children].flat().map((child: any, i: number) =>
                            child ? React.cloneElement(child, {
                                key: i,
                                error: getValue(errors, child.props.name),
                                touched: getValue(touched, child.props.name),
                            }) : undefined
                        )}

                        <Button
                            disabled={submitDisabled}
                            style={{ marginTop: "35px", width: "100%" }}
                            variant={mode === "dark" ? "outlined" : "contained"}
                            color={mode === "dark" ? undefined : "primary"}
                            type="submit"
                        >
                            Submit
                            </Button>
                    </Grid>
                </Form>
            }}
        </Formik>
    );
};

interface GridFormProps {
    children: React.ReactChild | Array<React.ReactChild | undefined> | undefined,
    title?: string,
    error?: string,
}

// Centered form wrapped in a grid on paper
export const AppFormGrid = ({ children, title, error }: GridFormProps) => {
    const classes = useStyles();

    return (
        <Paper className={classes.formPaper}>
            <Grid container direction="row" spacing={2}>

                <Hidden smDown>
                    <Grid item md={6}>
                        <img className={classes.image} src={image} />
                    </Grid>
                </Hidden>

                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    item
                    xs={12}
                    md={6}
                >
                    {title ? <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            {title}
                        </Typography>
                    </Grid> : undefined}

                    {error ? <Grid item>
                        <Alert style={{ margin: "1em auto" }} variant="filled" severity="error">
                            {error}
                        </Alert>
                    </Grid> : undefined}
                    
                    {children}
                </Grid>
            </Grid>
        </Paper>
    );
};
