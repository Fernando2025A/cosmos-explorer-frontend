import "./Home.css";
import { Navbar } from "../../components/NavBar/NavBar";
import { CosmosHome } from "./CosmosHome/CosmosHome";

export function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div>
     <Navbar />
     <CosmosHome />
    </div>
 
  );
}
