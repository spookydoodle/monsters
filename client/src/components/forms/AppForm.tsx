import React from 'react';
import { useStyles } from '../../styles/main';
import { Formik, Form } from 'formik';
import { Grid, Paper, Button, Typography, Divider, Hidden } from '@material-ui/core';
import image from '../../img/Register.png'

// TODO: add a mechanism from router to make sure user wants to close the window if the forms are partially filled but not submitted
interface Props {
    title: string,
    initialValues: object,
    onSubmit: any,
    children: React.ReactChild | Array<React.ReactChild | undefined>,
}

// Raw form to use in components with paper
export const AppForm = ({ title, initialValues, onSubmit, children }: Props) => {
    const classes = useStyles();

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <Grid container item direction="row" justify="space-between" alignItems="center" spacing={2}>
                    <Hidden smDown>
                        <Grid item xs={6}>
                            <img className={classes.image} src={image} />
                        </Grid>
                    </Hidden>

                    <Grid container item xs={12} md={6} direction="column" justify="space-between" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>{title}</Typography>
                        </Grid>

                        {children}

                        {onSubmit ? <Grid item xs={6}>
                            <Button style={{ marginTop: "30px" }} variant="contained" color="primary" type="submit">
                                Submit
                        </Button>
                        </Grid> : undefined}
                    </Grid>

                </Grid>
            </Form>
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
