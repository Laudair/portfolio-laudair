import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
