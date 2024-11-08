import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-PEJE6E7B2R"></Script>
<Script id='google-analytics'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PEJE6E7B2R');
  
  `}
  
</Script>
<Script>function initApollo(){`var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"663db37d358ce606c47fa06a"})},
document.head.appendChild(o)`}initApollo();</Script>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1567175925424561"
     crossOrigin="anonymous"></Script>
        <title>Punyakrit's Portfolio Website</title>
        <meta
          name="description"
          content="Welcome to Punyakrit's portfolio website. I am a final year undergraduate with specialized expertise in developing MERN (MongoDB, Express.js, React.js, Node.js) applications and deploying them in the cloud using AWS (Amazon Web Services) tools."
        />
        <meta
          name="keywords"
          content="portfolio, developer, projects, skills, punyakrit singh makhni, Frontend, Backend, ReactJs, NextJs, web development, software engineer, UI/UX, HTML, CSS, JavaScript, Node.js, MongoDB, Tailwind CSS , API, responsive design"
        />
        <meta name="author" content="Punyakrit Singh Makhni" />
        <meta property="og:title" content="Punyakrit's Portfolio Website" />
        <meta
          property="og:description"
          content="Welcome to Punyakrit's portfolio website.I am a final year undergraduate with specialized expertise in developing MERN (MongoDB, Express.js, React.js, Node.js) applications and deploying them in the cloud using AWS (Amazon Web Services) tools."
        />
        <meta property="og:url" content="https://www.punyakrit.tech/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-1567175925424561"></meta>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
