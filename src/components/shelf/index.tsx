import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../../typings/item";

const Shelf = () => {
  const [products, setProducts] = useState<Item | unknown>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios
        .get(`${process.env.REACT_APP_BASE_URL}`)
        .then((res) => {
          return res;
        })
        .catch(function (error) {
          throw error;
        });

      setProducts(data?.items);
    };

    fetchData().catch(console.error);
  }, []);

  if (!products) return null;

  return (
    <div className="grid grid-cols-4 gap-10">
      {Object.values(products).map((product, index) => (
        <div key={index} className="border-2 rounded border-slate-100 p-2">
          <img
            src={product.fields.image.fields.file.url}
            alt={product.fields.image.fields.title}
            title={product.fields.image.fields.title}
          />
          <h3 className="text-lg">{product.fields.name}</h3>
          <p className="text-lg">{product.fields.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shelf;
