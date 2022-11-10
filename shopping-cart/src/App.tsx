import React from "react";

import "./App.css";
import ProducstList from "./features/Products/ProducstList";
import ProductForm from "./features/Products/ProductForm";

function App() {
  return (
    <div className="App">
      <ProducstList />
      <ProductForm />
    </div>
  );
}

export default App;
