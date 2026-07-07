import "./globals.css";



import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script src="https://platform.twitter.com/widgets.js" />
      </body>
    </html>
  );
}