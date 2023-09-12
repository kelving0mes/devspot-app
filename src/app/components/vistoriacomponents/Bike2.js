import Image from "next/image";

export default function Bike2() {
  return (
    <div className="flex flex-col gap-1n">
      <div className="w-40 h-25 rounded-sm shadow border border-black">
        <Image
          src="/images/bike4.jpg" alt="Ilustração bicicleta"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto" />
      </div>
      <div className="w-32 h-5 text-[#35363a] text-base">Scott Spark 970</div>
    </div>
  )
}