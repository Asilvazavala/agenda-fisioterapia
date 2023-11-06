import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import useDates from '../../hooks/useDates';

const today = dayjs();

export default function DatePicker() {
  const { selectedDate, handleDateChange } = useDates();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        columns={{ xs: 1, lg: 2 }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <DateCalendar 
            defaultValue={today} 
          />
        </Grid>
       
      </Grid>
    </LocalizationProvider>
  );
}
