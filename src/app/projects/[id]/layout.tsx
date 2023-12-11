import Navbar from './Navbar'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="
            flex flex-col justify-center items-center
            max-w-[2000px]
            my-0 mx-auto
        ">
            <Navbar />
            {children}
        </main>
    )
}
