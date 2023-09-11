import React from 'react';

const UserInfoCard = ({ name, cpf, email }) => {
  return (
    <div className="flex flex-col w-full" id="NewRootRoot">
      <div className="border-solid bg-[#0984e3] flex flex-col gap-4 h-[100px] shrink-0 items-start pt-2 pb-3 px-2 border-black border rounded-lg" style={{ width: '200px' }}>
        <div className="text-sm font-['Noto_Sans'] tracking-[1.5] text-[#e9edf6]">
          {name}
        </div>
        <div className="self-stretch relative flex flex-col justify-end pt-8 items-start ml-px mr-1">
          <div className="text-sm font-['Noto_Sans'] tracking-[1.5] text-[#e9edf6] absolute top-0 left-0 h-10 w-3/5">
            {cpf}
          </div>
          <div className="text-sm font-['Noto_Sans'] tracking-[1.5] text-[#e9edf6] relative">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;

