import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
    return (
        <div className="flex flex-col mt-auto justify-center pl-4 w-full h-24 bg-[#35363a]">
            <SocialMediaIcons />
                <div className="flex flex-col py-2 text-xs font-['Noto_Sans'] text-[#ececec] pl-5">
                    © 2023 DevSpot, Startup
                </div>
        </div>
    )
}