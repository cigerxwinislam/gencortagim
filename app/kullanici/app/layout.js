import { AuthProvider } from "./Providers";




export default function RootLayout({ children }) {
  return (
        <AuthProvider>{children}</AuthProvider>
     
  );
}
