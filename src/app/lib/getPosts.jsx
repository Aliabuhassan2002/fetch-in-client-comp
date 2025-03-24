import axios from "axios";

export async function getPosts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}
