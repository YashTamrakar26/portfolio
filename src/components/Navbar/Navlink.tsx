"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type navLinkProps = {
    link: {
        url: string,
        title: string
    }
}

const NavLink = ({ link }: navLinkProps) => {
    const pathName = usePathname();

    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white p-2"}`} href={link.url}>
            {link.title}
        </Link>
    );
};

export default NavLink;