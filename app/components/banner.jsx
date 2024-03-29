import Image from 'next/image'

export default function Banner({img , title}) {

  return (

    <div class="w-1/2 p-4 flex flex-col relative">
      <div class="h-20 items-center justify-center m-h-3 overflow-hidden">
        <Image
          src={img}
          alt="Picture of detailed boat"
          fit='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <h2 class="text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-4xl mx-auto">{ title }</h2>
      </div>
    </div>
  )
}