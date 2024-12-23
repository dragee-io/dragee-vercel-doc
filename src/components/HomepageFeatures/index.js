import Heading from '@theme/Heading';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Dragee for software architecture',
        id: 'dragee',
        src: require('@site/static/img/dragee_logo.png').default,
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
        src: require('@site/static/img/tech_img.jpg').default,
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
        title: 'Made by HoppR',
        id: 'hoppr',
        src: require('@site/static/img/hoppr_logo.jpg').default,
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

function Feature({ src, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureImg} src={src} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}
Feature.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map(props => (
                        <Feature key={props.id} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
