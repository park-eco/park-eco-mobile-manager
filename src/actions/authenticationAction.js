import { BACKEND_ROOT_URL, PARKING_LOT_ATTENDANT_SERVICE } from './Config';

export const logIn = () => {
  return fetch(BACKEND_ROOT_URL + PARKING_LOT_ATTENDANT_SERVICE)
    .then((response) => response.status)
    .then((responseStatus) => {
      return responseStatus;
    })
    .catch((error) => {
      console.error(error);
    });
}