import * as React from "react"
import { Link } from "gatsby"
import { SEO } from '../Components'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <>
    <SEO
    url="https://condutaoutlet.com"
    title="Página não encontrada"
    />
    <main style={pageStyles}>
      <h1 style={headingStyles}>Página não encontrada</h1>
      <p style={paragraphStyles}>
        Desculpe,{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        não conseguimos encontrar a página que você estava procurando.
        <Link to="/">Volte para a página inicial</Link>.
      </p>
    </main>
    </>
  )
}

export default NotFoundPage
