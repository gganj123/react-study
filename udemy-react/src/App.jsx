import { useState } from "react";
import "./styles.css";
import Tabs from "./components/Tabs";
import Header from "./components/Header/Header";

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <Header />
      <Tabs />
    </div>
  );
}
