"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import s from "./TopControls.module.scss";
import {
  MdOutlineClose,
  MdOutlineKeyboardArrowDown,
  MdMoreHoriz,
  MdArrowBack,
} from "react-icons/md";

export default function TopControls() {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const handleClose = () => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    } else {
      window.close();
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={s.topControls}>
      <button
        className={`${s.closeButton} ${!isHomePage ? s.backButton : ""}`}
        onClick={isHomePage ? handleClose : handleBack}
      >
        {isHomePage ? <MdOutlineClose /> : <MdArrowBack />}
        <span>{isHomePage ? "Закрыть" : "Назад"}</span>
      </button>
    </div>
  );
}
