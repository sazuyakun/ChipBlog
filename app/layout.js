import { Outfit } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/Auth/AuthProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog App",
  description: "A dedicated full-stack app using next and mongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
