export const API_ENDPOINT =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:3003/stories"
        : "https://api.everythingishere.top/stories";
export const HACKER_NEWS_API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
