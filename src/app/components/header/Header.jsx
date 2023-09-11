import Logo from "./Logo";

export default function Header(props) {
   return (
      <>
         <div className="w-full h-7 justify-between inline-flex bg-[#35363a]">
            <Logo />
            <div className="flex flex-row mr-4">
               <img
                  src="https://file.rendit.io/n/pShussQGcDIhAOtycBli.svg"
               />
            </div>
         </div>
         <div className="w-96 h-20 relative">
            <div className="w-96 h-20 left-0 top-0 absolute bg-sky-600" />
            <div className="w-28 left-[154px] top-[16px] absolute text-center text-white text-3xl font-normal tracking-widest">{props.text}</div>
         </div>
      </>
   )
}
  