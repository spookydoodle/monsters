import React from 'react';
import { useStyles } from '../../styles/main';
import { Field } from 'formik';
import Grid, { GridSize } from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { InputType } from '../../typings/types';

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
    name: string,
    id: string,
    label: string,
    type?: InputType,
    required?: boolean,
    as?: React.ElementType,
    items?: Array<FieldItem>,
}


export const GridField = ({ xs, sm, md, lg, xl, ...fieldProps }: Props) => {
    const classes = useStyles();

    return (
        // TODO: use Grid justify and alignItems 'center' properties instead of classes.flexCenter
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Field {...fieldProps} />
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
