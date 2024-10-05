import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 Star Wars App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
