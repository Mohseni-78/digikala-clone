import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-red-600 font-extrabold text-xl hover:opacity-80 transition"
    >
      دیجـیـکالا
    </Link>
  );
};

export default Logo;
