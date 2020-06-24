import React, { useState } from 'react';
import { useStyles } from '../../styles/main';
import { Formik, Form } from 'formik';
import { Grid, Paper, Button, Typography, Divider, Hidden } from '@material-ui/core';
import image from '../../img/Register.png'
import { GridField } from './GridFields';

// const EmailValidator = _;
// TODO: add a mechanism from router to make sure user wants to close the window if the forms are partially filled but not submitted
interface Props {
    title: string,
    initialValues: object,
    onSubmit: any,
    validate?: any,
    validationSchema?: any,
    children: any,
}

/* 
    Raw form to use in components with paper.
    Provide either validate or validationSchema
*/
// TODO: handle providing both validate and validationSchema / provide validate as a function
// TODO: Display error messages
export const AppForm = ({ title, initialValues, onSubmit, validate, validationSchema, children }: Props) => {
    const classes = useStyles();

    // Disable submit button if errors appear, enable if all input values meet validation criteria
    const [submitDisabled, setDisabled] = useState(false);

    const getValue = (obj: object, name: string) => {
        for (const [key, value] of Object.entries(obj || {})) {
            if(key === name) {
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
                setDisabled(validationSchema && (Object.values(touched).length === 0 || Object.values(errors).some(val => val !== "")))
                console.log("Errors: ", errors)
                console.log("Touched: ", touched)
                return <Form>
                    <Grid container item direction="row" justify="space-between" alignItems="center" spacing={2}>
                        <Hidden smDown>
                            <Grid item xs={6}>
                                <img className={classes.image} src={image} />
                            </Grid>
                        </Hidden>

                        <Grid container item xs={12} md={6} direction="column" justify="space-between" >
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>{title}</Typography>
                            </Grid>
                            
                            {/* {children} */}
                            {children.map((child: any, i: number) => 
                                child ? React.cloneElement(child, {
                                        key: i, 
                                        error: getValue(errors, child.props.name), 
                                        touched: getValue(touched, child.props.name),
                                    }) : undefined
                            )}

                            {onSubmit ?
                                <Grid item xs={6}>
                                    <Button disabled={submitDisabled} style={{ marginTop: "30px" }} variant="contained" color="primary" type="submit">
                                        Submit
                                </Button>
                                </Grid> : undefined}
                        </Grid>

                    </Grid>
                </Form>
            }}
        </Formik>
    );
};

// Centered form wrapped in a grid on paper
export const AppFormGrid = (props: Props) => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ minHeight: "65vh" }}
        >
            <Paper className={classes.formPaper}>
                <AppForm {...props} />
            </Paper>
        </Grid>
    );
};
