import ScrollToTop from "../ScrollToTop";

export default function RootLayout({children}) {
    return (
        <> 
            <ScrollToTop/>
            {children}
        </>
    )
}