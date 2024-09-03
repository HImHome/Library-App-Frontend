import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PkUmdEcDoctnwVS0qgm5lErhNkuhBhyi6XgT58clqxF92FbAN6gTyHOQ8oQXl7BBKSblTdn9GFkme3i4auyZZDH00j2bQDdlq"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="/home">
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
