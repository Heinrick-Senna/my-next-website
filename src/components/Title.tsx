import './Title.css'

export default function Title() {
  return (
    <div className='relative select-none'>
      <h1 className="absolute text-3xl sm:text-5xl font-bold align-center dissipate-animation">
        Marcelo H R Senna
      </h1>
      <img
        src="./Profile_Pic.jpg"
        className="absolute right-0 md:right-[-7.4rem] absolute max-w-[220px] top-full translate-y-[calc(-50%+35px)] fade-in-animation"
        alt="Foto de Marcelo H R Senna"
        title="Foto de Marcelo H R Senna"
        style={{
          opacity: 0
        }}
      />
      <h1
        className="text-3xl sm:text-5xl font-bold align-center text-black relative title-mask fade-in-animation-2"
        style={{
          maskImage: "url('./Profile_Pic.jpg')"
        }}
      >
        Marcelo H R Senna
      </h1>
    </div>
  );
}
