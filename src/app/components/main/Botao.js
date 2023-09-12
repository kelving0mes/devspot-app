export default function BotaoPadrao(props){
  return(
    <button class="w-full bg-[#00a0fd] hover:bg-[#0046c0] text-[#ececec] font-bold py-2 px-4 rounded">
      {props.text}
    </button>
  )
}