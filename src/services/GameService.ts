import apiClient from "./apiClient";

class GameService {
  getGames() {
    const controller = new AbortController();
    const request = apiClient.get("/games", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  searchGames(searchTerm?: string) {
    const controller = new AbortController();
    const request = apiClient.get("/games", {
      signal: controller.signal,
      params: {
        search: searchTerm,
      },
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new GameService();
