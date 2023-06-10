import axios from "axios"

export default async function getProducts() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  } catch(err) {
      throw new Error('Failed to fetch data');
  }
}