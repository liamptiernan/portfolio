import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { General } from "./components/General";
export default function Home() {
  return (
    <div>
      <main className="flex h-[calc(100vh-45px)]">
        <General />
        <div className="h-[80vh] w-[3px] bg-gray-300 my-auto" />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
