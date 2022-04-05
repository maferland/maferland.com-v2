import type { MetaFunction } from 'remix'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import Footer from '~/components/layout/Footer'
import Navbar from '~/components/layout/Navbar'
import gradient from '~/styles/gradient.css'
import reset from '~/styles/reset.css'
import tailwind from './tailwind.css'

export function links() {
  return [
    { rel: 'stylesheet', href: reset },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: gradient },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Marc-Antoine Ferland' }
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" /> {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col bg-purple-1000 text-purple-100">
      <Navbar />
      <div className="w-full min-h-full flex flex-col">
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
