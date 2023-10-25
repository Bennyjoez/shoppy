import axios from "axios";

export default async function getComments() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");

  return res.data;
}