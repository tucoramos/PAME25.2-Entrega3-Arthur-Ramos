import Rodape from "./components/Rodape";
import BannerHome from "./components/BannerHome";

export default function Home() {
  return (
    <div className="w-full flex flex-col h-full items-center bg-[#f7f6f3]">
      <BannerHome
        BannerSize="w-full h-[41%]"
        imageSrc="/fundo.png"
        textClassName="font-serif text-[70px] text-white tracking-wide leading-tight"
        text="CleanGirl Café"
        subtextClassName="mt-4 text-[30px] text-white/90 tracking-wide "
        subtext="Foco em cafés especiais e acompanhamentos"
      />

      <div className="py-5 w-[70%] flex flex-col h-full">
        <h1 className="pt-10 text-3xl text-[#464239]"> Item do dia </h1>
        <div className="w-full flex flex-row gap-6 h-full justify-center">
          <BannerHome
            BannerSize="w-full h-[25%] rounded-xl overflow-hidden"
            imageSrc="/iconeBebidas.png"
            textClassName="font-serif text-[30px] text-white tracking-wide leading-tight"
            text="CleanGirl Café"
          />
          <BannerHome
            BannerSize="w-full h-[25%] rounded-xl overflow-hidden"
            imageSrc="/iconeComidas.png"
            textClassName="font-serif text-[30px] text-white tracking-wide leading-tight"
            text="CleanGirl Café"
          />
        </div>
      </div>
      <Rodape
        className="w-full mt-auto flex flex-col items-center p-1 text-base text-[#464239] bg-[#EADFCC]"
        text="Horário de funcionamento: Seg-Sex 08h-18h, Sáb 9h-15h"
      />
    </div>
  );
}
//
