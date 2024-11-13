// import Image from "next/image";
import CustomButton from "@/features/common/components/button-custom";
// import CustomCard from "@/features/common/components/card-custom";
import { getNewsElComercio, getNewsGestion, getNewsLaRepublica } from "@/actions/news/news";
import { TabContent } from "@/features/home/components/tab-content";

export default async function Home() {

  const newsElComercio = await getNewsElComercio();

  const newsLaRepublica = await getNewsLaRepublica();

  const newsGestion = await getNewsGestion();

  console.log({ newsLaRepublica });

  // Definir tabs disponibles
  const TABS = [
    { id: "elcomercio", label: "El Comercio", data: newsElComercio },
    { id: "larepublica", label: "La República", data: newsLaRepublica },
    { id: "gestion", label: "Gestión", data: newsGestion },
  ];

  return (
    <div className="flex items-center flex-col min-h-screen">
      <main className="flex-1 w-full px-2">
        <section className="w-full py-12 bg-black">
          <h2
            className="px-4 text-center text-white"
          >
            <span className="text-3xl font-bold text-white">Noticias </span>
            <span className="text-3xl font-bold text-blue-500">Perú</span>
          </h2>
          {/* <div className="flex gap-3 pt-3" >
            <CustomButton className="w-full bg-white text-black hover:bg-gray-200">
              El comercio
            </CustomButton>
            <CustomButton className="w-full bg-white text-black hover:bg-gray-200">
              La República
            </CustomButton>
            <CustomButton className="w-full bg-white text-black hover:bg-gray-200">
              Gestión
            </CustomButton>
          </div>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
            }}
          >
            {news.map((item, index) => (
              <a
                key={index}
                className="w-full "
                href={item.href}
                target="_blank"
              >
                <div className="relative w-full h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </a>
            ))}
          </div> */}
          <TabContent
            TABS={TABS}
          />

        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-white">Bienvenido a Noticias Perú</h1>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                The best gym in town, with state-of-the-art equipment, expert trainers, and flexible class schedules.
              </p>
              <CustomButton className="w-full bg-white text-black hover:bg-gray-200">
                Start Your Free Trial
              </CustomButton>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6  mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join Acme Fitness today and take the first step towards a healthier, stronger you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <CustomButton className="w-full bg-white text-black hover:bg-gray-200">
                  Start Your Free Trial
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </CustomButton>
              </div>
            </div>
          </div>
        </section> */}

      </main>

    </div>
  );
}
