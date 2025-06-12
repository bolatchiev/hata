import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class ReviewApi {
  static async getReviewsForTheCard(cardId) {
    const { data } = await axiosInstance.get(`/review/${cardId}`, {
      withCredentials: true,
    });
    return data;
  }

  static async create(cardId) {
    const { data } = await axiosInstance.post(`/review/${cardId}`, {
      withCredentials: true,
    });
    return data;
  }

  static async delete(userId, id) {
    const { data } = await axiosInstance.delete(`/review/${userId}/${id}`, {
      withCredentials: true,
    });
    return data;
  }
}
