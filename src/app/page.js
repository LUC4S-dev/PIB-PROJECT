import Container from "@/components/Container"
import Button from "@/components/Button"
import Image from "next/image"
import RigthCard from "@/components/RigthCard";

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
          <div className="absolute inset-0 bg-black opacity-50"></div>
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

      <RigthCard />

      <div className="max-w-7xl mx-auto p-8">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Nossos Jovens e Adolescentes
        </h1>

        {/* Texto descritivo */}
        <p className="text-center text-gray-600 mb-12">
          Donec vulputate semper ligula, et volutpat nisi dictum ut. Phasellus sed mi at nisi pretium ultricies tristique ut metus. Duis quis volutpat dui. Etiam in imperdiet quam. Nam convallis vestibulum leo nec fringilla. Sed tincidunt cursus lacus ut bibendum. Pellentesque non condimentum urna. Quisque dignissim varius aliquam. Pellentesque tincidunt vel tortor a viverra. Vestibulum euismod est et eros accumsan mattis.
        </p>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primeira imagem*/}
          <div >
            <Image
              src="/img/jovens1.png"
              alt="Lorem ipsum"
              width={902}
              height={627}
              className="object-cover w-full max-w-[600px] min-w-[600px] md:min-w-0 md:max-w-full h-[430px] sm:h-[260px] md:my-6"
            ></Image>
          </div>

          {/* Segunda imagem*/}

          <div >
            <Image
              src="/img/jovens2.png"
              alt="Lorem ipsum"
              width={902}
              height={627}
              className="object-cover w-full max-w-[600px] min-w-[600px] md:min-w-0 md:max-w-full h-[430px] sm:h-[260px] md:my-6"
            ></Image>
          </div>

          {/*terceira imagem */}
          <div className="col-span-2">
            <Image
              src="/img/jovens3.png"
              alt="Lorem ipsum"
              width={902}
              height={627}
              className="object-cover w-full md:min-w-0 md:max-w-full h-[430px] sm:h-[260px] md:my-6"
            ></Image>
          </div>

        </div>

        {/* Texto adicional abaixo */}
        <p className="text-center text-gray-600 mt-12">
          Aenean consequat nec velit a pulvinar. Quisque nisi arcu, iaculis eu sollicitudin et, imperdiet ut odio.
        </p>
      </div>

      <div className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-bold text-indigo-600 mb-12">Nossos Corais</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl p-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] rounded-lg ">
          {/* Coral Paz Eternal */}
          <div className="">
            <h2 className="text-2xl font-semibold text-indigo-600">Coral Paz Eternal</h2>
            <p className="text-gray-600 mt-2">Regente: Pr. Israel Siqueira</p>
            <p className="text-gray-600">Participantes: membros a partir de 16 anos</p>
            <p className="text-gray-600">Ensaios: terças-feira, às 19h30</p>
          </div>

          {/* Coral Ao Redor do Mestre */}
          <div className="">
            <h2 className="text-2xl font-semibold text-indigo-600">Coral Ao Redor do Mestre</h2>
            <p className="text-gray-600 mt-2">Regente: Lislie Borges</p>
            <p className="text-gray-600">Participantes: crianças de 0–10 anos</p>
            <p className="text-gray-600">Ensaios: sextas-feiras, às 18h30</p>
          </div>

          {/* Coral Essência de Deus */}
          <div className="">
            <h2 className="text-2xl font-semibold text-indigo-600">Coral Essência de Deus</h2>
            <p className="text-gray-600 mt-2">Regente: Juliane Seraphim Viana</p>
            <p className="text-gray-600">Participantes: membros a partir de 16 anos</p>
            <p className="text-gray-600">Ensaios: sábados, às 14h30</p>
          </div>

          {/* Coral Perfeita Adoração */}
          <div className="">
            <h2 className="text-2xl font-semibold text-indigo-600">Coral Perfeita Adoração</h2>
            <p className="text-gray-600 mt-2">Regente: Ana Clara Moreira</p>
            <p className="text-gray-600">Participantes: adolescentes de 12–17 anos</p>
            <p className="text-gray-600">Ensaios: domingos, às 17h</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-bold text-indigo-600 mb-12">As fases da salvação</h1>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl p-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] rounded-lg">
          {/* Coral Paz Eternal */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 text-center">Justificação</h2>
            <p className="text-gray-600 text-justify">Esta é a primeira fase da salvação, onde o pecador é declarado justo aos olhos de Deus. A justificação ocorre pela fé em Jesus Cristo e é um ato instantâneo da graça divina. É através da morte expiatória de Jesus na cruz que os pecadores são perdoados e reconciliados com Deus. A justificação é baseada na obra de Cristo, não nas obras do indivíduo, e é concedida pela graça mediante a fé (Efésios 2:8-9).</p>
          </div>

          {/* Coral Ao Redor do Mestre */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 text-center" >Santificação</h2>
            <p className="text-gray-600 text-justify">A santificação é o processo contínuo pelo qual o crente é transformado à semelhança de Cristo. Após a justificação, os crentes são chamados a viver em santidade, separados do pecado e dedicados a Deus. Esse processo envolve a cooperação do crente com o Espírito Santo, que trabalha para produzir frutos espirituais e conformá-los à imagem de Cristo (Gálatas 5:22-23, Romanos 8:29). É um crescimento gradual que dura toda a vida, envolvendo disciplina espiritual, crescimento na fé e abandono do pecado.</p>
          </div>

          {/* Coral Essência de Deus */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 text-center">Glorificação</h2>
            <p className="text-gray-600 text-justify">Esta é a fase final da salvação, que ocorre quando os crentes entram na presença gloriosa de Deus após a morte ou no retorno de Cristo. Na glorificação, os crentes recebem corpos ressuscitados e glorificados, livres do pecado e da corrupção (1 Coríntios 15:42-44). Eles experimentarão a plenitude da presença de Deus e desfrutarão da comunhão eterna com Ele. A glorificação completa a obra da salvação, trazendo a consumação final da redenção de Deus para Seu povo.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        <h1 className="text-2xl font-bold">Escalas dos Cultos</h1>

        <div className="mt-4 border-t border-gray-300 w-1/3">
          <p className="text-lg text-center mt-2">24/03/2024</p>
        </div>

        <div className="flex justify-between w-1/2 mt-6">
          <p className="text-blue-500 font-semibold">Manhã</p>
          <p className="text-gray-400">Noite</p>
        </div>

        <div className=""> 
          <div className="grid grid-cols-2 gap-12 mt-6">
            {/* Pregação */}
            <div className="flex flex-col items-center">
              <div className="text-2xl">✝️</div>
              <p className="font-semibold">Pregação</p>
              <p>Pastor Edson</p>
            </div>

            {/* Direção */}
            <div className="flex flex-col items-center">
              <div className="text-2xl">✝️</div>
              <p className="font-semibold">Direção</p>
              <p>Dc. Oscar Soares</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-12 mt-10 p-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] rounded-lg ">


          {/* Transmissão */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">💻</div>
            <p className="font-semibold">Transmissão</p>
            <p>Pedro Stabile Neto</p>
          </div>

          {/* Filmagem */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎥</div>
            <p className="font-semibold">Filmagem</p>
            <p>Lucas Siqueira</p>
          </div>

          {/* Foto */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">📷</div>
            <p className="font-semibold">Foto</p>
            <p>Ana Beatriz Dana</p>
          </div>

          {/* Apoio */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🤝</div>
            <p className="font-semibold">Apoio</p>
            <p>Mateus Amaral</p>
          </div>


          {/* Regência */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎼</div>
            <p className="font-semibold">Regência</p>
            <p>Gabriel de Carvalho</p>
          </div>

          {/* Piano */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎹</div>
            <p className="font-semibold">Piano</p>
            <p>Lílian de Carvalho</p>
          </div>

          {/* Órgão */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎹</div>
            <p className="font-semibold">Órgão</p>
            <p>Vânia Bianchini</p>
          </div>

          {/* Som */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🔊</div>
            <p className="font-semibold">Som</p>
            <p>Antônio Francisco, Luís Augusto</p>
          </div>

          {/* Microfone Volante */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎤</div>
            <p className="font-semibold">Microfone Volante</p>
            <p>Gabriel de Carvalho</p>
          </div>

          {/* Apoio Internet */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🛜</div>
            <p className="font-semibold">Apoio Internet</p>
            <p>Lílian de Carvalho</p>
          </div>

          {/* Culto infantil */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">👩‍👦‍👦</div>
            <p className="font-semibold">Culto Infantil</p>
            <p>Vânia Bianchini</p>
          </div>

          {/* Berçário */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">👼🏽</div>
            <p className="font-semibold">Berçário</p>
            <p>Antônio Francisco, Luís Augusto</p>
          </div>


          {/* Recepçao */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🎼</div>
            <p className="font-semibold">Recepção</p>
            <p>Gabriel de Carvalho</p>
          </div>

          {/* Estacionamento */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🚗</div>
            <p className="font-semibold">Estacionamento</p>
            <p>Lílian de Carvalho</p>
          </div>

          {/* Aconselhamento */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🫂</div>
            <p className="font-semibold">Aconselhamento</p>
            <p>Vânia Bianchini</p>
          </div>

          {/* Diáconos */}
          <div className="flex flex-col items-center">
            <div className="text-2xl">🤵🏽‍♂️</div>
            <p className="font-semibold">Diáconos</p>
            <p>Antônio Francisco, Luís Augusto</p>
          </div>


          {/* Outros elementos, como microfone, berçário, estacionamento, diaconato, etc, podem seguir o mesmo padrão */}
        </div>
      </div>

    </>
  );
}