const Purpose = () => {
  return (
    <div className="bg-black flex flex-col items-center pt-[200px] pb-[100px] px-4 text-center">
      <img
        src="../src/Purpose.png"
        alt="philosophy"
        className="w-[100px] md:w-[120px] mb-6 animate-bounce"
      />

      <div className="max-w-[910px]">

      <h2 className="text-white mt-6 mb-4 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center max-w-4xl mx-auto tracking-tight">
          <span className="text-orange-500 font-bold text-5xl lg:text-6xl">“</span>
          Sustainability is a subject close to my heart..
          <span className="text-orange-500 font-bold text-5xl lg:text-6xl">”</span>
      </h2>


      </div>

      <div className="max-w-[460px]">
        <p className="text-white/45 font-roboto text-base font-normal leading-7">
        Enviromentally-conscious projects deserve special attention and will be met by me in this way. Get in touch so we can work out a tailored offer.        </p>
      </div>
    </div>
  );
};

export default Purpose;