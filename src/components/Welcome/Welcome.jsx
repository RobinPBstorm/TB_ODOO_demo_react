import styles from './Welcome.module.css'

export default function Welcome({ nom, age = 18 }) {
    return (
        <article className={styles.article}>
            <p>Bienvenue {nom} sur l'application react!</p>
            <p>Vous avez {age} ans!</p>
        </article>
    );
}