"use client"

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Estudos', href: '/estudos' },
        { name: 'Departamentos', href: '/departamentos' }
    ];

    return (
        <nav className="py-4 px-6 md:py-3 flex items-center justify-between">
            <a href="/">
                <Image
                    src="/img/logo.png"
                    alt="PIBPP"
                    width={112}
                    height={72}
                    className="md:h-14 md:w-auto"
                />
            </a>
            <div className={`flex items-center flex-[2] md:fixed md:top-20 md:left-0 md:w-full md:bg-white md:pt-4 md:pb-6 md:px-6 md:opacity-0 md:invisible md:flex-col gap-6 md:items-start md:shadow-[0_24px_16px_rgba(0,0,0,.08)] ${open ? "md:!opacity-100 md:!visible" : ""}`}>
                <ul className="flex items-center md:items-start gap-12 flex-[2] px-16 md:px-0 md:flex-col md:gap-6">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a className="font-light text-xl" href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <Button href="/login">Fazer login</Button>
            </div>
            <button
                className="hidden md:flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
                onClick={() => setOpen(!open)}
                type="button"
            >
                {Array(3).fill().map((_, index) => (
                    <span
                        className={
                            `
                                block h-0.5 w-6 bg-[#000000]
                                ${open && index === 0 ? "rotate-45 translate-y-[8px]" : ""}
                                ${open && index === 1 ? "opacity-0" : ""}
                                ${open && index === 2 ? "rotate-[-45deg] translate-y-[-8px]" : ""}
                            `
                        }
                        key={index}
                    ></span>
                ))}
            </button>
        </nav>
    );
}