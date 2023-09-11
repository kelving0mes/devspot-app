import React from 'react';

const Button1 = ({ texto }) => {
  return (
    <div className="flex flex-col w-full" id="NewRootRoot">
      <div className="flex items-center justify-center mt-8">
        <button
          className="border-solid shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0984e3] flex flex-col items-center pt-0.5 pb-1 border-black border rounded-lg"
          id="Button1"
          style={{ width: '100px', height: '30px', overflow: 'hidden' }}
        >
          <div className="text-base font-['Noto_Sans'] font-semibold tracking-[1.5] text-white">
            {texto}
          </div>
        </button>
      </div> 
    </div>
  );
};

export default Button1;
