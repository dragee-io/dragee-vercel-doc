import clsx from 'clsx';
import PropTypes from 'prop-types';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Dragee for software architecture',
        id: 'dragee',
        description: (
            <>
                Automated generation of software architecture documentation from application source
                code.
                <br />
                Permits deep analysis of compliance with architectural rules, and useful
                architecture modeling.
            </>
        )
    },
    {
        title: 'Open-source & adaptable',
        id: 'tech',
        description: (
            <>
                Dragee is based on Bun with TypeScript, for speed and simplicity.
                <br />
                The core project is an easily usable CLI.
                <br />
                Dragee is open-source, and you can write your own asserters/graphers.
            </>
        )
    },
    {
        title: 'Analyze with asserters',
        id: 'asserters',
        description: (
            <>
                Dragee <b>Asserters</b> contain a set of architectural rules.
                <br />
                Your project's compliance to these rules is analyzed, so you can avoid the <i>big ball of mud</i> and other anti-patterns.
            </>
        )
    },
    {
        title: 'Design with graphers',
        id: 'graphers',
        description: (
            <>
                Dragee <b>Graphers</b> can design your architecture.
                <br />
                Nowadays, it is essential to take a look to your software achitecture from another perspective. Let Dragee draw your project's portrait !
            </>
        )
    },
    {
        title: 'Made by HoppR',
        id: 'hoppr',
        description: (
            <>
                <i>There is a new Hopp(R) for Tech consulting</i>
                <br />
                At HoppR, our mission is to support our clients in their culture of quality software
                development to build the world of tomorrow.
            </>
        )
    }
];

function Feature({ id, title, description }) {
    return (
        <div id={id} className="card">
            <div className="card__header">
                <h3>{title}</h3>
            </div>
            <div className="card__body">
                <p>{description}</p>
            </div>
        </div>
    );
}
Feature.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired
};

export default function HomepageFeatures() {
    const featureColumns = [[], [], []];
    FeatureList.forEach((feature, i) =>
      featureColumns[i % 3].push(feature),
    );
  
    return (
        <section className={styles.features}>
            <div className="container">
                <Heading as="h1" className={styles.featureHeadline}>
                    Dragee: your solution for clean software design
                </Heading>
                <div className={styles.featureSubline}>
                    <p>
                        Dragee is the ultimate tool for software architects and craft developers seeking clarity and precision in their work. Designed from scratch with usability at its core, it has three major design goals:
                    </p>
                    <ul className={styles.featureList}>
                        <li><b>Effortless Usability:</b> Built to be intuitive and accessible for all</li>
                        <li><b>Automated Documentation:</b> Generate detailed architecture artifacts like C4 models with ease</li>
                        <li><b>In-Depth Analysis:</b> Meticulously analyze your projects - whether new or legacy - and ensure your architecture aligns with your vision</li>
                    </ul>
                    <p>
                        With Dragee, you can create, document, and refine your software architecture seamlessly, empowering you to build your projects as they should be.
                    </p>
                </div>       
                <div className={clsx('row', styles.featuresSection)}>
                    {featureColumns.map((featureItems, i) => (
                        <div className={clsx('col col--4', styles.feature)} key={`feature-col-${i}`}>
                            {featureItems.map(props => (
                                <Feature key={props.id} {...props} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
