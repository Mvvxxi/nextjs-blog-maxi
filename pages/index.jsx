import Layout from "../components/Layout";
import utilStyles from "../styles/util.module.css";

export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description="Descripción de la página de inicio"
      home={true}
    >
      <section className={utilStyles.headingMd}>
        <p>[Se Subiran Post de datos utiles para tu día a día ]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
