import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isBefore, addDays, isAfter, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

const MyDatePicker: React.FC = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const daysToValidate = 20;
  const isDateValid = isBefore(selectedDate || currentDate, currentDate) && !isSameDay(selectedDate || currentDate, currentDate);
  const isDateValidPlus20 = isAfter(selectedDate || currentDate, addDays(currentDate, daysToValidate));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  
  return (
    <section className="section-sm">
      <main className="container flex flex-col lg:flex-row lg:gap-10">
        <article className="flex flex-col justify-center items-center lg:items-start mb-10 lg:ml-10">
          <h3 className='mb-2'>Selecciona una fecha</h3>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
           {selectedDate && (
            <div>
              <p>Has seleccionado:</p>
              <p className='font-bold'>{format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: es })}</p>
            </div>
          )}

        </article>

        <article className='flex flex-col justify-center items-center lg:justify-start'>
          {isDateValid && (
            <p className="text-red-500">Esta fecha ya pasó.</p>
          )}

          {isDateValidPlus20 && (
            <p className="text-red-500">La fecha no puede ser 21 días mayor que la fecha actual.</p>
          )}

          {!isDateValid && !isDateValidPlus20 && (
            <p>Tabla</p>
          )}
        </article>
      </main>
    </section>
  );
};

export default MyDatePicker;
