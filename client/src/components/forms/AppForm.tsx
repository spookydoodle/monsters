import React from 'react';
import { useStyles } from '../../styles/main';
import { Formik, Form } from 'formik';
import { Grid, Paper, Button } from '@material-ui/core';

interface Props {
    title: string,
    initialValues: object,
    onSubmit: any,
    children: Array<React.ReactChild | undefined>,
}

// Raw form to use in components with paper
export const AppForm = ({ title, initialValues, onSubmit, children }: Props) => {
    const classes = useStyles();

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <Grid container item xs={12} direction="column" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <h1 className={classes.center}>{title}</h1>
                    </Grid>

                    {children}

                    <Grid className={classes.center} item xs={12}>
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
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
            style={{minHeight: "80vh"}}
        >
            <Paper className={classes.formPaper}>
                <AppForm {...props} />
            </Paper>
        </Grid>
    );
};
