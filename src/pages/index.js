import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import Layout from '@theme/Layout';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} - ${siteConfig.tagline}`}
            description={`${siteConfig.title} - ${siteConfig.tagline}`}
        >
            <HomepageHeader title={siteConfig.title} tagline={siteConfig.tagline} />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
