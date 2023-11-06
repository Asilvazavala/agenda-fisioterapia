import React, { useState, useEffect } from 'react';
import ModalCitas from './ModalCitas';
import useNotifications from '../../hooks/useNotifications';
import emailjs from '@emailjs/browser';

interface TableCitasProps {
  fecha: Date;
  fechaEspanol: string;
}

const TableCitas: React.FC<TableCitasProps> = ({ fecha, fechaEspanol }) => {
  const { notificationSuccess, Toaster } = useNotifications();

  const [openModal, setOpenModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [tableData, setTableData] = useState([
    { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '10:00 AM', atiende: 'Ana' },
    { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '11:00 AM', atiende: 'Juan' },
    { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '12:00 PM', atiende: 'Ana' },
    { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '13:00 PM', atiende: 'Juan' },
  ]);

  useEffect(() => {
    const initialTableData = [
      { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '10:00 AM', atiende: 'Ana' },
      { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '11:00 AM', atiende: 'Juan' },
      { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '12:00 PM', atiende: 'Ana' },
      { apartar: 'Apartar', fecha: fecha.toLocaleDateString(), hora: '13:00 PM', atiende: 'Juan' },
    ];

    setTableData(initialTableData);
  }, [fecha]);

  const handleOpenModal = (hora: string) => {
    setSelectedHour(hora);
    setOpenModal(true);
  };

  const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ilbj5hc', 'template_wkzbw18', form.current, 'XG4NgA-AuhcF9dzP4')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTableData((prevTableData) => prevTableData.filter((row) => row.hora !== selectedTime));
    setOpenModal(false);
    notificationSuccess('Cita creada con éxito, ¡Gracias!');
    sendEmail(e);
  };

  return (
    <main>
      <Toaster />
      <table className='flex flex-col'>
        <thead>
          <tr className='flex gap-12 lg:gap-36 bg-primary dark:bg-cyan-700 text-white dark:text-black px-1 lg:px-6'>
            <th className="align-middle">Cita</th>
            <th className="align-middle">Fecha</th>
            <th className="align-middle">Hora</th>
            <th className="align-middle">Atiende</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr 
              className={`flex gap-5 lg:gap-28 px-1 lg:px-6 py-2 lg:py-1 text-black ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`} 
              key={index}
              onClick={() => setSelectedTime(row.hora)}
            >
              <td 
                onClick={() => handleOpenModal(row.hora)}
                className="underline font-bold hover:text-primary dark:hover:text-cyan-700 transition-colors cursor-pointer">
                {row.apartar}
              </td>
              <td>{row.fecha}</td>
              <td>{row.hora}</td>
              <td>{row.atiende}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        openModal && 
          <ModalCitas 
            setOpenModal={setOpenModal}
            titulo='Confirma tu cita' 
            user_fecha={fechaEspanol}
            user_hora={selectedHour} 
            textButton1='Confirmar' 
            textButton2='Cancelar' 
            handleFunction={handleSubmit}
            formRef={form}
          />
      }
    </main>
  );
};

export default TableCitas;
