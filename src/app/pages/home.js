import UserInfoCard from "../components/main/UserCard";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BotaoPadrao from "../components/main/button";


export default function Home() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header text="Home"/>
      <div className="flex mt-9 justify-center"> 
        <div className="text-center text-3xl font-['Noto_Sans'] tracking-[3] text-[#0984e3] w-min mb-4">
          Olá
        </div>
      </div>
      <div className="flex mt-4 justify-center"> 
        <div className="ml-auto mr-4 flex items-center"> 
          <img 
            src="/fallen.jpg" 
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
      </div>
      <BotaoPadrao width="120px" height="40px" text="Minhas Bicicletas" />
      <BotaoPadrao width="150px" height="50px" text="Vistorias" />
      <BotaoPadrao width="150px" height="50px" text="Financeiro" />
      <BotaoPadrao width="100px" height="30px" text="Fale Conosco FAQ" />
      <Footer/>
    </main>
  )
}