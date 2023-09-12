
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Avisos from "./components/vistoriacomponents/Avisos";
import Bike1 from "./components/vistoriacomponents/Bike1";
import Bike2 from "./components/vistoriacomponents/Bike2";

export default function Vistoria() {
    return(
        <main className="bg-white flex flex-col min-h-screen">
            <Header text="Vistoria"/>
            <Avisos/>
            <Bike1/>
            <Bike2/>
            <Footer/>
        </main>
    )
}