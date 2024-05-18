import { useState } from "react";
import "./styles.css";
import Tabs from "./components/Tabs";
import Header from "./components/Header/Header";

export default function App() {

  return (
    <div>
      <Header />
      <Tabs />
    </div>
  );
}
export default App;
