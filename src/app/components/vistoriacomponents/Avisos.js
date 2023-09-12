export default function Avisos(){
    return(
        <div className="text-justify text-[#35363a] text-xs">
            <br></br>
            <br></br>
            <div className="flex flex-col gap-5">
                <ul class="list-disc text-left ml-10 ">
                    <li>Você precisará liberar o acesso do app à sua camera</li><br />
                    <br /><li>Realize o processo em um local iluminado</li><br />
                    <br /><li>Você precisará apenas apontar o seu celular para a peça requisitada</li>
                </ul>
                <div className="text-center mr-10 text-xs font-bold">Selecione a bike que deseja realizar a vistoria</div>
            </div>
        </div>
    )
}