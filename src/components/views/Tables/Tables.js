import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import classes from './Tables.module.scss';

import utils from '../../../utils';

import {
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const demoContent = [
  {
    id: 1,
    date: utils.dateToStr(new Date()),
    hour: '16:00',
    table: 1,
    duration: 3,
    ppl: 4,
    starters: ['water'],
  },
  {
    id: 2,
    date: utils.dateToStr(new Date()),
    hour: '16:00',
    table: 3,
    repeat: 'daily',
    duration: 2,
    ppl: 3,
    starters: ['bread', 'lemonWater'],
  },
];

const Tables = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const hours = [];

  for (let hour = 12; hour <= 20; hour += 0.5) {
    hours.push(hour);
  }

  const renderTable = (table, hour) => {
    for (const booking of demoContent) {
      if (
        booking.repeat === 'daily' &&
        utils.dateToStr(selectedDate) >= booking.date &&
        booking.table === table &&
        utils.hourToNumber(booking.hour) <= hour &&
        utils.hourToNumber(booking.hour) + booking.duration > hour
      ) {
        return (
          <Button
            variant="contained"
            component={Link}
            to={process.env.PUBLIC_URL + '/tables/events/' + booking.id}
          >
            event id: {booking.id}
          </Button>
        );
      }
      if (
        utils.dateToStr(selectedDate) === booking.date &&
        booking.table === table &&
        utils.hourToNumber(booking.hour) <= hour &&
        utils.hourToNumber(booking.hour) + booking.duration > hour
      ) {
        return (
          <Button
            variant="contained"
            component={Link}
            to={process.env.PUBLIC_URL + '/tables/booking/' + booking.id}
          >
            reservation id: {booking.id}
          </Button>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          href={`${process.env.PUBLIC_URL}/tables/booking/new`}
        >
          Book Table
        </Button>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          href={`${process.env.PUBLIC_URL}/tables/events/new`}
        >
          New Event
        </Button>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Paper className={classes.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hours.map((hour) => (
              <TableRow key={hour}>
                <TableCell component="th" scope="row">
                  {utils.numberToHour(hour)}
                </TableCell>
                <TableCell>{renderTable(1, hour)}</TableCell>
                <TableCell>{renderTable(2, hour)}</TableCell>
                <TableCell>{renderTable(3, hour)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
};

Tables.propTypes = {
  children: PropTypes.any,
};

export default Tables;
