import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center pl-4 w-full h-24 items-baseline bg-[#35363a]">
            <SocialMediaIcons />
            <div className="flex flex-col py-2">
                <div className="text-xs font-['Noto_Sans'] text-[#ececec] ml-14">
                    © 2023 DevSpot, Startup
                </div>
            </div>
        </div>
    )
}