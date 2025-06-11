const Mainpage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Text Content - Left side on laptop/desktop */}
      <div className="w-full lg:w-1/2 xl:w-2/5 z-10 order-1 lg:order-none mt-12 sm:mt-16 md:mt-20 lg:mt-0 lg:pr-8 xl:pr-12">
       
   <h1 className="font-outfit text-center text-white text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] leading-tight tracking-widest uppercase mb-8 animate-glitch">
  CUTS.EDITS.
  <br />
  <span className="font-outfit text-white">MONTAGES.</span>
</h1>

        <h3 className="text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-white/70 leading-relaxed">
          As an editor I help agencies, filmmakers and creatives in achieving their goals.
          Tools like video editing, sound design and color correction empower us in telling your story.
          From social media content to feature films: I will tackle every obstacle with you until the result is satisfying.
        </h3>
      </div>

      {/* Image - Right side on laptop/desktop */}
      <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-none mt-6 sm:mt-8 md:mt-10 lg:mt-0 lg:pl-8 xl:pl-12">
        <img
          src={'../src/videoeditorprofile.png'}
          alt="Video Editor"
          className="object-contain h-auto max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px] rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Mainpage;