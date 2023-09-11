import Logo from "./Logo";

export default function Header() {
   return (
      <>
         <div className="flex flex-row justify-between w-full items-start" id="WrapRoot"></div>
            <Logo />
            <div className="flex flex-row justify-between w-full items-start">
               <img
                  src="https://file.rendit.io/n/pShussQGcDIhAOtycBli.svg"
                  className="w-8 shrink-0"
                  id="Nav"
               />
            </div>
            </>
   )
}



  

