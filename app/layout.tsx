import "./globals.css";
import HeaderSwitcher from "../components/Header/HeaderSwitcher";
import LoaderDelay from "../components/Loader/LoaderDelay";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white
                      flex flex-col 
                      lg:flex-row">
        <HeaderSwitcher />
        <main className="flex-1 overflow-hidden">
          <LoaderDelay delay={0}>
            {children}
          </LoaderDelay>
        </main>
      </body>
    </html>
  );
}
