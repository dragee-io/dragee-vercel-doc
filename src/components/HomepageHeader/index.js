import PropTypes from 'prop-types';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageHeader({ title, subtitle }) {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <Heading as="h1" className={styles.heroBannerTitle}>
                    {title}
                </Heading>
                <p className={styles.heroBannerSubtitle}>{subtitle}</p>
            </div>
        </header>
    );
}
HomepageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
