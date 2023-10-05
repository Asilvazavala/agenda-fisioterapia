export const Validations = (input: string) => {
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  let err = {};

  if (!input.name) {
    err.name = 'Escribe un nombre';
  } else if (input.name.length < 3) {
      err.name = 'Mínimo 3 carácteres';
    }

  if (!input.email) {
      err.email = 'Escribe un correo';
  } else if (!emailRegExp.test(input.email)) {
      err.email = 'Correo invalido';
    }

  return err;
};