import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

export function Footer() {
  return (
    <footer className="h-[45px]">
      <div className="h-px w-[95%] bg-gray-300 mx-auto" />
      <div className="flex flex-col sm:flex-row items-center justify-between p-2 px-8">
        <p>
          <span className="font-mono text-xs pr-6 break-normal inline-block">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm mt-4 sm:mt-0">
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
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/liamptiernan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="max-w-none" src={githubIcon} alt="Github logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/liam-tiernan-640273138/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-none"
                src={linkedInIcon}
                alt="LinkedIn logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
