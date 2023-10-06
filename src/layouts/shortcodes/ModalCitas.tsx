import useValidations from '../../hooks/useValidations';
import useNotifications from '../../hooks/useNotifications';
import Input from './Input';

const ModalCitas: React.FC = ({ 
  setOpenModal, 
  titulo='titulo', 
  user_fecha='',
  user_hora='', 
  textButton1='aceptar', 
  textButton2='cancelar', 
  handleFunction,
  formRef
}) => {

  const { input, handleChange, err } = useValidations();
  const { notificationError, Toaster } = useNotifications();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(err).length > 0 || !input.user_name) {
      notificationError('Revisa los campos a llenar');
      return
    } else {
      handleFunction(e);
      }
  }

  return (
    <div className="w-full lg:w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <article className="h-auto rounded-lg bg-white flex flex-col justify-between p-4 lg:p-6">

        <header className="text-center text-xl text-black mb-4 lg:mb-6">
          <h3>{titulo}</h3>
        </header>
        
        <main className="flex flex-col justify-center items-center text-lg text-center text-black lg:mb-2">
          <form ref={formRef} className="lg:flex gap-x-7 lg:flex-wrap lg:max-w-lg lg:justify-center">
            <Input name='user_name' label='Nombre' placeholder='Juan Pérez' type='text' autofocus={true}
              value={input.user_name} onChange={(e) => handleChange(e)} err={err.user_name} input={input} />

            <Input name='user_email' label='Correo' placeholder='tu@correo.com' type='email' autofocus={false}
              value={input.user_email} onChange={(e) => handleChange(e)} err={err.user_email} input={input} />

            <Input name='user_phone' label='Teléfono' placeholder='456123456' type='number' autofocus={false}
              value={input.user_phone} onChange={(e) => handleChange(e)} err={err.user_phone} input={input} />
            
            <article className="mb-3 lg:mb-7 flex flex-col items-start relative">
              <label htmlFor='description' className="form-label mb-0 dark:text-black">
                Mensaje
              </label>
              <textarea
                name='user_description'
                className='form-input px-2 w-56 lg:h-28 bg-white border border-solid border-black dark:bg-white py-2 dark:text-black'
                placeholder='Describe tu problema...'
                value={input.user_description}
                onChange={(e) => handleChange(e)}
              />
              <small className={err.user_description || !input ? 'text-red-600 absolute mt-[5.5rem] lg:mt-[8.5rem]' : ''}>
                {err.user_description || !input 
                  ? <span>{err.user_description}</span> 
                  : null }
              </small>
            </article>
          
            <article className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-center w-full mb-2 lg:mb-6 gap-x-7 gap-y-3 lg:gap-y-5">
              <div className="flex flex-col items-start justify-start">
                <label htmlFor='fecha' className="form-label mb-0 dark:text-black">
                  Fecha 
                </label>
                <input
                  name='user_fecha'
                  className="form-input bg-gray-300 dark:bg-gray-400 dark:text-black py-2 cursor-not-allowed"
                  value={user_fecha}
                />
              </div>

              <div className="flex flex-col items-start justify-start">
                <label htmlFor='hora' className="form-label mb-0 dark:text-black">
                  Hora
                </label>
                <input
                  name='user_hora'
                  className="form-input bg-gray-300 dark:bg-gray-400 dark:text-black py-2 cursor-not-allowed"
                  value={user_hora}
                />
              </div>
            </article>
          </form>
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