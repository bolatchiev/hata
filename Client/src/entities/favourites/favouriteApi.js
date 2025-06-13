// import axiosInstance from "../../shared/lib/axiosInstance";

// export default class UserApi {
//   static async getAllFavoritesForTest() {
//     const { data } = await axiosInstance.get("/favourite");
//     return data;
//   }

//   static async addToFavourites() {
//     const { data } = await axiosInstance.post("/favourite/:id");
//     return data;
//   }

//   static async switchFavorite(inputs) {
//     const { data } = await axiosInstance.post(
//       "/favourite/switch/:cardId",
//       inputs
//     );
//     return data;
//   }
// }

// import { axiosInstance } from '../../shared/lib/axiosInstance';

// export class FavoriteApi {
//   static async getUserFavorites(userId) {
//     const response = await axiosInstance.get(`/favourite/${userId}`);
//     return response.data.data;
//   }

//   static async toggleFavorite(cardId) {
//     const response = await axiosInstance.post(`/favourite/switch/${cardId}`);
//     return response.data;
//   }

//   static async checkIsFavorite(userId, cardId) {
//     const response = await axiosInstance.get(`/favourite/check/${userId}/${cardId}`);
//     return response.data.data.isFavourite;
//   }
// }

import axiosInstance from "../../shared/lib/axiosInstance";

export default class FavoriteApi {
  static async getUserFavorites(userId) {
    try {
      const { data } = await axiosInstance.get(`/favourite/${userId}`);
      return data.data || []; // Возвращаем массив даже если data.data undefined
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  }

  static async toggleFavorite(cardId) {
    try {
      const { data } = await axiosInstance.post(`/favourite/switch/${cardId}`);
      return data;
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  }

  
}