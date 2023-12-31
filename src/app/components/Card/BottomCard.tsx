import Link from 'next/link';
import LinkButton from '../LinkPrimary';
import SmallText from '../SmallText';

export default function BottomCard() {
  return (
    <div className="flex flex-col gap-2.5  sm:pt-4 sm:gap-1.5 sm:p-4 md:p-0">
      <div className="flex justify-between">
        <SmallText>Ends 15-01-24</SmallText>
        <Link href="/" className="text-gray-400 text-[0.875rem] font-normal">
          <SmallText>View Terms</SmallText>
        </Link>
      </div>

      <div className="flex gap-2.5 ">
        <LinkButton href="/" version="v1">
          <span className="sm:hidden">save</span>
          <span className="hidden sm:inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </span>
        </LinkButton>
        <LinkButton href="/" version="v2">
          <span>view discount</span>
        </LinkButton>
      </div>
    </div>
  );
}
