export const primaryNavigation = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "Company" },
  { href: "/insights", label: "Insights" },
] as const;

export function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
