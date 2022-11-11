import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import ProducstList from "./features/Products/ProducstList";
import ProductForm from "./features/Products/ProductForm";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProducstList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
