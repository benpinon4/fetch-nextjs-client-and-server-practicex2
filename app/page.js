import Image from "next/image";
import ProductList from "./ui/ProductsList";
import Link from "next/link";

export default function Home() {




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Link href={"/server-render"}>Go To Server Renderred Page</Link>
    <br></br>
    <Link href={"/client-render"}>Go To Client Renderred Page</Link>
    </div>
  );
}
