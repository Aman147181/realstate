import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";
import AuthProvider from "@/config/authProvider";
import 'photoswipe/dist/photoswipe.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realtor",
  description: "Real State Property Website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
            {children}
            <ToastContainer />
          <Footer/>
        </NextUIProvider>
      </body>
      </html>
      </AuthProvider>
  );
}
