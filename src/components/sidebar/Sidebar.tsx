import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

const items = [
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Wait list",
    href: "#waitlist",
  },
  {
    label: "Contact us",
    href: "#contact",
  },
];

function Sidebar({ cancel }: { cancel: () => void }) {
  return (
    <div 
      className="sidebar" 
      id="mobile-menu"
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile navigation menu"
    >
      <nav className="sidebar-content" role="navigation" aria-label="Mobile navigation">
        <ul className="sidebar-content-child" role="menu">
          {items.map((item, index) => (
            <li key={index} role="none">
              <a 
                href={item.href} 
                className="sidebar-item nav-item" 
                onClick={cancel}
                role="menuitem"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-item">
          <Button isDisabled={true} text="View Product" hasImage={false} />
        </div>
      </nav>
      <button
        onClick={cancel}
        className="sidebar-close"
        aria-label="Close mobile menu"
        type="button"
      >
        <Image
          src="/cancel-svgrepo-com.svg"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default Sidebar;
