import apiClient from "./apiClient";

class GenreService {
  getGenres() {
    const controller = new AbortController();
    const request = apiClient.get("/genres", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new GenreService();
