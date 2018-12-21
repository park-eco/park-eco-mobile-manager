import { BACKEND_ROOT_URL, PARKING_LOT_ATTENDANT_SERVICE, REGISTER } from './Config';

// Call the API to get information of all available parking lot attendants
export const getAllAttendants = () => {
  return fetch(BACKEND_ROOT_URL + PARKING_LOT_ATTENDANT_SERVICE)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the API to get information of the attendant by username
export const getAttendant = (username) => {
  return fetch(BACKEND_ROOT_URL + PARKING_LOT_ATTENDANT_SERVICE + '?username=' + username)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the API to create new parking lot attendant
export const createNewParkingLotAttendant = (name, username, email, phoneNumber) => {
  return fetch(BACKEND_ROOT_URL + PARKING_LOT_ATTENDANT_SERVICE + '/' + REGISTER, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      phoneNumber: phoneNumber
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
