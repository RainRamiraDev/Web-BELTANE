/*
  CONFIGURACIÓN DE AXIOS

  Este archivo define una instancia personalizada de Axios para realizar solicitudes HTTP
  a la API pública de Fake Store (https://fakestoreapi.com). Se utiliza axios.create() 
  para centralizar y reutilizar la configuración en toda la aplicación.

  -----------------------------------------------
  ¿Qué es Axios?
  Axios es una librería que permite hacer solicitudes HTTP (GET, POST, etc.)
  desde el navegador o Node.js usando promesas. Es ampliamente utilizada en proyectos React.

  -----------------------------------------------
  axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  - baseURL: Define la URL base que se aplicará a todas las solicitudes realizadas con esta instancia.
Por ejemplo, si luego hacemos un GET a "/1", se traduce como:
https://fakestoreapi.com/products/1

  - timeout: Establece un límite de espera de 5 segundos. Si la API no responde en ese tiempo,
la solicitud será abortada.

  - headers: Define los encabezados comunes para todas las peticiones.
Aquí se indica que el cuerpo de las solicitudes será JSON, como espera la mayoría de las APIs.

  -----------------------------------------------
  ¿Por qué usar una instancia personalizada?
  - Para evitar repetir configuraciones en cada llamada.
  - Para facilitar el mantenimiento (por ejemplo, si cambia la baseURL).
  - Para agregar interceptores (ej: manejo de tokens, errores globales).
  - Para mantener el código limpio y centralizado.

  -----------------------------------------------
  ¿Cómo usar esta instancia en otro archivo?

  import axiosInstance from '../config/axiosInstance';

  axiosInstance.get('/1')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

*/
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',  // Base URL para los productos
  timeout: 5000,  // Tiempo máximo de espera
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
