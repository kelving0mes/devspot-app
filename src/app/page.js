import Button1 from "./components/button";
import Header from "./components/header/Header";


export default function Home() {
  return (
    <>
      <Header text="Home" />
      <Button1 width="120px" height="40px" texto="Minhas Bicicletas" />
      <Button1 width="150px" height="50px" texto="Vistorias" />
      <Button1 width="100px" height="30px" texto="Fale Conosco FAQ" />
    </>
  )
}
