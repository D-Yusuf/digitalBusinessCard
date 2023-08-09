import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-[#161619] rounded-b-[10px] text-3xl text-[#918E9B] w-full flex items-center justify-around py-[19.5px] px-[48.5px]">
      <FontAwesomeIcon icon={faSquareXTwitter} />
      <FontAwesomeIcon icon={faSquareFacebook} />
      <FontAwesomeIcon icon={faSquareInstagram} />
      <FontAwesomeIcon icon={faSquareGithub} />
    </footer>
  );
}
