import Image from 'next/image';
import SmallText from '../SmallText';

export default function TopCard() {
  return (
    <div className="flex gap-4 sm:flex-col p-2 pb-0 sm:pb-4 sm:p-4 sm:pt-2 sm:row-span-2 flex-grow md:pt-3">
      <div className="flex flex-col gap-2 sm:gap-1">
        <h3 className="leading-5">Shop Sambas from £75 at adidas</h3>
        <SmallText>120 used today</SmallText>
      </div>
    </div>
  );
}
