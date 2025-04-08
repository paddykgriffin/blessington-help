import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  link?: ReactNode;
};

const styles = "button button--secondary button--lg bg-secondary text-white hover:bg-primary dark:border-slate-700 dark:bg-primary dark:hover:bg-secondary";


const FeatureList: FeatureItem[] = [
  {
    title: "Add a Page or News",
    icon: require("@site/static/img/icons/page-content.png").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
        
      </>
    ),
    link:  <Link className={styles} to="/docs/basics/pages">
    Learn more
  </Link>
  },

  {
    title: "Update Polices",
    icon: require("@site/static/img/icons/article.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className={styles} to="/docs/basics/policies">
    Learn more
  </Link>
  },
  {
    title: "Add an Media",
    icon: require("@site/static/img/icons/media.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className={styles} to="/docs/basics/media-library">
    Learn more
  </Link>
  },

  {
    title: "Add Image gallery",
    icon: require("@site/static/img/icons/image.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className={styles} to="/docs/basics/image-gallery">
    Learn more
  </Link>
  },
  {
    title: "Change Site Settings",
    icon:require("@site/static/img/icons/setting.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className={styles} to="/docs/advanced/site-settings">
    Learn more
  </Link>
  },
  {
    title: "Update homepage",
    icon: require("@site/static/img/icons/home.png").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:  <Link className={styles} to="/docs/basics/homepage">
    Learn more
  </Link>
  }
 
];

function Feature({ title, icon, description, link }: FeatureItem) {
  return (
    <div className="text-center bg-gray-100 rounded-2xl shadow-xl p-4 border-gray-200/50 border dark:bg-zinc-950 dark:border-zinc-700">
     <img src={icon} className="m-0 w-32 py-6" />
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
