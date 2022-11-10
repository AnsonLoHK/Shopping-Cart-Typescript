import React, { useState } from "react";

interface ProducstListProps {}

const initialProducst = [
  {
    title: "purple",
    price: 50,
    id: "eft",
  },
  {
    title: "hunt purple",
    price: 50,
    id: "hunt",
  },
  {
    title: "hll purple",
    price: 50,
    id: "hll",
  },
];

// TODO: 定義 useState 初始值的 interface
export interface Product {
  title: string;
  price: number;
  id: string;
}

const ProducstList: React.FC<ProducstListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducst);

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

// TODO: 定義 Button
export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  oneOfYourProps: unknown;
}

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

// TODO!: 參考資源
// https://stackoverflow.com/questions/60436233/creating-a-custom-button-in-react-typescript-and-add-onclick-event
