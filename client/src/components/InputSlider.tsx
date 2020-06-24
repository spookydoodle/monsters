import React from 'react';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  input: {
    width: 42,
  },
  }),
);

// use withStyles on the direct component from Material-UI, then use this one in further components
export const NewSlider = withStyles({
  thumb: {
    borderRadius: "20%",
  },
})(Slider)


export function InputSlider() {
  const classes = useStyles();
  // const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
  const [value, setValue] = React.useState<number[]>([20, 37]);

  // const handleSliderChange = (event: any, newValue: number | number[]) => {
  //   setValue(newValue);
  // };

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value === '' ? '' : Number(event.target.value));
  // };

  const handleInputChange = (event: any, i: number) => {
    const newValue = [...value];
    newValue[i] = Number(event.target.value)
    setValue(newValue);
  }

  const handleBlur = () => {
    value.map((val, i) => {
      const newValue = [...value];

      if (val < 0) {
        newValue[i] = 0
        setValue(newValue);
      } else if (val > 100) {
        newValue[i] = 100
        setValue(newValue);
      }
    })
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Cool slider
      </Typography>
      <Grid container spacing={2} alignItems="center">
        {/* <Grid item>
          <VolumeUp />
        </Grid> */}
        <Grid item>
          <Input
            className={classes.input}
            value={value[0]}
            margin="dense"
            onChange={event => handleInputChange(event, 0)}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs>
          <NewSlider
            // value={typeof value === 'number' ? value : 0}
            // onChange={handleSliderChange}
            // aria-labelledby="input-slider"
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value[1]}
            margin="dense"
            onChange={event => handleInputChange(event, 1)}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}