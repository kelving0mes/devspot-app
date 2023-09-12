
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import BackButton from "@/app/components/main/BackButton";
import Avisos from "@/app/components/vistoriacomponents/Avisos";
import Bike1 from "@/app/components/vistoriacomponents/Bike1";
import Bike2 from "@/app/components/vistoriacomponents/Bike2";
import Link from "next/link";


export default function Vistoria() {
    return(
        <main className="bg-white flex flex-col min-h-screen">
            <Header text="Vistoria"/>
            <Avisos/>
            <div className="justify-center gap-5 flex items-center flex-col">
                <Bike1/>
                <Bike2/>
                <Link href="/pages/home"><BackButton/></Link>
            </div>
            <Footer/>
        </main>
    )
}