import React from "react";
import { useState } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { HiArrowLeft, HiHome, HiMenu } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbCategoryFilled, TbPigMoney } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  { name: "Dashboard", href: "/", icon: HiHome },
  { name: "Transaction", href: "/transaction", icon: BiMoneyWithdraw },
  { name: "Categories", href: "/categories", icon: TbCategoryFilled },
  { name: "Analytics", href: "/analytics", icon: FaRegChartBar },
  { name: "Configuration", href: "/configuration", icon: IoSettingsSharp },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-(--light-cyan)">
      {/* Mobile Nav */}
      <section
        className={`fixed z-10 inset-0 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed inset-0 bg-slate-100 opacity-50`}
          onClick={() => {
            SetIsOpen(false);
          }}
        />
        <nav className="fixed inset-y-0 w-60 z-10 bg-(--federal-blue) p-4">
          <div className="flex items-center gap-4 text-2xl mb-8 text-white">
            <div className="flex items-center space-x-2">
              <h3>FinanceTrack</h3>
              <TbPigMoney />
            </div>
            <button className="p-1 bg-white rounded-lg flex items-center justify-center"
            onClick={() => {SetIsOpen(false)}}>
              <HiArrowLeft className="text-(--federal-blue)" />
            </button>
          </div>
          <ul className="min-h-full flex flex-col gap-4">
            {links.map((link, i) => {
              const isActive = link.href === location.pathname;

              return (
                <li
                  key={i}
                  onClick={() => {SetIsOpen(false)}}
                  className={`px-4 py-2 text-(--light-cyan) ${
                    isActive
                      ? "text-(--light-cyans) bg-(--blue-green)  rounded-xl"
                      : "hover:text-(--federal-blue) hover:bg-(--light-cyan) rounded-2xl transition-all duration-500"
                  }`}
                >
                  <Link
                    to={link.href}
                    className={`text-lg flex items-center space-x-2`}
                  >
                    <link.icon />
                    <p>{link.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      {/* Desktop Nav */}
      <section className="hidden lg:w-60 lg:mx-auto lg:fixed lg:shadow-slate-200 lg:inset-y-0 lg:p-4 lg:block lg:bg-(--federal-blue)">
        <nav className="h-full w-full flex flex-col">
          <div className="flex items-center justify-between text-2xl mb-8">
            <h3 className="text-(--light-cyan) font-bold font-mono">
              FinanceTrack
            </h3>
            <TbPigMoney className="text-green-600" />
          </div>
          <ul className="min-h-full flex flex-col gap-4">
            {links.map((link, i) => {
              const isActive = link.href === location.pathname;

              return (
                <li
                  key={i}
                  className={`px-4 py-2 text-(--light-cyan) ${
                    isActive
                      ? "text-(--light-cyan) bg-(--blue-green)  rounded-xl"
                      : "hover:text-(--federal-blue) hover:bg-(--light-cyan) rounded-2xl"
                  }`}
                >
                  <Link
                    to={link.href}
                    className={`text-base flex items-center space-x-2`}
                  >
                    <link.icon />
                    <p>{link.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      {/* Visualización */}
      <div className="lg:pl-64">
        {/* Header Mobile */}
        <div
          className={`fixed inset-x-0 h-16 shadow-2xl z-10 flex items-center justify-between p-4 text-2xl bg-(--light-cyan) ${
            isOpen ? "hidden" : "flex"
          } lg:hidden`}
        >
          <button
            className="bg-(--federal-blue) p-1 rounded-lg text-white"
            onClick={() => {
              SetIsOpen(true);
            }}
          >
            <HiMenu />
          </button>
          <div className="flex items-center justify-center gap-2 w-full text-(--federal-blue) font-bold">
            <h3 className="">FinanceTrack</h3>
            <TbPigMoney className="text-4xl p-1" />
          </div>
        </div>

        {/* Main */}
        <main className="mx-auto max-w-7xl px-4 pt-20 md:px-6 lg:p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
