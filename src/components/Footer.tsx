import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

export function Footer() {
  return (
    <footer className="h-[45px]">
      <div className="h-px w-[95%] bg-gray-300 mx-auto" />
      <div className="flex items-center justify-between p-2 px-8">
        <p>
          <span className="font-mono text-xs">
            This site was built by me, using React. View at this{" "}
            <a
              href="https://github.com/liamptiernan/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo.
            </a>
          </span>
        </p>
        <div className="flex items-center gap-4 text-sm">
          <p className="font-mono text-xs mr-4">
            email: liamptiernan@gmail.com
          </p>
          <a
            href="/Liam_Tiernan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          <a
            href="https://github.com/liamptiernan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/liam-tiernan-640273138/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
