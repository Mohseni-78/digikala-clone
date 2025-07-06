import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/shared/components/Header/ThemeToggle';

const AccountActions = () => {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      {/* دکمه ورود */}
      <Link
        href="/login"
        className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition"
      >
        ورود / ثبت‌نام
      </Link>

      {/* آیکن سبد خرید */}
      <Link href="/cart" className="relative group">
        <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
          ۰
        </span>
      </Link>
    </div>
  );
};

export default AccountActions;
