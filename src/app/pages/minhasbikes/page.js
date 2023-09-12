import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import BackButton from "@/app/components/main/BackButton";
import Image from "next/image";
import Link from "next/link";

export default function MinhasBikes() {
  return (
    <main className="bg-white justify-center flex items-center flex-col w-full min-h-screen">
      <Header text="Minhas bicicletas" />
      <div className="container mx-auto p-4 justify-center gap-5 flex items-center flex-col">
        <table className="table-auto text-[#35363a]">
          <thead>
            <tr>
              <th className="px-4 py-2">Bicicleta</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <Image
                  src="/images/bike1.jpg" alt="Ilustração bicicleta"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </td>
              <td className="px-4 py-2 text-green-600">Vistoria Concluída</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <Image
                  src="/images/bike2.jpg" alt="Ilustração bicicleta"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </td>
              <td className="px-4 py-2 text-yellow-600">Vistorias em análise</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <Image
                  src="/images/bike3.jpg" alt="Ilustração bicicleta"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </td>
              <td className="px-4 py-2 text-red-600">Não Vistoriada</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <Image
                  src="/images/bike4.jpg" alt="Ilustração bicicleta"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </td>
              <td className="px-4 py-2 text-red-600">Não Vistoriada</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href="/pages/home"><BackButton /></Link>
      <Footer />
    </main>
  )
}
