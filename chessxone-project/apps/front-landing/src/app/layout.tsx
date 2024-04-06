import './global.css';

export const metadata = {
  title: 'Chessxone',
  description: 'Chessxone Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
