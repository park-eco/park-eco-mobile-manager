import { BACKEND_ROOT_URL, PARKING_SERVICE } from './Config';

// Call the API to get information of all available parking lots
export const getAllParkingLots = () => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the API to create new parking lot
export const createNewParkingLot = (name, address, description) => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      address: address,
      description: description
    }),
  })
  .catch((error) => {
    console.error(error);
  });
}

export const updateParkingLot = (id) => {

}

