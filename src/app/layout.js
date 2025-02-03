 import "./globals.css";
 export const metadata = {
  title: "Right travel  ",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"></link>
          </head>
      <body>
       
       
        {children}
      </body>
    </html>
  );
}
