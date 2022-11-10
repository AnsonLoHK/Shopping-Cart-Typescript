import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  const placeholder = {
    gametitle: "game title",
    price: "price",
    id: "id",
  };
  return (
    <>
      <h2>add game to the store </h2>
      <form>
        <input type="text" placeholder={placeholder.gametitle} />
        <input type="number" placeholder={placeholder.price} />
        <input type="text" placeholder={placeholder.id} />
      </form>
    </>
  );
};

export default ProductForm;
