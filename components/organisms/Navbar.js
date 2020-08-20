import Link from "next/link";
import { useRouter } from "next/router";

import ItemNav from "../molecules/ItemNav";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex justify-around">
      <Link as="/" href="/">
        <a>
          <ItemNav
            label="Home"
            icon="Home"
            activelink={`${
              router.pathname === "/" ? "text-teal-400" : "text-gray-500"
            }`}
          />
        </a>
      </Link>
      <Link as="/product" href="/product">
        <a>
          <ItemNav
            label="Product"
            icon="Product"
            activelink={`${
              router.pathname === "/product" ? "text-teal-400" : "text-gray-500"
            }`}
          />
        </a>
      </Link>
      <Link as="/partner" href="/partner">
        <a>
          <ItemNav
            label="Partner"
            icon="Partner"
            activelink={`${
              router.pathname === "/partner" ? "text-teal-400" : "text-gray-500"
            }`}
          />
        </a>
      </Link>
      <Link as="/inbox" href="/inbox">
        <a>
          <ItemNav
            label="Inbox"
            icon="Inbox"
            activelink={`${
              router.pathname === "/inbox" ? "text-teal-400" : "text-gray-500"
            }`}
          />
        </a>
      </Link>
      <Link as="/account" href="/account">
        <a>
          <ItemNav
            label="Account"
            icon="Account"
            activelink={`${
              router.pathname === "/account" ? "text-teal-400" : "text-gray-500"
            }`}
          />
        </a>
      </Link>

      <style jsx>{`
        .active:after {
          content: " (current page)";
          color: rgba(79, 209, 197, 0.8);
        }
      `}</style>
    </div>
  );
}
