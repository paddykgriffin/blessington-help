import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";


function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div id="hero" className={clsx("bg-gray-200 py-12 text-black text-center dark:bg-zinc-950")}>
      <div className="container">
        <Heading as="h1" className="text-secondary text-5xl dark:text-white">
          {siteConfig.title}
        </Heading>
        <p className="text-2xl font-extralight dark:text-white">{siteConfig.tagline}</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Help Docs |  ${siteConfig.title}`}
      description="Useful documention for content editors and staff"
    >
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
