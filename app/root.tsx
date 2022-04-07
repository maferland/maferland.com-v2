import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import Footer from '~/components/layout/footer'
import Navbar from '~/components/layout/navbar'
import burger from '~/styles/burger.css'
import gradient from '~/styles/gradient.css'
import reset from '~/styles/reset.css'
import variables from '~/styles/variables.css'
import tailwind from './tailwind.css'

export function links() {
  return [
    { rel: 'stylesheet', href: reset },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: variables },
    { rel: 'stylesheet', href: burger },
    { rel: 'stylesheet', href: gradient },
  ]
}

export const meta = () => {
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
      <div className="w-full min-h-full flex flex-1 flex-col pt-20 gap-12">
        <main className="flex flex-col gap-10 flex-1 px-8 md:px-24 ">{children}</main>
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
