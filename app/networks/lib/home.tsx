import axiosClient from "../apiClient";

const baseUrl = "/application";

export function getApplication() {
  return axiosClient.get(baseUrl);
}

export function editApplication(data: Record<string, string>) {
  return axiosClient
    .put(baseUrl + `/${data._id}`, data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postApplication(data: Record<string, string>) {
  return axiosClient.post(baseUrl + "/create", data).then((data) => {
    console.log(data);
  });
}

export function getStatus() {
  return axiosClient.get(baseUrl + "/status");
}

// export function addProduct(data) {
//   return axiosClient.post("/", JSON.stringify(data));
// }
