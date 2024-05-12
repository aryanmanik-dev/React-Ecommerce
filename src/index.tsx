import React from "react";
import ReactDOM from "react-dom/client";
import  "./styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { client } from "framework/index";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);

reportWebVitals();
