import Image from "next/image"

import Container from "@/components/Container"
import Button from "@/components/Button"

export default function Page() {
  return (
    <>
      <Container>
        <section className="pt-10 md:pt-0 mb-24 md:mb-10">
          <Image
            src="/img/blog.jpg"
            alt="Lorem ipsum"
            width={1368}
            height={670}
            className="object-cover w-full"
          ></Image>
          <div className="flex flex-col items-center">
            <h1 className="text-center mt-6 font-light text-6xl md:mt-4 md:text-2xl">Lorem Ipsum</h1>
            <p className="text-center mt-6 mb-10 md:mb-6 font-light text-xl md:text-base md:mt-2">Donec placerat felis ut enim vehicula, eu mollis mi sollicitudin. Fusce ultricies orci ex, non gravida est ullamcorper et. Integer ex lacus, volutpat vel ante quis, sollicitudin pharetra nulla. Mauris sit amet metus sit amet purus consequat aliquet. Pellentesque tempor turpis quis imperdiet suscipit. Donec tincidunt rutrum egestas. Pellentesque ut interdum nisi, eu hendrerit diam. Donec luctus aliquam ante. Nulla eu aliquam odio. Nunc id feugiat ante. In commodo auctor metus sed congue.</p>
            <Button href="/blog/artigo/slug">Ver post</Button>
          </div>
        </section>

        <ul className="flex flex-col gap-24 md:gap-12">
          {Array(4).fill().map((_, index) => (
            <li className="flex gap-16 md:block" key={index}>
              <div>
                <h6 className="uppercase font-light text-3xl after:w-10 after:h-px after:bg-[#D9D9D9] after:block after:mt-1 after:mb-3 after:block">FEV</h6>
                <h3 className="font-light text-7xl">22</h3>
              </div>
              <Image
                src="/img/article.jpg"
                alt="Lorem ipsum"
                width={480}
                height={380}
                className="object-cover w-full max-w-[500px] min-w-[500px] md:min-w-0 md:max-w-full h-[430px] sm:h-[260px] md:my-6"
              ></Image>
              <aside className="max-w-[500px] w-full">
                <h2 className="mb-8 font-medium text-5xl sm:text-3xl sm:mb-4">Lorem Ipsum</h2>
                <p className="mb-6 pb-6 border-b border-[#D9D9D9] font-light text-xl sm:text-lg sm:mb-4 sm:pb-4">Donec placerat felis ut enim vehicula, eu mollis mi sollicitudin. Fusce ultricies orci ex, non gravida est ullamcorper et. Integer ex lacus, volutpat vel ante quis, sollicitudin pharetra nulla. Mauris sit amet metus sit amet purus consequat aliquet. <br /><br /> Pellentesque tempor turpis quis imperdiet suscipit. Donec tincidunt rutrum egestas...</p>
                <a className="flex items-center gap-2.5 font-light text-xl sm:text-lg" href="/blog/artigo/slug">
                  Ver Post
                  <Image
                    src="/img/arrow.svg"
                    alt="Seta"
                    width={20}
                    height={16}
                  ></Image>
                </a>
              </aside>
            </li>
          ))}
        </ul>

        <footer className="flex items-center justify-center gap-8 mt-20">
          {Array(3).fill().map((_, index) => (
            <button className="text-[#6369E7] font-bold text-2xl" type="button" key={index}>{index + 1}</button>
          ))}
          <button className="text-[#6369E7] font-bold text-2xl" type="button">...</button>
        </footer>
      </Container>
    </>
  )
}