import styles from './ProductListItem.module.css'

export default function ProductListItem({appellation, vignoble, description, prix, promo}) {
    return (
        <article className={styles.card}>
            <div>
                <p className={promo ? styles.promotion : ""}>{prix.toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',}
                )}</p>
            </div>
            <div className={styles.content}>
                <p>{appellation}</p>
                <p>{vignoble}</p>
                <p>{description}</p>
            </div>
        </article>
    );
}