const shorts = [
  {
    title: "Quick Cuts",
    src: "https://www.youtube.com/watch?v=AgAeRj0CpxI&list=PLSkzKq9OH9pkqR5hUEB-Q47CaWzA0zOo6&pp=gAQB",
  },
  {
    title: "Typography style",
    src: "https://youtube.com/shorts/9dtDOXSWaWM?si=WIW-MVujJ_GurJMs",
  },
  {
    title: "Quick Visuals",
    src: "https://youtube.com/shorts/ciXLyHpjhkI?si=vP9dr70K64P9HolB",
  },
  {
    title: "Visual bites",
    src: "https://youtube.com/shorts/d8fRdATDLsU?si=EbeWzsfBIWNiIpk8",
  },
];


const Shorts = () => { 
  const getEmbedUrl = (url) => {
 
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
 
    return url;
  };

  return (
    <section id="shorts" className="bg-black py-2 px-4">
      <h2 className="text-white font-bebas text-[64px] text-center mb-16">
        SHORTS
      </h2>
      <div className="flex gap-6 overflow-x-auto px-0 hide-scrollbar">
        {shorts.map((short, index) => (
          <div
            key={index}
            className="shrink-0 w-[220px] md:w-[280px] lg:w-[320px] rounded-xl overflow-hidden bg-gray-900"
          >
            {short.src.includes("youtube") ? (
              <div className="relative aspect-[9/16] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getEmbedUrl(short.src)}
                  title={`YouTube Short: ${short.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                className="w-full aspect-[9/16] object-cover"
                src={short.src}
                controls
                title={short.title}
              />
            )}
            <p className="text-white text-center mt-2 font-bebas text-base">
              {short.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorts;