import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // useCallback is used to memoize(stores the results) a function, preventing unnecessary re-renders.
  // 
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);
  // the [url] above: is telling react to only recreate the getProducts function only when the url variable changes.
  // this is helpful when the code containing the following function re-renders to avoid creating a new function on each render unless the 
  // [url] value changes.


  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  // [url, getProducts]: url specifies that useEffect will re-rerun when the url variable changes.
  return { loading, products };

};
