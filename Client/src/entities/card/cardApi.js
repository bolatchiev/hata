import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class TaskApi {
  static async getAll() {
    const { data } = await axiosInstance.get("/card");
    return data;
  }

  static async getById(id) {
    const { data } = await axiosInstance.get(`/card/${id}`);
    return data;
  }

  static async create(taskData) {
    const { data } = await axiosInstance.post("/card", taskData);
    return data;
  }

  static async update(id, taskData) {
    const { data } = await axiosInstance.put(`/card/${id}`, taskData);
    return data;
  }

  static async delete(id) {
    const { data } = await axiosInstance.delete(`/card/${id}`);
    return data;
  }
}
