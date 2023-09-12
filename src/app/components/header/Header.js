import Logo from "./Logo"

export default function Header(props) {
   return (
      <>
         <div className="w-full h-7 justify-between inline-flex bg-[#35363a]">
            <Logo/>
            <div className="flex flex-row mr-4">
               <img
                  src="https://file.rendit.io/n/pShussQGcDIhAOtycBli.svg"
               />
            </div>
         </div>
         <div className="w-full h-20 relative">
            <div className="w-full h-20 left-0 top-0 absolute bg-[#00a0fd]">
               <div className="flex items-center justify-center h-full text-[#ececec] text-3xl tracking-widest">{props.text}</div>
            </div>
         </div>
      </>
   )
}

export function HeaderLogin() {
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
      </>
   )
}
