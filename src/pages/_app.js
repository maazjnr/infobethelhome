import "@/styles/globals.css";
import MainUi from "./MainUi";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function App() {
  return <MainUi />;
}
