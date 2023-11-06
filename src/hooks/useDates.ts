import { useState } from 'react';
import { format, isBefore, addDays, isAfter, isSameDay } from 'date-fns';

const useDates = () => {
  const currentDate = new Date();
  const daysToValidate = 20;

  const limitDate = addDays(currentDate, daysToValidate);
  const formattedLimitDate = traducirFecha(format(limitDate, 'EEEE, dd/MM/yyyy'));

  const tomorrow = addDays(new Date(), 1); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(tomorrow);
  const fechaEspanol = selectedDate ? traducirFecha(format(selectedDate, 'EEEE, dd/MM/yyyy')) : "";

  const isDateValid = isBefore(selectedDate || currentDate, currentDate) && !isSameDay(selectedDate || currentDate, currentDate);
  const isCurrentDate = isSameDay(selectedDate || currentDate, currentDate);
  const isDateValidPlus20 = isAfter(selectedDate || currentDate, addDays(currentDate, daysToValidate));
  
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  function traducirDia(dia : string) {
    switch (dia) {
      case 'Sunday':
        return 'Domingo';
      case 'Monday':
        return 'Lunes';
      case 'Tuesday':
        return 'Martes';
      case 'Wednesday':
        return 'Miércoles';
      case 'Thursday':
        return 'Jueves';
      case 'Friday':
        return 'Viernes';
      case 'Saturday':
        return 'Sábado';
      default:
        return dia;
    }
  }

  function traducirFecha(fecha: string) {
    const partesFecha = fecha.split(', ');
    const diaEnIngles = partesFecha[0];
    const fechaSinDia = partesFecha[1];
    const diaEnEspanol = traducirDia(diaEnIngles);
    return `${diaEnEspanol}, ${fechaSinDia}`;
  }

  return {
    formattedLimitDate,
    selectedDate,
    fechaEspanol,
    isDateValid,
    isCurrentDate,
    isDateValidPlus20,
    handleDateChange
  }
};

export default useDates;