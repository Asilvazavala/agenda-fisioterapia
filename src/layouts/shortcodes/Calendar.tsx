import React, { Suspense } from 'react';
import useDates from '../../hooks/useDates';
import TableCitas from '@/shortcodes/TableCitas';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {
  const { 
    formattedLimitDate,
    selectedDate,
    handleDateChange,
    fechaEspanol,
    isDateValid,
    isCurrentDate,
    isDateValidPlus20 
  } = useDates();

  return (
    <section className="section-sm lg:px-10 -mt-12 lg:-mt-4">
      <main className="container flex flex-col lg:flex-row lg:gap-20 rounded-xl bg-theme-light dark:bg-darkmode-theme-light py-10">
        <article className="flex flex-col justify-center items-center lg:items-start mb-10 lg:ml-10">
          <h3 className='mb-2'>Selecciona la fecha</h3>
          <Suspense fallback='Cargando...'>
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}              
            />
          </Suspense>
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

          {isCurrentDate && (
            <p className="text-red-700 bg-red-200 rounded-full px-3 py-1 lg:my-auto">Citas agotadas para hoy.</p>
          )}

          {isDateValidPlus20 && (
            <p className="text-red-700 bg-red-200 rounded-full px-3 py-1 lg:my-auto">La fecha límite es: {formattedLimitDate}</p>
          )}

          {!isDateValid && !isDateValidPlus20 && !isCurrentDate && (
            <div>
              <h3 className='mb-2 text-center'>Selecciona la hora</h3>
              <TableCitas 
                fecha={selectedDate || new Date()}
                fechaEspanol={fechaEspanol}
              />
            </div>
          )}
        </article>
      </main>
    </section>
  );
};

export default MyCalendar;
