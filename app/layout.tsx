import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Punyakrit's Portfolio Website</title>
        <meta name="description" content="Welcome to Punyakrit's portfolio website. I am a final year undergraduate with specialized expertise in developing
          MERN (MongoDB, Express.js, React.js, Node.js) applications and
          deploying them in the cloud using AWS (Amazon Web Services) tools." />
        <meta name="keywords" content="portfolio, developer, projects, skills, punyakrit singh makhni, Frontend, Backend, ReactJs, NextJs, web development, software engineer, UI/UX, HTML, CSS, JavaScript, Node.js, MongoDB, Tailwind CSS , API, responsive design" />
        <meta name="author" content="Punyakrit Singh Makhni" />
        <meta property="og:title" content="Punyakrit's Portfolio Website" />
        <meta property="og:description" content="Welcome to Punyakrit's portfolio website.I am a final year undergraduate with specialized expertise in developing
          MERN (MongoDB, Express.js, React.js, Node.js) applications and
          deploying them in the cloud using AWS (Amazon Web Services) tools." />
        <meta property="og:url" content="https://www.punyakrit.tech/" />
        
        {/* Add any other meta tags you need here */}

        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
