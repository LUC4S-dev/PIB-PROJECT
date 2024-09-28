import Image from "next/image";

import Container from "@/components/Container"

export default function Footer() {
    return (
        <footer className="mt-24">
            <section className="relative before:w-full before:h-2/4 before:bg-[#6369E7] before:absolute before:bottom-0 before:left-0 before:z-10">
                <div className="max-w-[1000px] w-full bg-[#FFF171] pt-8 pb-20 px-10 rounded-tr-[32px] rounded-br-[32px] relative z-20 sm:pb-8">
                    <h5 className="font-normal text-4xl sm:text-3xl text-center mb-8 sm:mb-4">Ficou com alguma dúvida?</h5>
                    <p className="font-light text-2xl sm:text-lg sm:text-center">Mande um e-mail para <a className="font-medium" href="mailto:secretaria@pibpp.com.br" target="_blank">secretaria@pibpp.com.br</a>, e lhe responderemos assim que possível. A secretaria fica aberta todos os dias, das 7h30 até as 17h.</p>
                </div>
            </section>
            <section className="bg-[#6369E7]">
                <Container>
                    <div className="flex justify-between pt-16 pb-[100px] md:flex-col md:items-center md:gap-8 md:pb-12 md:pt-12">
                        <div className="max-w-[320px] w-full">
                            <h6 className="sm:text-center text-white font-bold text-3xl sm:text-2xl pl-3 pb-4 border-b-2 border-white">Endereço</h6>
                            <p className="sm:text-center text-white font-normal text-lg mt-6">
                                Avenida Manoel Goulart, 503 - Centro
                                <br />
                                Presidente Prudente, São Paulo
                            </p>
                        </div>
                        <div className="max-w-[320px] w-full">
                            <h6 className="sm:text-center text-white font-bold text-3xl sm:text-2xl pl-3 pb-4 border-b-2 border-white">Redes Sociais</h6>
                            <div className="flex justify-center items-center gap-10 sm:gap-6 mt-5">
                                <a href="##" target="_blank">
                                    <img className="sm:max-w-[48px]" src="/img/instagram.png" alt="Instagram" />
                                </a>
                                <a href="##" target="_blank">
                                    <img className="sm:max-w-[56px]" src="/img/facebook.png" alt="Facebook" />
                                </a>
                                <a href="##" target="_blank">
                                    <img className="sm:max-w-[48px]" src="/img/youtube.png" alt="YouTube" />
                                </a>
                            </div>
                        </div>
                        <div className="max-w-[320px] w-full">
                            <h6 className="sm:text-center text-white font-bold text-3xl sm:text-2xl pl-3 pb-4 border-b-2 border-white">Endereço</h6>
                            <p className="sm:text-center text-white font-normal text-lg mt-6">
                                <strong>Telefone:</strong> 18 3223-5600
                                <br />
                                Presidente Prudente, São Paulo
                            </p>
                        </div>
                    </div>
                    <p className="py-8 md:py-6 md:text-sm text-center text-white font-normal text-lg border-t border-white">Primeira Igreja Batista de Presidente Prudente ® 2024- Todos os Direitos Reservados</p>
                </Container>
            </section>
        </footer>
    );
}