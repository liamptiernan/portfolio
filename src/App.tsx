import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Currently } from "./components/Currently";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <section className="container pl-16 pb-25 mx-auto my-auto h-fit w-[80%]">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Liam Tiernan
        </h1>
        <h2 className="text-4xl mb-6">Full Stack Software Engineer</h2>
        <div className="w-24 h-1 bg-blue-500 mb-4"></div>
        <p>
          Extensive experience designing and developing applications with a
          focus in video production and healthcare.
        </p>
      </section>
      <div className="container overflow-scroll max-h-screen">
        <Experience />
      </div>
    </main>
  );
}
