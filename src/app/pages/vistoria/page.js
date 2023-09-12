
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import Avisos from "@/app/components/vistoriacomponents/Avisos";
import Bike1 from "@/app/components/vistoriacomponents/Bike1";
import Bike2 from "@/app/components/vistoriacomponents/Bike2";


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