'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface LinkButtonProps {
  href: string;
  version: 'v1' | 'v2';
  children: React.ReactNode;
}

function LinkButton({ href, version, children }: LinkButtonProps) {
  const [isActive, setIsActive] = useState<Boolean>(false);
  const baseClasses =
    'inline-flex items-center justify-center transition-colors h-10 rounded-[0.1875rem] uppercase font-bold p-2  ';
  let specificClasses = '';

  if (version === 'v1') {
    specificClasses = isActive
      ? 'border-orange-500 border-2 text-orange-500 hover:bg-[#f7f7f7]'
      : 'border-[#009ed9] border-2 text-[#009ed9] hover:bg-[#f7f7f7]';
  } else if (version === 'v2') {
    specificClasses = 'bg-[#009ed9] text-white  w-full hover:bg-[#00b1f3]';
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return version === 'v1' ? (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${specificClasses}`}
    >
      {children}
    </button>
  ) : (
    <Link href={href} className={`${baseClasses}  ${specificClasses}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
