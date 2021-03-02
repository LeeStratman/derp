import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Album from "../components/Album"
import MusicCloud from "../components/MusicCloud"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MusicCloud />
    <Album />
  </Layout>
)

export default IndexPage
