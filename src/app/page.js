import Container from "@/components/Container"
import Button from "@/components/Button"
import Image from "next/image"
import Card from "@/components/Card";

const pastores = [
  {
    nome: 'Pastor Wilson',
    missao: 'Missão de Pirapozinho',
    imgUrl: 'url_da_imagem_de_wilson',
  },
  {
    nome: 'Pastor Edson',
    missao: 'Titular',
    imgUrl: 'url_da_imagem_de_edson',
  },
  {
    nome: 'Pastor Luiz',
    missao: 'Missão de Bernardes',
    imgUrl: 'url_da_imagem_de_luiz',
  },
];

export default function Home() {
  return (
    <>

      <section id="home" className="relative py-5 h-screen">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay escuro para melhorar a legibilidade do texto */}
        </div>
        <div className="container relative z-10 flex items-center justify-center h-full mx-auto md:px-12">
          <div className="text-center lg:w-1/2">
            <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-100 font-extrabold font-sans lg:text-5xl lg:leading-tight mb-5">
              Só Jesus Cristo salva sua vida!
            </h1>
            <p className="max-w-xl text-gray-200 lg:max-w-md">
              Venha nos fazer uma visita no templo. Sua presença é mais do que bem-vinda
            </p>
            <div className="flex justify-center mt-14">
              <Button>AO VIVO</Button>
            </div>
          </div>
        </div>
      </section>



      <section className="grid h-screen place-items-center">
        <ul className="flex flex-col gap-24 md:gap-12">
          {Array(1).fill().map((_, index) => (
            <li className="flex gap-16 md:block" key={index}>
              <Image
                src="/img/article.jpg"
                alt="Lorem ipsum"
                width={480}
                height={380}
                className="object-cover w-full max-w-[500px] min-w-[500px] md:min-w-0 md:max-w-full h-[430px] sm:h-[260px] md:my-6"
              ></Image>
              <aside className="max-w-[500px] w-full">
                <h2 className="mb-8 font-medium text-5xl sm:text-3xl sm:mb-4">A mensagem de uma igreja quase centenária</h2>
                <p className="mb-6 pb-6 border-b border-[#D9D9D9] font-light text-xl sm:text-lg sm:mb-4 sm:pb-4">Donec placerat felis ut enim vehicula, eu mollis mi sollicitudin. Fusce ultricies orci ex, non gravida est ullamcorper et. Integer ex lacus, volutpat vel ante quis, sollicitudin pharetra nulla. Mauris sit amet metus sit amet purus consequat aliquet. <br /><br /> Pellentesque tempor turpis quis imperdiet suscipit. Donec tincidunt rutrum egestas...</p>

              </aside>
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-[#6369E7] flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">As programações da igreja</h1>
          <p className="text-sm text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque dolor egestas
            mauris laoreet, sit amet auctor erat molestie. Nunc dapibus elit ac facilisis congue. Nunc eu
            consectetur dui.
          </p>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold ">Segunda-Feira:</span> cursos de ação social
            </div>
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold">Quinta-Feira:</span> culto nas missões, às 19h30
            </div>
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold">Terça-Feira:</span> culto MCM*, às 14h
            </div>
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold">Sexta-Feira:</span> culto UMM**, às 20h
            </div>
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold">Quarta-Feira:</span> culto no templo, às 19h30
            </div>
            <div className="bg-white rounded-md p-4 shadow-lg">
              <span className="text-blue-600 font-bold">Sábado:</span> culto UNIS / missões reunidas
            </div>
            <div className="bg-white rounded-md p-4 col-span-2 shadow-lg">
              <span className="text-blue-600 font-bold">Domingo manhã:</span> culto matutino às 9h e EBD às 10h30
            </div>
            <div className="bg-white rounded-md p-4 col-span-2 shadow-lg">
              <span className="text-blue-600 font-bold">Domingo noite:</span> uniões de treinamento às 18h e culto noturno às 19h30
            </div>
          </div>

          <div className="text-white text-xs mt-6">
            <p>*Mulheres Cristãs em Missão</p>
            <p>**União Masculina Missionária</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Conheça nossos pastores!</h2>
        <div className="flex justify-center space-x-8">
          {pastores.map((pastor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={pastor.imgUrl}
                alt={`Foto de ${pastor.nome}`}
                className="rounded-full w-32 h-32 object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{pastor.nome}</h3>
              <p className="text-gray-500">{pastor.missao}</p>
            </div>
          ))}
        </div>
      </div>

      <Card />


    </>
  );
}