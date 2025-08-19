import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doorvi - Privacy Policy",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      >
        {children}
      </body>
    </html>
  );
}
