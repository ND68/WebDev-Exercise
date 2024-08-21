import Image from "next/image";
import appLogo from "/public/logo.svg";
import Link from "next/link";

export default function HeaderNav() {
    return (
        <div className="h-[20%] w-screen flex flex-row items-center">
            <Image className="m-6" src={appLogo} alt="Logo" width={100} height={100} />
            <div className="h-[75%] w-[50%] flex flex-col justify-around">
                <div className="text-5xl font-thin">Capybaras Among Us</div>
                <div className="flex w-[25%] justify-between">
                    <Link href="/">Capybaras</Link>
                    <Link href="/supplies">Supplies</Link>
                </div>
            </div>
        </div>
    );
}