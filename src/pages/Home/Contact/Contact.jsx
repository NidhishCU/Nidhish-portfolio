import React from 'react'
import styles from './Contact.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import EarthCanvas from '../../../components/EarthCanvas/EarthCanvas';
import Form from './Form/Form';
import StarBackgroundImage from './StarBackgroundImage/StarBackgroundImage';
// import StarsCanvas from '../../../components/StarCanvas/StarCanvas';

const Contact = ({ children }) => {
    return (
        <div className={styles.contactcontainer}>
        <section id="contact" className={styles.contact}>
            <SectionHeading
                subText="Get In Touch"
                headText="Say Hello"
            />
            <div className={styles.container}>
                <Form className={styles.dsizeF} />
                <EarthCanvas className={styles.dsizeE} />
            </div>
            {/* <StarsCanvas /> */}
            <StarBackgroundImage />
            {children}
        </section>
        </div>
    )
}

export default Contact;