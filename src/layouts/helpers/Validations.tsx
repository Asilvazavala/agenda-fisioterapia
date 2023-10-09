export const Validations = (input: Partial<ErrorObj>): ErrorObj => {
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  let err: ErrorObj = {};

  if (!input.user_name) {
    err.user_name = 'Escribe un nombre';
  } else if (input.user_name.length < 3) {
      err.user_name = 'Mínimo 3 carácteres';
    }

  if (!input.user_email) {
    err.user_email = 'Escribe un correo';
  } else if (!emailRegExp.test(input.user_email)) {
      err.user_email = 'Correo inválido';
    }

  if (!input.user_phone) {
    err.user_phone = 'Escribe un teléfono';
  } else if (input.user_phone.length !== 10) {
      err.user_phone = 'Deben ser 10 números';
    }

  if (!input.user_description) {
    err.user_description = 'Escribe una descripción';
  } 

  return err;
};