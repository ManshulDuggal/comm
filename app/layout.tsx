import Clientonly from "./components/Clientonly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

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
        <Clientonly>
          <Navbar />
          <Modal actionLabel="Submit" isOpen title="Login/Signup" />
        </Clientonly>
        {children}
      </body>
    </html>
  );
}
