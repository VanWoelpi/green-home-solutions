import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  withContainer?: boolean; // Optional: Inhalt automatisch zentrieren
};

const Layout = ({ children, withContainer = false }: LayoutProps) => {
  return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          {withContainer ? (
              <div className="container py-8">{children}</div>
          ) : (
              children
          )}
        </main>
        <Footer />
      </div>
  );
};

export default Layout;
