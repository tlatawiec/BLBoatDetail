import Image from 'next/image'

export default function Banner({ img, title }) {
  return (
    <div className="relative">
      <div className="h-20 items-center justify-center m-h-3 overflow-hidden">
        <Image
          src={img}
          alt="Banner picture showing a detailed boat"
          fit='cover'
        />
        <h2 className="text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold sm:text-3xl mx-auto">{title}</h2>
      </div>
    </div>
  );
}