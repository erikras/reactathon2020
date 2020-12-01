import { MDXProvider } from '@mdx-js/react'
import 'normalize.css'
import 'github-markdown-css'
import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'
import '../styles.css'
import 'prism-theme-night-owl'
import fetch from 'isomorphic-unfetch'

const TwitterLink = ({ username }) => (
  <a href={`https://twitter.com/${username}`} target="_blank">
    @{username}
  </a>
)

const components = {
  code: CodeBlock
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <header>
        <h1>
          <Link href="/">
            <a>Modern Forms in React</a>
          </Link>
        </h1>
        <h3>
          <Link href="/">
            <a>⚛️ Reactathon 2020 ⚛️</a>
          </Link>
        </h3>
        <section>
          <TwitterLink username="erikras" />
          <TwitterLink username="finalformjs" />
        </section>
      </header>
      <div className="markdown-body">
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}

export default MyApp
