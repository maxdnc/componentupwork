import BottomCard from './BottomCard';
import TopCard from './TopCard';
import ImageCard from './ImageCard';

export default function Card() {
  return (
    <div className="bg-white shadow-lg border text-[0.9375rem] font-semibold flex flex-col gap-1.5 overflow-hidden rounded w-full max-w-[662px] md:relative ">
      <div className="grid auto-rows-max grid-flow-row gap-2 p-4 sm:p-0 sm:flex sm:flex-col md:grid md:grid-cols-3 md:grid-flow-col  md:auto-cols-fr ">
        <div className="md:row-span-2 w-[75px] sm:w-full">
          <ImageCard />
        </div>

        <div className="md:col-span-2">
          <TopCard />
        </div>
        <div className="col-span-2 md:absolute md:bottom-0 md:right-0 md:p-4 md:w-1/2">
          <BottomCard />
        </div>
      </div>
    </div>
  );
}
