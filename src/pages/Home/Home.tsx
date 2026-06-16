import { useState } from "react";
import "./Home.css";
import { Navbar } from "../../components/NavBar/NavBar";
import { CosmosHome } from "./CosmosHome/CosmosHome";

export function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [state, setState] = useState(false);

  const getPlanet = () => {
    setState(true);
    fetch(`${apiUrl}/planets/${name}`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setState(false);
      });
  };
  return (
    <div>
     <Navbar />
     <CosmosHome />
    </div>
 
  );
}
