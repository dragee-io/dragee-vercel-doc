import clsx from 'clsx';
import PropTypes from 'prop-types';
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
        <div className={clsx('col col--4 margin-vert--lg', styles.feature)}>
            <div id={id} className="card">
                <div className="card__header">
                <h3>{title}</h3>
                </div>
                <div className="card__body">
                <p>
                    {description}
                </p>
                </div>
            </div>
        </div>
    );
}
Feature.propTypes = {
    id: PropTypes.string.isRequired,
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
