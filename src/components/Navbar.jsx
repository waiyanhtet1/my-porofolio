import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center justify-between border-b-2 border-red p-3 text-white text-md">
      {/* left side */}
      <div className="flex items-center gap-2 ">
        <p className="flex items-center gap-2">
          <ion-icon name="mail-outline"></ion-icon>
          <span>waiyanhtet1661390@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <ion-icon name="call-outline"></ion-icon>
          <span>09 787 575 012, 09 420 156 224</span>
        </p>
      </div>
      {/* right side */}
      <a
        href="https://github.com/waiyanhtet1"
        className="cursor-pointer hover:opacity-30"
      >
        <ion-icon name="logo-github" size="large"></ion-icon>
      </a>
    </nav>
  );
};

export default Navbar;
