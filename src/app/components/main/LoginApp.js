import Link from "next/link";
import BotaoPadrao from "./Botao";

export default function LoginApp(){
    return (
        <div className=" flex flex-col grow justify-center w-full min-h-screen  bg-[#35363a]">
            <div className=" justify-center gap-5 flex items-center flex-col">
                <h1 className="text-center text-[#ececec] text-3xl font-semibold tracking-wider">Bem vindo!</h1>
                <h2 className="text-center text-[#ececec] text-x2 tracking-wider">Estávamos te esperando</h2>
                <div class="w-full max-w-xs">
                    <form class="bg-[#ececec] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-[#35363a] leading-tight" 
                                type="text" placeholder="E-mail"/>
                        </div>
                        <div class="mb-6">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-[#35363a] leading-tight" 
                                type="password" placeholder="Senha"/>
                        </div>
                        <div class="flex flex-col items-center gap-2 justify-between">
                            <Link href="/pages/home" className="w-full" ><BotaoPadrao text="Logar"/></Link>
                            <a class="font-bold text-sm text-[#00a0fd] hover:text-[#0046c0]" href="#">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="text-xs font-bold text-[#ececec]">
                            Não tem uma conta?{" "}
                            <a className="text-xs text-[#00a0fd] hover:text-[#0046c0] contents" href="#"> Inscrever </a>
                        </div>
                        <div className="text-xs font-bold text-[#ececec]">
                            Fazer login com a{" "}
                            <a className="text-xs text-[#00a0fd] hover:text-[#0046c0] contents" href="https://www.portoseguro.com.br/pdc/login" target="_blank"> Porto Seguro </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}