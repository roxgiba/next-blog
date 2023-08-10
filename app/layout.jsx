import "@styles/globals.css";

export const metadata = {
  title: "NextBlog",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main">
        <div className="gradient">
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
