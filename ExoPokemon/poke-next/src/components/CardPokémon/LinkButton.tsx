import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  to: string;
}

export const LinkButton = ({ to, children }: PropsWithChildren<Props>) => {
  return (
    <Link
      href={to}
      draggable={false}
      className="block w-fit relative text-white cursor-pointer bg-red-pure-ball rounded-lg hover:bg-red-primary-ball hover:scale-110"
    >
      <p className="text-center font-bold">
        {children}
      </p>
    </Link>
  );
};
