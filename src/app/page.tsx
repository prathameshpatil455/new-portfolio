import Navbar from "@/components/NavBar/navbar";
import HomePage from "./home/HomePage";

export default function Home() {
  
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <main>
        <HomePage />
      </main>
    </div>
  );
}
