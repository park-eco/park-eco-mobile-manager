import { BACKEND_ROOT_URL, PARKING_LOT_ATTENDANT_SERVICE, LOG_IN } from './Config';

export const logIn = (username, password) => {
  return fetch(BACKEND_ROOT_URL + PARKING_LOT_ATTENDANT_SERVICE + '/' + LOG_IN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.status)
    .then((responseStatus) => {
      return responseStatus;
    })
    .catch((error) => {
      console.error(error);
    });
}