// import "./globals.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import OtpLoginModal from "@/components/sections/OtpLoginModal";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          {children}
          <Footer />
          {/* <OtpLoginModal /> */}
        </div>
      </body>
    </html>
  );
}
