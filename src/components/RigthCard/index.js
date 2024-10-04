import Image from "next/image";

import Container from "@/components/Container"

export default function RigthCardCard() {
    return (
      <section className="relative before:w-full before:h-2/4 before:absolute before:bottom-0 before:left-0 before:z-10 transform -scale-x-100 my-20">
      <div className="max-w-[1000px] text-white w-full bg-[#6369E7] pt-8 pb-20 px-10 rounded-tr-[32px] rounded-br-[32px] relative z-20 sm:pb-8">
        <h5 className="font-normal text-4xl sm:text-3xl  mb-8 sm:mb-4 transform -scale-x-100">"Deus não quer algo de nós."<br></br> Ele simplesmente nos quer!</h5>
        <p className="font-light text-2xl sm:text-lg sm:text-center transform -scale-x-100"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </section>
    );
}