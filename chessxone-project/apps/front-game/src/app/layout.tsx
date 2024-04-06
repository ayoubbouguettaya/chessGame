import LayoutComponent from '../components/Layout';
import '../styles/global.css';

export const metadata = {
  title: 'Chessxone Game',
  description: 'Lobby / online Game  ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
