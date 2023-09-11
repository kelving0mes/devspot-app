import UserInfoCard from "./components/UserCard";
import Button1 from "./components/button";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
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
    </>
  )
}
