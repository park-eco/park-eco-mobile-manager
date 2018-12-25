import { BACKEND_ROOT_URL, PARKING_SERVICE } from './Config';

// Call the API to GET information of all available parking lots
export const getAllParkingLots = () => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE)
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

// Call the API to GET information of the parkinglot by name
export const getParkingLot = (name) => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE + '?name=' + name)
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

// Call the API to CREATE new parking lot
export const createNewParkingLot = (name, address, description, longitude, latitude) => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      address: address,
      description: description,
      longitude: longitude,
      latitude: latitude,
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

// Call the API to UPDATE information of the parkinglot by id
export const updateParkingLot = (parking) => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE + '/' + parking.id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: parking.name,
      address: parking.address,
      description: parking.description,
      longitude: parking.longitude,
      latitude: parking.latitude,
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

// Call the API to DELETE information of the parkinglot by id
export const removeParkingLot = (id) => {
  return fetch(BACKEND_ROOT_URL + PARKING_SERVICE + '/' + id, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    }
  })
    .then((response) => response.status)
    .then((responseStatus) => {
      return responseStatus;
    })
    .catch((error) => {
      console.error(error);
    });
}