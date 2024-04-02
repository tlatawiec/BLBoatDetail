import Image from 'next/image'
import star from '../../images/star.png'

export default function FiveStar() {

  return (
    <div className='flex justify-center mt-5'>
      <Image
        src={star}
        height={20}
        width={20}
      />
      <Image
        src={star}
        height={20}
        width={20}
      />
      <Image
        src={star}
        height={20}
        width={20}
      />
      <Image
        src={star}
        height={20}
        width={20}
      />
      <Image
        src={star}
        height={20}
        width={20}
      />
    </div>
  )
}