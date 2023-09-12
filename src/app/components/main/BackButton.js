import Image from "next/image";

export default function(){
    return(
        <button className="w-self flex flex-row text-[#35363a] font-bold py-2 px-4 rounded">
            <div
                className="bg-[#00a0fd] rounded-full bg-cover bg-50%_50% bg-blend-normal 
                bg-no-repeat flex justify-center mb-1 w-8 shrink-0 h-8 items-center"
                id="Ellipse"
            >
                <Image
                    src="/images/arrow.png" alt="ícone ilustrativo seta"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-auto h-auto"
                />
            </div>
            <div className="bg-[#ececec] hover:bg-[#00a0fd] flex flex-col mt-1 w-20 items-center rounded-[20px]">
                <div className="text-center font-['Noto_Sans']">Voltar</div>
            </div>
        </button>
    )
}