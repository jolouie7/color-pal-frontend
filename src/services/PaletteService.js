// import { authHeader } from "../helpers/Auth-Header";

export const paletteCreate = (hexcode, colorName) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      hexcode,
      colorName,
    }),
  };

  //! Change this to the API location
  return fetch(
    `http://127.0.0.1:8000/api/create/`,
    requestOptions
  )
    .then(handleResponse)
    .then((palette) => {
      console.log(palette);
      window.alert("Successfuly Created a Palette!");
      return palette;
    });
};

// checks if the http response from the api is 401 Unauthorized and automatically logs the user out.
const handleResponse = (response) => {

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        window.alert("There was an error")
        window.location.reload(true);
        // history.push("/");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}