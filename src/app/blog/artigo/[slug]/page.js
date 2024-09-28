import Image from "next/image"

import Container from "@/components/Container"

export default function Page() {
  return (
    <>
      <h2 className="text-white font-extralight text-7xl bg-[#6369E7] py-4 text-center mb-16 uppercase md:text-3xl md:py-3 md:mb-8">Estudo Expositivo</h2>
      <div className="max-w-[900px] mx-auto w-full px-6">
        <h1 className="text-[#6369E7] text-center font-bold text-5xl sm:text-3xl sm:mb-4 mb-8 leading-[120%]">A Justificação pela Fé: sermões de Charles Spurgeon para a Unijovem</h1>
        <p className="text-center mb-10 sm:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec semper lorem. Donec et nulla purus. Nullam maximus neque enim. Phasellus finibus accumsan sapien sit amet convallis. Suspendisse vel malesuada mi. Nam a nisi eget massa ultricies finibus at in elit. Maecenas fermentum ullamcorper magna, nec placerat ligula interdum ac.</p>
        <div className="flex items-center justify-between mb-4">
          <p className="font-extralight text-sm">
            Por Pedro Neto, jovem da PIBPP
            <br />
            Presidente Prudente, 12h30
          </p>
          <a href={`https://api.whatsapp.com/send?text=https://link.com.br`} target="_blank">
            <img src="/img/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
        <Image
          src="/img/article2.jpg"
          alt="Foto"
          width={1170}
          height={780}
          className="mb-12 sm:mb-6"
        />
        <p className="font-extralight text-xl sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate arcu nec viverra posuere. 
          <br /><br />
          Suspendisse aliquam mollis dolor, vitae varius neque mattis ac. Aenean ut ligula id purus volutpat consectetur ut at nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ornare arcu ac sapien vulputate, sit amet hendrerit erat ornare. Nunc nibh lacus, convallis ut fermentum vitae, convallis ut velit. 
          <br /><br />
          Nunc ac augue sit amet neque euismod mollis in vel dui. Duis tempus ullamcorper quam, sit amet viverra magna consectetur eget. Duis varius congue nunc rutrum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lacinia blandit justo ut auctor. Mauris dictum diam sem. Cras malesuada accumsan est, eget pellentesque metus luctus vitae. Suspendisse tristique facilisis purus vel suscipit. In bibendum elit in nibh elementum, eget cursus metus convallis. Sed efficitur accumsan libero, vel ultricies turpis.
          <br /><br />
          Quisque tincidunt ornare lobortis. Nullam et diam consequat, lacinia nisi sit amet, efficitur turpis. Suspendisse sit amet dui placerat, tincidunt justo vel, faucibus orci. Aliquam quis purus ligula. Proin dictum justo non mauris facilisis ultrices. Vivamus vitae libero eu lacus tincidunt molestie. Proin dictum arcu id risus iaculis, quis dapibus augue accumsan.
          <br /><br />
          Fusce auctor elit in lorem elementum, non cursus dui interdum. Phasellus volutpat dolor et porta ullamcorper. Sed et lectus sit amet dui accumsan laoreet. Duis posuere lectus a massa porta, vitae dictum ipsum auctor. Nunc at porta arcu. Aliquam ultrices sem sed pellentesque pharetra. Donec ante sapien, consectetur et ante et, malesuada accumsan diam. Nullam sed faucibus tellus. Quisque orci eros, porta eget magna eu, sagittis egestas nisi. Nulla et egestas quam. Vivamus iaculis leo nec ex varius faucibus. Donec condimentum pharetra tempus. Phasellus vel risus neque. Proin dapibus dolor sed arcu molestie, at commodo sapien consectetur. Vivamus accumsan felis vel nibh ultricies sollicitudin sit amet id massa.
          <br /><br />
          Aliquam ligula lorem, sollicitudin finibus mollis a, pretium ut ex. Morbi vel auctor ligula, a venenatis magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sed ultricies nisl, et venenatis lectus. Etiam a accumsan est. Nam condimentum sodales velit quis elementum. Nulla nec metus efficitur, consequat lacus sed, tempus odio. Fusce ornare luctus ultrices. Etiam semper accumsan dui, a luctus sem faucibus vitae. Duis tortor mi, iaculis a congue ac, pulvinar non elit.
        </p>
      </div>
    </>
  )
}