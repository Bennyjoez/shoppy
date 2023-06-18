export default async function getComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
  
  if (!res.status) {
    throw new Error("Failed to fetch comments!")
  };

  return res.json();
}