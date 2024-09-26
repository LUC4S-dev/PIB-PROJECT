import Image from "next/image"

import Container from "@/components/Container"
import Button from "@/components/Button"

export default function Page() {
  return (
    <section>
      <Container>
        <Image
          src="/img/blog.jpg"
          alt="Lorem ipsum"
          width={1368}
          height={670}
        ></Image>
        <h1>Lorem Ipsum</h1>
        <p>Donec placerat felis ut enim vehicula, eu mollis mi sollicitudin. Fusce ultricies orci ex, non gravida est ullamcorper et. Integer ex lacus, volutpat vel ante quis, sollicitudin pharetra nulla. Mauris sit amet metus sit amet purus consequat aliquet. Pellentesque tempor turpis quis imperdiet suscipit. Donec tincidunt rutrum egestas. Pellentesque ut interdum nisi, eu hendrerit diam. Donec luctus aliquam ante. Nulla eu aliquam odio. Nunc id feugiat ante. In commodo auctor metus sed congue.</p>
        <Button href="/blog/artigo/slug">Ver post</Button>
      </Container>
    </section>
  )
}