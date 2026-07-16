import "./globals.css";

import "react-tweet/theme.css";


import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        

        <Script src="https://platform.twitter.com/widgets.js" />

        <main
  className="
    mx-auto
    max-w-6xl
    px-8
    py-8
  "
>
  {children}
</main>
      </body>
    </html>
  );
}