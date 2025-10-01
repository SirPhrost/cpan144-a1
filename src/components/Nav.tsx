import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

export default function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className="nav">
      {links.map(l => (
        <Link key={l.href} href={l.href} className={`navlink ${pathname === l.href ? "active" : ""}`}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
