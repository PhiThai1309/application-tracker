import axiosClient from "../apiClient";

export function getApplication() {
  return axiosClient.get("/application");
}

export function getStatus() {
  return axiosClient.get("/application/status");
}

// export function addProduct(data) {
//   return axiosClient.post("/", JSON.stringify(data));
// }
