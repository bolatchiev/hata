import axiosInstance from "../../shared/lib/axiosInstance";

export default class UserApi {
  static async getAllFavoritesForTest() {
    const { data } = await axiosInstance.get("/");
    return data;
  }

  static async addToFavourites() {
    const { data } = await axiosInstance.post("/:id");
    return data;
  }

  static async switchFavorite(inputs) {
    const { data } = await axiosInstance.post("/switch/:cardId", inputs);
    return data;
  }
}
