import MyImage from "../images/me.jpg";
export default function Header() {
  return (
    <header>
      <img src={MyImage} alt="me" className="" />
      <div className="text-center mt-[21px] mb-[16px]">
        <h1 className="text-[1.5625rem] font-bold mb-[6px]">Yusuf Alnasiri</h1>
        <h2 className="text-[#F3BF99] text-[0.8rem]">Frontend Developer</h2>
        <a href="https://www.linkedin.com/in/yusuf-alnasiri-4b4546238/"
            className="text-[0.64rem] text-[#F5F5F5]"
        >
          yusufalnasiri.website
        </a>
      </div>
    </header>
  );
}
