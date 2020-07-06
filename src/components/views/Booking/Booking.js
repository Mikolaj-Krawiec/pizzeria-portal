import React from 'react';
import classes from './Booking.module.scss';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@material-ui/core';
import PropsTypes from 'prop-types';

import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import utils from '../../../utils';

const demoContent = {
  id: 1,
  date: utils.dateToStr(new Date()),
  hour: '16:00',
  table: 1,
  duration: 3,
  ppl: 4,
  starters: ['water'],
};

const Booking = ({ match }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let content = (
    <TableRow>
      <TableCell component="th" scope="row">
        {demoContent.table}
      </TableCell>
      <TableCell>{demoContent.ppl}</TableCell>
      <TableCell>{demoContent.date}</TableCell>
      <TableCell>{demoContent.hour}</TableCell>
      <TableCell>{demoContent.duration}</TableCell>
      <TableCell>
        {demoContent.starters.map((starter) => (
          <p key={starter}>{starter}</p>
        ))}
      </TableCell>
    </TableRow>
  );

  if (match.params.id === 'new') {
    const starters = [];
    content = (
      <TableRow>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TableCell component="th" scope="row">
            <Select id="select-table" value="">
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select id="select-amount" value="">
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </TableCell>
          <TableCell>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              value={selectedDate}
              onChange={handleDateChange}
              minutesStep={30}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </TableCell>
          <TableCell>
            <Select id="select-duration" value="">
              <MenuItem>0:30</MenuItem>
              <MenuItem>1:00</MenuItem>
              <MenuItem>1:30</MenuItem>
              <MenuItem>2:00</MenuItem>
              <MenuItem>2:30</MenuItem>
              <MenuItem>3:00</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select id="select-starters" value={starters}>
              <MenuItem>water</MenuItem>
              <MenuItem>bread</MenuItem>
            </Select>
          </TableCell>
        </MuiPickersUtilsProvider>
      </TableRow>
    );
  }

  return (
    <Paper className={classes.component}>
      {match.params.id === 'new' ? (
        <Typography variant="h5">NEW RESERVATION</Typography>
      ) : (
        <Typography variant="h5"> RESERVATION: {match.params.id}</Typography>
      )}
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Amount of people</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Starters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{content}</TableBody>
      </Table>
      <div className={classes.foot}>
        {match.params.id === 'new' ? (
          <Button className={classes.footcont}>BOOK</Button>
        ) : (
          <Button className={classes.footcont}>EDIT BOOKING</Button>
        )}
      </div>
    </Paper>
  );
};

Booking.propTypes = {
  match: PropsTypes.object,
};

export default Booking;
