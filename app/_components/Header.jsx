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
        <div>
            <div>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={180}
                    height={80}
                />
                <ul className="">
                    {Menu.map((item, index)=>(
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;