import Image from "next/image";

import Container from "@/components/Container"

export default function Card() {
    return (
        <section className="relative before:w-full before:h-2/4 before:absolute before:bottom-0 before:left-0 before:z-10">
        <div className="max-w-[1000px] text-white w-full bg-[#6369E7] pt-8 pb-20 px-10 rounded-tr-[32px] rounded-br-[32px] relative z-20 sm:pb-8">
          <h5 className="font-normal text-4xl sm:text-3xl text-center mb-8 sm:mb-4">Ficou com alguma dúvida?</h5>
          <p className="font-light text-2xl sm:text-lg sm:text-center">Mande um e-mail para <a className="font-medium" href="mailto:secretaria@pibpp.com.br" target="_blank">secretaria@pibpp.com.br</a>, e lhe responderemos assim que possível. A secretaria fica aberta todos os dias, das 7h30 até as 17h.</p>
        </div>
      </section>
    );
}