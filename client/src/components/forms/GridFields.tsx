import React from 'react';
import { useStyles } from '../../styles/main';
import { Field } from 'formik';
import Grid, { GridSize } from '@material-ui/core/Grid';
import { InputLabel, MenuItem, FormControl, Typography } from '@material-ui/core';
import { InputType } from '../../logic/types';

interface FieldItem {
    _id: string,
    title: string
}

interface Props {
    xs?: GridSize,
    sm?: GridSize,
    md?: GridSize,
    lg?: GridSize,
    xl?: GridSize,
    error?: string | undefined,
    touched?: boolean,
    name: string,
    id: string,
    label: string,
    type?: InputType,
    required?: boolean,
    as?: React.ElementType,
    items?: Array<FieldItem>,
}


export const GridField = ({ xs, sm, md, lg, xl, error, touched, ...fieldProps }: Props) => {
    const classes = useStyles();

    return (
        <Grid xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Field
                fullWidth
                // margin="dense"
                error={touched && error}
                helperText={touched && error ? error : undefined}
                {...fieldProps}
            />
        </Grid>
    );
};

export const GridFieldSelect = ({ id, label, items, xs, sm, md, lg, xl, ...fieldProps }: Props) => {
    const classes = useStyles();
    const labelId = `${id}-label`;

    const menuItems = items
        ? items.map((item: FieldItem) => (
            <MenuItem key={item._id} value={item._id}>
                {item.title}
            </MenuItem>
        ))
        : null;

    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Field id={id} labelId={labelId} {...fieldProps}>
                    {menuItems}
                </Field>
            </FormControl>
        </Grid>
    );
};
