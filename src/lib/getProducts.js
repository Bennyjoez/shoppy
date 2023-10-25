import axios from "axios";

export default async function getProducts() {
  const res = await axios.get('https://fakestoreapi.com/products');
  
  return res.data;
}
