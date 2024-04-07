import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
