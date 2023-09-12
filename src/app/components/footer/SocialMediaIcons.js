import Image from "next/image";

export default function SocialMediaIcons(){
    return(
        <div
            className="flex flex-row gap-2 ml-5 items-start"
            id="ICONBUTTONSRoot"
        >
            <Image
                src="/images/twitter.png" alt="ícone twitter"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"
            />
            <Image
                src="/images/facebook.png" alt="ícone facebook"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"
            />
            <Image
                src="/images/linkedin.png" alt="ícone linkedin"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"
            />
            <a href="https://github.com/kelving0mes/devspot-app" target="_blank" rel="noopener noreferrer">
                <Image src="/images/github.png" alt="ícone github" 
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"/>
            </a>
            <Image
                src="/images/instagram.png" alt="ícone Instagram"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"
            />
            <a href="https://www.youtube.com/@DevSpot23" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.png" alt="ícone YouTube" 
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"/>
            </a>
        </div>

    )
}