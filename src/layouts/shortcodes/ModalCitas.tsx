import useValidations from '../../hooks/useValidations';
import useNotifications from '../../hooks/useNotifications';
import Input from './Input';

const ModalCitas: React.FC = ({ 
  setOpenModal, 
  titulo='titulo', 
  fecha='',
  hora='', 
  textButton1='aceptar', 
  textButton2='cancelar', 
  handleFunction 
}) => {

  const { input, handleChange, err } = useValidations();
  const { notificationError, Toaster } = useNotifications();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(err).length > 0 || !input.name) {
      notificationError('Revisa los campos a llenar');
      return
    } else {
      handleFunction(e);
      }
  }

  return (
    <div className="w-full lg:w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <article className="h-auto rounded-lg bg-white flex flex-col justify-between p-6">
        <aside className="flex justify-end">
          <span 
            onClick={() => setOpenModal(false)} 
            className='bg-transparent border-none text-lg cursor-pointer transition-colors hover:bg-red-500 bg-red-800 text-white px-2 py-[0.1rem] rounded-md'>X</span> 
        </aside>

        <header className="text-center text-xl text-black mb-6">
          <h3>{titulo}</h3>
        </header>
        
        <main className="flex flex-col justify-center items-center text-lg text-center text-black lg:mb-2">
          <form className="lg:flex gap-x-7">
            <Input name='name' label='Nombre' placeholder='Juan Pérez' type='text' autofocus={true}
              value={input.name} onChange={(e) => handleChange(e)} err={err.name} input={input} />

            <Input name='email' label='Correo' placeholder='tu@correo.com' type='email' autofocus={false}
              value={input.email} onChange={(e) => handleChange(e)} err={err.email} input={input} />
          </form>

          <article className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start w-full mb-6 gap-x-7 gap-y-5">
            <div className="flex flex-col items-start justify-start">
              <label className="form-label mb-0 dark:text-black">
                Fecha 
              </label>
              <input
                className="form-input bg-gray-300 dark:bg-gray-400 dark:text-black py-2 cursor-not-allowed"
                disabled
                value={fecha}
              />
            </div>

            <div className="flex flex-col items-start justify-start">
              <label className="form-label mb-0 dark:text-black">
                Hora
              </label>
              <input
                className="form-input bg-gray-300 dark:bg-gray-400 dark:text-black py-2 cursor-not-allowed"
                disabled
                value={hora}
              />
            </div>
          </article>
        </main>

        <footer className="flex justify-center items-center">
          <button className="text-lg m-3 px-4 py-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-500 transition-colors text-white" onClick={() => setOpenModal(false)}>{textButton2}</button>
          <button 
            className="text-lg m-3 px-4 py-2 rounded-md cursor-pointer bg-blue-700 hover:bg-blue-500 transition-colors text-white" 
            onClick={(e) => handleSubmit(e)}
          >{textButton1}
          </button>
        </footer>
      </article>
      <Toaster />
    </div>
  )
};

export default ModalCitas;