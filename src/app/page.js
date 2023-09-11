import UserInfoCard from "./components/main/UserCard";
import Button1 from "./components//main/button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header text="Home" />
      <div className="flex mt-9">
        <div style={{ marginTop: '90px' }} className="ml-4"> 
          <UserInfoCard
            name="Gabriel Toledo"
            cpf="444.765.678-98"
            email="professor@fallenstore.com"
          />
        </div>
      </div>
      <Button1 width="120px" height="40px" texto="Minhas Bicicletas" />
      <Button1 width="150px" height="50px" texto="Vistorias" />
      <Button1 width="100px" height="30px" texto="Fale Conosco FAQ" />
      <Footer/>
    </main>
  )
}
