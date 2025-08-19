import { Metadata } from "next";

export const metadata: Metadata = {
  title:"DoorVi - Terms of Use",
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
