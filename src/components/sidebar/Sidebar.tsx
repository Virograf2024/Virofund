import React from "react";
import Image from "next/image";

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
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-content-child">
          {items.map((item, index) => (
            <a key={index} href={`${item.href}`}>
              <div className="sidebar-item nav-item" onClick={cancel}>
                {item.label}
              </div>
            </a>
          ))}
        </div>
        <div className="sidebar-item product">View Products</div>
      </div>
      <Image
        src="/cancel-svgrepo-com.svg"
        onClick={cancel}
        alt="cancel"
        width={30}
        height={30}
      />
    </div>
  );
}

export default Sidebar;
