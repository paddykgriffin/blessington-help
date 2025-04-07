import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  link?: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Add a News Article",
    Svg: require("@site/static/icons/icon-news.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
        
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/basics/create-an-article">
    Learn more
  </Link>
  },
  {
    title: "Add new Page",
    Svg: require("@site/static/icons/icon-page.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/basics/create-a-page">
    Learn more
  </Link>
  },
  {
    title: "Add an Media (Image/Video)",
    Svg: require("@site/static/icons/icon-image.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/basics/add-image-video">
    Learn more
  </Link>
  },

  {
    title: "Add Image gallery",
    Svg: require("@site/static/icons/icon-video.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/basics/add-image-gallery">
    Learn more
  </Link>
  },
  {
    title: "Change Site Settings",
    Svg: require("@site/static/icons/icon-menu.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/advanced/site-settings">
    Learn more
  </Link>
  },
  {
    title: "Update Polices",
    Svg: require("@site/static/icons/icon-news.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className="button button--secondary button--lg bg-secondary text-white hover:bg-primary" to="/docs/basics/add-policy">
    Learn more
  </Link>
  }
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className="text-center bg-gray-300 rounded-2xl shadow-xl p-4">
      <Svg role="img" className="w-48 md:w-96 h-36 fill-slate-500" />
        <Heading as="h3">{title}</Heading>
        <p className="hidden">{description}</p>
        {link}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section>
      <div className="container max-w-[80rem]">
        <div className="grid md:grid-cols-3 gap-8 py-18">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
