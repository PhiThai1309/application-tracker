import axiosClient from "../apiClient";

export function getApplication() {
  return axiosClient.get("/application");
}

// export function addProduct(data) {
//   return axiosClient.post("/", JSON.stringify(data));
// }
