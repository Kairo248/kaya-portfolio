import Link from "next/link";

export default function Hero() {
    return (
      <section className="flex flex-col md:flex-row items-center gap-8 py-16 md:py-24">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Kaya</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-lg mx-auto md:mx-0">
          I am a Software Development student at the International University of Applied Sciences 
          and an aspiring full-stack developer. I’m passionate about building modern, user-friendly applications
          and continuously improving my coding skills. My experience spans both frontend and backend development, 
          with a focus on creating efficient, scalable, and visually engaging solutions.
          </p>
        </div>

    <Link href="/about">
        <div className="relative group w-100 h-100"> 
         <div className="absolute -inset-2 rounded-lg bg-green-400 opacity-0 blur-lg group-hover:opacity-100 transition duration-300"></div>
           <img
             src="/profile.jpg"
             alt="Profile"
             className="relative z-10 w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
           />
        </div>
    </Link>
      </section>
    );
  }
  