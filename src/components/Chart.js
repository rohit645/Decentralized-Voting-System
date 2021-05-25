// import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';


import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Break from './Break'
import {Link} from 'react-router-dom'

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";
import {withRouter} from 'react-router-dom';

export default function Chart() {
  // The first commit of Material-UI
  const [selectedDate1, setSelectedDate1] = React.useState(new Date('2014-08-18T21:11:53'));
  const [selectedDate2, setSelectedDate2] = React.useState(new Date('2014-08-18T21:12:54'));
  const [timeInfo, setTimeInfo] = React.useState({
    start_time: new Date('2014-08-18T21:11:53').getTime(),
    end_time: new Date('2014-08-18T21:12:54').getTime()
  });

  const handleDateChange1 = (date) => {
    const newDateTime = {
      ...timeInfo,
      "start_time": date.getTime()
    }
    setTimeInfo(newDateTime);
    setSelectedDate1(date);
    console.log(timeInfo);
  };

  const handleDateChange2 = (date) => {
    const newDateTime = {
      ...timeInfo,
      "end_time": date.getTime()
    }
    setTimeInfo(newDateTime);
    setSelectedDate2(date);
    console.log(timeInfo);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Election Start Time"
          format="MM/dd/yyyy"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Election Start Time"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Election End Time"
          format="MM/dd/yyyy"
          value={selectedDate2}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Election End Time"
          value={selectedDate2}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <Break />
        <Break />
        <Break />
        <Break />
        <Break />

        <Link to = {
          {
            pathname: "/home",
            aboutProps: timeInfo
          }
        }>
          <Button variant="contained" color="primary">
            Start Election
          </Button>
        </Link>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
