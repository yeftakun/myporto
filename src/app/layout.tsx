import "./globals.css";
export const metadata = { title: "Portfolio", description: "Backend Dev" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className="bg-slate-950 text-slate-50">{children}</body></html>;
}
