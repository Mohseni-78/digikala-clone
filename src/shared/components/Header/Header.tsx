'use client';

import Logo from './Logo';
import SearchBox from './SearchBox';
import AccountActions from './AccountActions';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* لوگو */}
        <Logo />

        {/* باکس جستجو */}
        <div className="flex-1 mx-6 max-w-xl">
          <SearchBox />
        </div>

        {/* اکشن‌های سمت راست مثل ورود و سبد خرید */}
        <AccountActions />
      </div>
    </header>
  );
}
