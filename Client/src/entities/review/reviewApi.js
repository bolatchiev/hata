import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class ReviewApi {
  static async getReviewsForTheCard(cardId) {
    const { data } = await axiosInstance.get(`/card/${cardId}`, {
      withCredentials: true,
    });
    return data;
  }

  static async create(cardId) {
    const { data } = await axiosInstance.post(`/card/${cardId}`, {
      withCredentials: true,
    });
    return data;
  }
}
