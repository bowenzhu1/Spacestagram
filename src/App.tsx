import React from "react";
import Home from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLink,
  faHeart,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faLink, faHeart, farHeart, faChevronCircleDown, faChevronCircleUp);

export function App() {
  return <Home />;
}

export default App;
