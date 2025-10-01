import Link from "next/link";
import { useRouter } from "next/router";

// list of nav links (path + label)
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

// simple navigation component
export default function Nav() {
  // get current path so we can highlight the active link
  const { pathname } = useRouter();

  return (
    <nav className="nav">
      {links.map(l => (
        // apply "active" class if current page matches link
        <Link
          key={l.href}
          href={l.href}
          className={`navlink ${pathname === l.href ? "active" : ""}`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
