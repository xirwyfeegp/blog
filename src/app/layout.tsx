export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            {/* Layout UI */}
            <main>{children}</main>

            <footer>{ 'it could be a common footer.'}</footer>

        </body>
    </html>
  );
}
