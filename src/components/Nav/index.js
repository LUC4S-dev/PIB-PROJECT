import Image from "next/image"

import Button from "@/components/Button"

export default function Nav() {
    return (
        <nav>
            <Image
                src="/img/logo.png"
                alt="PIBPP"
                width={132}
                height={89}
            ></Image>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/estudos">Estudos</a></li>
                <li><a href="/departamentos">Departamentos</a></li>
            </ul>
            <Button href="/login">Fazer login</Button>
        </nav>
    )
}