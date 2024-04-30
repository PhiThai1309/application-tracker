import axios from "axios";

//interceptors (unauthorise)
// axiosClient.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       let res = error.response;
//       if (res.status == 401) {
//         window.location.href = “https://example.com/login”;
//       }
//       console.error(“Looks like there was a problem. Status Code: “ + res.status);
//       return Promise.reject(error);
//     }
// );

const axiosClient = axios.create({
  baseURL: `http://34.229.92.19:3000/application`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
