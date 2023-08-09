import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Buttons() {
  return (
    <section className="w-full">
    <button className="bg-[#5093E2] font-medium gap-x-2 flex items-center w-full justify-center rounded-md py-[9px]">
      <FontAwesomeIcon className="text-base" icon={faLinkedin} />
      <p className="text-sm">LinkedIn</p>
    </button>

    </section>
  );
}
