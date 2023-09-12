import Button1 from "./button";
import Link from 'next/link';

export default function LoginApp(){
    return(
        <div className="flex flex-col justify-center gap-5 w-full min-h-screen items-center bg-[#35363a]">
            <div className="flex flex-col gap-5 width:auto items-start text-3xl font-['Noto_Sans'] font-semibold tracking-[1.6] text-white">
                Bem vindo!
            </div>
            <div className="w-1/2 flex flex-col gap-1 justify-center items-start">
                <div
                    className="bg-[#ececec] self-stretch flex flex-col justify-center mb-3 pl-3 h-10 items-start rounded-lg"
                    id="EMAIL"
                >
                    <div className="text-center text-sm font-['Noto_Sans'] text-[#35363a]">
                        Seu E-mail
                    </div>
                </div>
                <div
                    className="bg-[#ececec] self-stretch flex flex-col justify-center mb-3 pl-3 h-10 items-start rounded-lg"
                    id="PASSWORD1"
                >
                    <div className="text-center text-sm font-['Noto_Sans'] text-[#35363a]">
                        Sua Senha
                    </div>
                </div>
                <div className="flex flex-row mb-2 gap-1 w-1/2 items-start">
                    <input
                        type="checkbox"
                        class="form-checkbox text-[#0984e3] h-5 w-5 mr-2"
                        id="myCheckbox"
                    />
                    <label for="myCheckbox" class="font-['Noto_Sans'] font-semibold text-white mt-px">Lembrar de mim</label>
                </div>
                <Link href="/pages/home"> <Button1 texto="Login"/></Link>
                <div className="self-stretch relative flex flex-col mb-1 pb-10 items-start">
                    
                    <div className="text-xs font-['Noto_Sans'] underline font-semibold text-[#0984e3] relative w-1/2">
                        Esqueceu sua senha?
                    </div>
                </div>
                <div className="text-xs font-['Noto_Sans'] font-semibold text-white">
                    Não tem uma conta?{" "}
                    <div className="underline text-[#0984e3] contents">Increver</div>
                </div>
                <div className="text-xs font-['Noto_Sans'] font-semibold text-white">
                    Fazer login com a{" "}
                    <div className="underline text-[#0984e3] contents">Porto Seguro</div>
                </div>
            </div>
        </div>
    )
}