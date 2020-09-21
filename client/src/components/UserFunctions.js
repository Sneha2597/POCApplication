import axios from "axios";

export const register = (newUser) => {
  return axios

    .post("users/register", {
      username: newUser.username,

      password: newUser.password,
    })

    .then((res) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios

    .post("users/login", {
      username: user.username,

      password: user.password,
    })

    .then((res) => {
      localStorage.setItem("usertoken", res.data);

      return res.data;
    })

    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = user => {

  return axios

    .get('users/dashboard', {

      //headers: { Authorization: ` ${this.getToken()}` }

    })

    .then(response => {

      console.log(response)

      return response.data

    })

    .catch(err => {

      console.log(err)

    })

}
