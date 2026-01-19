import apiClient from "../utils/api-client";

export function getSugeestionAPI(search) {
  return apiClient.get(`/products/suggestions?search=${search}`);
}
