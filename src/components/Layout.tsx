import { Link, Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="relative h-screen max-w-[450px] mx-auto">
      <div className="fixed max-w-[450px] w-full h-[68px] flex bg-black py-1 px-5">
        <Link to={"/"}>
          <div className="w-[100px] h-[60px] flex justify-center">
            <img width={60} height={60} src="/favicon.webp" alt="Img" />
          </div>
        </Link>
      </div>
      <Outlet />
      <div className="bg-black px-[24px] pt-[24px] pb-[120px]">
        <div className="flex justify-between item-center px-8 py-6">
          <Link to={"https://silentsign.jp/privacy/"}>
            <p className="text-white">プライバシーポリシー</p>
          </Link>
          <Link to={"/faq"}>
            <p className="text-white">よくあるご質問</p>
          </Link>
        </div>
        <div className="flex justify-center items-center p-4">
          <p className="text-white">© オカキチ・でらゲー・Okakichi</p>
        </div>
      </div>
    </div>
  );
}