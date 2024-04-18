import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div className="flex flex-row-reverse bg-white text-gray-900">
        <section className="">
          <div>
            <h1 className="text-3xl">Ariane Madalena Aparecida Brandão Lobo</h1>
            <h2 className="underline">Desenvolvedora Frontend React/Next.js</h2>
            <p>Descrição</p>
          </div>
          
          <div className="my-2">
            <h2 className="text-lg text-green-400 font-bold">Habilidades relacionadas</h2>
            <hr className="bg-green-400 h-1 mb-4" />
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-400 p-2 rounded-md">Web (HTML/CSS/Javascript)</span>
              <span className="bg-green-400 p-2 rounded-md">React JS</span>
              <span className="bg-green-400 p-2 rounded-md">Next.js</span>
              <span className="bg-green-400 p-2 rounded-md">Typescript</span>
              <span className="bg-green-400 p-2 rounded-md">Clean Code</span>
            </div>
          </div>

          <div>
            <h2>Últimas experiências de trabalho</h2>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div>
            <h2>Educação</h2>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div>
            <h2>Certificados relevantes</h2>
            <div>
              <h3>Titulo</h3>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </section>

        <section>
            <div>
              <Image
                  src="/vercel.svg"
                  alt="Foto do rosto de Ariane Brandão"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
                <div className="flex flex-col">
                  <div>
                    <span>icone</span> <a href="mailto:arii.brandao@gmail.com" target="_blank">arii.brandao@gmail.com</a>
                  </div>
                  <div>
                    <span>icone</span> <a href="tel:5515981599281" target="_blank">+55 (15) 98159-9281</a>
                  </div>
                  <div>
                    <span>icone</span> <a href="#googlemaps" target="_blank">Itapetininga - SP - Brasil</a>
                  </div>
                  <div>
                    <span>icone</span> <a href="https://github.com/arianebrandao" target="_blank">github.com/arianebrandao</a>
                  </div>
                  <div>
                    <span>icone</span> <a href="https://linkedin.com/arianebrandão" target="_blank">linkedin.com/arianebrandão</a>
                  </div>
                  <div>
                    <span>icone</span> <a href="https://arianebrandao.github.io" target="_blank">arianebrandao.github.io</a>
                  </div>
                </div>
                <div>
                  <h2>Linguas</h2>
                  <p>Português (nativo)</p>
                  <p>Inglês (intermediário)</p>
                </div>
                <div>
                  <h2>Projetos que eu gosto</h2>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}
