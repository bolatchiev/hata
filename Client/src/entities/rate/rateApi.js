import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class TaskApi {
  static async getAll() {
    const { data } = await axiosInstance.get("/rate");
    return data;
  }

  static async getById(id) {
    const { data } = await axiosInstance.get(`/rate/${id}`);
    return data;
  }

  static async create(cardId, taskData) {
    const { data } = await axiosInstance.post(`${cardId}/rate`, taskData);
    return data;
  }

  static async getByCard(cardId, taskData) {
    const { data } = await axiosInstance.get(`${cardId}/rate`, taskData);
    return data;
  }
}
