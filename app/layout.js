import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata={title:"Lumière Home Cleaning | A Better Kind of Clean",description:"Professional home cleaning made simple, thoughtful, and dependable."};
export default function RootLayout({children}){return <html lang="en"><body><Header/><div className="pageShell">{children}</div><Footer/></body></html>}
