import { Button } from "@/components/ui/button";
import Image from "next/image";

const Menu = [
    {
        id: 1,
        name: 'Home',
        path: "/"
    },
    {
        id: 2,
        name: 'Explore',
        path: "/"
    },
    {
        id: 3,
        name: 'Contact Us',
        path: "/"
    },
]

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex items-center gap-10">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={180}
                    height={80}
                />
                <ul className="md:flex gap-8 hidden">
                    {Menu.map((item, index)=>(
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    );
}

export default Header;