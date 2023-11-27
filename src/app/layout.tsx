import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Link It | Gather your socials links",
  description: "Generate a unique url with all your social links in one place.",
  icons: {
    icon: [
      {
        url: "assets/images/favicon.svg",
        href: "assets/images/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body className='light-mode'>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
