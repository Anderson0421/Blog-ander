import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className=" min-h-screen h-full z-[-2]  w-full bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                {children}
            </div>
        </>
    )
}
export default Layout;