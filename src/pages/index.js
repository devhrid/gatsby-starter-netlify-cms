import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby"

const IndexPage = () => (
  <Layout>
   <StaticQuery query={graphql`{
  allWordpressPost {
    edges {
      node {
        title
        content
      }
    }
  }
}
`} render={props => (
  <div>
  {props.allWordpressPost.edges.map(page => (
  <div key={page.node.id}>
    <h1>{page.node.title}</h1>
	<div>{page.node.content}</div>
  </div>
  ))}
  </div>
  )} />
   
   
  </Layout>
)

export default IndexPage
