export const authHeader = () => {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  if (user && token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

//! You can put the token in the user obj if you want instead of seperating