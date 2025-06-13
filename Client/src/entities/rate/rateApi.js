import { axiosInstance } from "../../shared/lib/axiosInstance";

const RateApi = {
  getAll: async (cardId) => {
    try {
      const response = await axiosInstance.get(`/rate/${cardId}`, {
        withCredentials: true,
      });
      return response.data?.data || [];
    } catch (error) {
      console.error("Ошибка при получении оценок:", error);
      return [];
    }
  },

  createOrUpdate: async (cardId, { mark }) => {
    try {
      const response = await axiosInstance.post(
        `/rate/${cardId}`,
        { mark },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data?.data;
    } catch (error) {
      console.error("Ошибка при сохранении оценки:", error);
      throw error;
    }
  },
};

export default RateApi;
