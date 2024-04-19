import axiosClient from "../apiClient";

const baseUrl = "/application";

export function getApplication() {
  return axiosClient.get(baseUrl);
}

export function editApplication(data: Record<string, string>) {
  return axiosClient
    .put(baseUrl + `/${data._id}`, data)
    .then((data) => {
      console.log("done edit");
    })
    .catch((err) => {
      console.log(err);
    });
}

export function changeStatus(id: string, status: Record<string, string>) {
  return axiosClient
    .put(baseUrl + `/${id}`, status)
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

export function deleteApplication(id: string) {
  return axiosClient.delete(baseUrl + `/${id}`).then((data) => {
    console.log(data);
  });
}

// export function addProduct(data) {
//   return axiosClient.post("/", JSON.stringify(data));
// }
