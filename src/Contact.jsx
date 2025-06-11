const Contact = () => {
  return (
    <>
      <div className="bg-black flex flex-col items-center pt-[150px] pb-[120px] text-center">
        <img
          src={"contact.png"}
          className="w-[100px] md:w-[120px] mb-6 animate-bounce"
          alt="Contact Icon"
        />

        <img
          src={"videoeditorprofile.png"}
          alt="Video Editor"
          className="w-40 h-40 rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105 object-[center_-10px]"
        />
        <h2 className="text-white pt-4 font-outfit text-4xl sm:text-6xl text-center font-semibold tracking-wide">
          GOT A PROJECT? LET'S CONNECT.
        </h2>
        <p className="text-white/45 w-96 mb-4 text-center font-roboto text-base font-normal leading-7">
          If you'd like to talk about a project just drop me a message. I’m currently available.
        </p>

        <a
          href="mailto:pradeepuncut@gmail.com"
          className="group flex items-center text-orange-500 transition-all duration-200"
        >
          <span className="ml-2 w-3 h-3 rounded-full bg-orange-500 transition-opacity duration-200 group-hover:opacity-0 group-hover:animate-flash-fast" />
          <span className="px-2 font-semibold transition-opacity duration-200 group-hover:opacity-0 group-hover:animate-flash-fast">
            pradeepuncut@gmail.com | +91-78240-09946
          </span>
        </a>
      </div>

      {/* 👇 Footer */}
      <footer className="bg-black text-white/30 text-xs text-center py-4 font-roboto border-t border-white/10">
        © {new Date().getFullYear()} Pradeep Uncut. All rights reserved.
      </footer>
    </>
  );
};

export default Contact;
