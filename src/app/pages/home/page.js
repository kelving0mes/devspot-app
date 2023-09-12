import UserInfoCard from "../../components/main/UserCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BotaoPadrao from "../../components/main/Botao";
import Link from "next/link";
import BackButton from "@/app/components/main/BackButton";


export default function Home() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header text="Home" />
      <div className="ml-9 mt-9 text-lg text-[#00a0fd] w-self">
            Olá Gabriel, o que deseja fazer hoje?
      </div>
      <div className="static flex flex-col justify-center items-center w-full space-y-20 gap-5">
        <div className="flex items-center gap-5">
          <img
            src="../Images/fallen.jpg"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%'
            }}
          />
          <UserInfoCard
            name="Gabriel Toledo"
            cpf="444.765.678-98"
            email="professor@fallenstore.com"
          />
        </div>
        <div className="gap-2 w-self justify-center items-center flex flex-col relative">
          <Link href="/pages/minhasbikes"className="w-full"><BotaoPadrao text="Minhas Bicicletas"/></Link>
          <Link href="/pages/vistoria"className="w-full"><BotaoPadrao text="Vistorias"/></Link>
          <BotaoPadrao text="Financeiro" />
          <BotaoPadrao text="Fale Conosco FAQ" />
        </div>
       <Link href="/"><BackButton/></Link>
      </div>
      <Footer />
    </main>
  )
}