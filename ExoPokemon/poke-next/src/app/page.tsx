import Img from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="pt-[10%] flex items-center justify-center z-[2000]">
      <div className="bg-grey-line-ambient bg-opacity-35 rounded-lg z-[2] p-5 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <Img
            src="/shade-3D-ball.svg"
            width="800"
            height="800"
            alt=""
            className="w-[8rem] h-[8rem]"
          />
          <span >
            Exo Pokemon on next
          </span>
        </div>
        <div >
          <Link
            href="/client"
          >
            Client
          </Link>
          <Link
            href="/server"
          >
            Server
          </Link>
        </div>
      </div>
    </div>
  );
}
