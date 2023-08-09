import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Buttons() {
  return (
    <section className="w-full">
        <a href="https://www.linkedin.com/in/yusuf-alnasiri-4b4546238/" className=" bg-[#5093E2] font-medium gap-x-2 flex items-center w-full justify-center rounded-md py-[9px]">
            <FontAwesomeIcon className="text-base" icon={faLinkedin} />
            <p className="text-sm">LinkedIn</p>
        </a>
    </section>
  );
}
