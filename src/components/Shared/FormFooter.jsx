import React from "react";

const FormFooter = () => {
  return (
    <>
      <h2>Contacta con Nosotros</h2>
      <form method='post' action='#'>
        <div className='fields'>
          <div className='field half'>
            <input type='text' name='nombre' id='name' placeholder='Name' />
          </div>
          <div className='field half'>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='field'>
            <textarea
              name='message'
              id='message'
              placeholder='Mensaje'
            ></textarea>
          </div>
        </div>
        <ul className='actions'>
          <li>
            <input type='submit' value='Enviar' className='primary' />
          </li>
        </ul>
      </form>
    </>
  );
};

export default FormFooter;
