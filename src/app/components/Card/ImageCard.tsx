import Image from 'next/image';

export default function ImageCard() {
  return (
    <div className="flex-shrink-0  ">
      <Image
        src={'/images/ten_percent.webp'}
        alt="discount reduction"
        width={75}
        height={75}
        quality={100}
        className="bg-gray-900  object-contain sm:hidden  h-[75px] w-[75px]"
      />
      <Image
        src={'/images/ten_percent_medium.webp'}
        alt="discount reduction"
        width={200}
        height={200}
        quality={100}
        className="bg-gray-900 object-contain hidden sm:block sm:h-[125px] sm:w-full md:hidden"
      />
      <Image
        src={'/images/ten_percent_large.webp'}
        alt="discount reduction"
        width={250}
        height={250}
        quality={100}
        className="bg-gray-900 object-contain hidden md:block md:h-[170px] md:w-full"
      />
    </div>
  );
}
