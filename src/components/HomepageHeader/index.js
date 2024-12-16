import Link from '@docusaurus/Link';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageHeader({ title, tagline }) {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {title}
                </Heading>
                <p className="hero__subtitle">{tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/asserters/clean-asserter"
                    >
                        Asserters
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/graphers/ddd-grapher"
                    >
                        Graphers
                    </Link>
                </div>
            </div>
        </header>
    );
}
HomepageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
};
