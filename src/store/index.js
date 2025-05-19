/**
 * Este archivo configura y exporta el store principal de Redux utilizando Redux Toolkit.
 *
 * - Se importa `configureStore` desde `@reduxjs/toolkit`, que es la forma recomendada
 *   de crear un store ya que aplica automáticamente middlewares útiles como Redux Thunk
 *   y configura las DevTools de Redux.
 *
 * - Se importa `favoritesReducer` desde el archivo `favoritesSlices.js`, que maneja
 *   la lógica del estado para los productos marcados como favoritos.
 *
 * - `configureStore` recibe un objeto con una propiedad `reducer`, que es un objeto
 *   donde cada propiedad representa una porción del estado global.
 *   En este caso, `favorites: favoritesReducer` significa que el estado `favorites`
 *   será manejado por el reducer importado.
 *
 * - Se exporta el store como una constante llamada `store`, la cual se utilizará
 *   en el `Provider` de React para que toda la app tenga acceso al estado de Redux.
 *
 * Esta configuración modular permite escalar la aplicación fácilmente agregando más
 * slices (por ejemplo: `cart`, `user`, etc.) sin cambiar demasiado la estructura del store.
 */
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../slices/servicesSlices';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

