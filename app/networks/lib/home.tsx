import axiosClient from "../apiClient";

const baseUrl = "/application";

export function getApplication() {
  return axiosClient.get(baseUrl);
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
