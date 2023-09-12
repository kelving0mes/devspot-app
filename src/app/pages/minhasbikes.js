import UserInfoCard from "./components/main/UserCard";
import Button1 from "./components//main/button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Link from "next/link";

export default function MinhasBikes() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Header text="Minhas bicicletas" />
      <table>
  <thead>
    <tr>
      <th>Imagens</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="/images/bike1.jpg" width="170px" height="110px" quality={100} alt="Ilustração bicicleta"/></th>
      <td>Vistoria Concluida</td>
    </tr>
    <tr>
      <th scope="row"> <img src="/images/bike2.jpg" width="170px" height="110px"quality={100} alt="Ilustração bicicleta"/></th>
      <td>Vistorias em análise</td>
    </tr>
   <tr>
      <th scope="row"><img src="/images/bike3.jpg" width="170px" height="110px"quality={100} alt="Ilustração bicicleta"/></th>
      <td>Não Vistoriada</td>
    </tr>
   <tr>
      <th scope="row"><img src="/images/bike4.jpg"width="170px" height="110px" quality={100} alt="Ilustração bicicleta"/></th>
      <td>Não Vistoriada</td>
    </tr>
  </tbody>
</table>  
</main>
  )
}
