import * as React from "react";

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
            <nav>
                <a>
                    <img>
                    
                    </img>
                </a>
                <a href="/">
                    Home
                </a>
                <a>
                    Order Now
                </a>
                <a>
                    Contact
                </a>
            </nav>
            {children}
            </body>
      </html>
    )
  }