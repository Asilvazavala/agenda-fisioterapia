import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isBefore, addDays, isAfter, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import TableCitas from '@/shortcodes/TableCitas';

const MyDatePicker: React.FC = () => {
  const currentDate = new Date();
  const daysToValidate = 20;
  const limitDate = addDays(currentDate, daysToValidate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const isDateValid = isBefore(selectedDate || currentDate, currentDate) && !isSameDay(selectedDate || currentDate, currentDate);
  const isDateValidPlus20 = isAfter(selectedDate || currentDate, addDays(currentDate, daysToValidate));
  const fechaEspanol = format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: es });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  
  return (
    <section className="section-sm lg:px-10 -mt-12 lg:-mt-4">
      <main className="container flex flex-col lg:flex-row lg:gap-20 rounded-xl bg-theme-light dark:bg-darkmode-theme-light py-10">
        <article className="flex flex-col justify-center items-center lg:items-start mb-10 lg:ml-10">
          <h3 className='mb-2'>Selecciona la fecha</h3>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
           {selectedDate && (
            <div>
              <p>Has seleccionado:</p>
              <p className='font-bold'>{fechaEspanol}</p>
            </div>
          )}

        </article>

        <article className='flex flex-col justify-center items-center lg:justify-start'>
          {isDateValid && (
            <p className="text-red-700 bg-red-200 rounded-full px-3 py-1 lg:my-auto">Esta fecha ya pasó.</p>
          )}

          {isDateValidPlus20 && (
            <p className="text-red-700 bg-red-200 rounded-full px-3 py-1 lg:my-auto">La fecha límite es: {format(limitDate, 'EEEE, dd/MM/yyyy', { locale: es })}</p>
          )}

          {!isDateValid && !isDateValidPlus20 && (
            <div>
              <h3 className='mb-2 text-center'>Selecciona la hora</h3>
              <TableCitas 
                fecha={selectedDate}
                fechaEspanol={fechaEspanol}
              />
            </div>
          )}
        </article>
      </main>
    </section>
  );
};

export default MyDatePicker;
