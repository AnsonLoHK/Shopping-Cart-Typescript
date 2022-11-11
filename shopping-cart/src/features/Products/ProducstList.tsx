import React, { useState } from "react";
import { ButtonPrimary } from "../../types/button";

interface ProducstListProps {}

const ProducstList: React.FC<ProducstListProps> = ({}) => {
  const [products, setProducts] = useState();

  const AddProduct = () =>
    setProducts((prevProducts) => [
      {
        title: "dsdd",
        price: 50,
        id: "efsdst",
      },
      ...prevProducts,
    ]);

  return (
    <div>
      <h2>game list</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {`${product.title}`} ${product.price}
          </span>
        </div>
      ))}

      <ButtonPrimary
        oneOfYourProps
        onClick={AddProduct}
        children="Add Product"
      />
    </div>
  );
};

export default ProducstList;

// TODO!: 參考資源
// https://stackoverflow.com/questions/60436233/creating-a-custom-button-in-react-typescript-and-add-onclick-event
