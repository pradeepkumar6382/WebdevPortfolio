const Philosophy = () => {
  return (
    <div className="bg-black flex flex-col items-center pt-[200px] pb-20 px-4 text-center">
      <img
        src="philosophy.png"
        alt="philosophy"
        className="w-[100px] md:w-[120px] mb-6 animate-bounce"
      />

       <h2 className="text-white mt-6 mb-4 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center max-w-4xl mx-auto tracking-tight">
          <span className="text-orange-500 font-bold text-5xl lg:text-6xl">“</span>
          „The way you can awaken feelings just by putting one picture after the other is magical to me.”
          <span className="text-orange-500 font-bold text-5xl lg:text-6xl">”</span>
      </h2>

      <div className="max-w-[460px]">
        <p className="text-white/45 font-roboto text-base font-normal leading-7">
          Consciously looking for these moments, internalizing them and learning from them gets me excited in a way that I just need to do this for the rest of my life.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;