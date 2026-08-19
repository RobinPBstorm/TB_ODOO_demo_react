import ProductListItem from "../ProductListItem/ProductListIem";
import styles from "./ProductList.module.css"


export default function ProductList() {
    const vins = [
        {
            id: 1,
            appellation: "Barolo",
            vignoble: "Abbona",
            description:
                "La couleur est rouge grenat avec des reflets rubis. L'arôme est intense et persistant avec des traces distinctes d'épices, de cannelle, d'absinthe, de tabac et de rose sauvage. Le goût est ample et élégant, avec des tanins souples. Les arômes épicés et boisés se marient parfaitement.",
            prix: 55.9,
            promo: false,
        },
        {
            id: 2,
            appellation: "Salice Salentino",
            vignoble: "A6MANI",
            description:
                "Situé dans le talon de la botte italienne, ce petit domaine familial de 10 hectares se trouve à proximité du village mytique de Salice Salentino, le temple des vins des Pouille, et produit des vins àpartir de 2 cépages: Nero Amaro et Malvasia Rosso.Autrefois, la production de cette région dépassait celle de la Sicile et de la Vénétie mais depuis quelques années les producteurs des Pouilles se sont concentrés sur la qualité des vins.Les vins étaient plus puissants auparavant, mais les vinifications soignées, dirigées par les 3 cousines ont donné des vins plus fruités, éclatants et plus élégants.",
            prix: 10.6,
            promo: true,
        },
        {
            id: 3,
            appellation: "Toscana",
            vignoble: "Cantina Gentili",
            description:
                "D’une robe rouge rubis éclatante, ce toscan aux arômes captivant de cerise croquante de myrtille, de framboise et de fraises des bois se parera, si on l’explore davantage, de fragrance végétale ou ressortira du thé noir, du genièvre et même de la livèche. Vinifié et élevé en cuve inox cet assemblage offre un corps structuré et fruité qui reste agréablement frais et en fais un vin élancé qui s’apprécie pour sa facilité de dégustation. En bouche ce vin rouge se caractérise par une texture particulièrement soyeuse et ses notes de fraises des bois et de cassis. Sa belle persistance ravive les appétits. Il apprécie particulièrement un service un peu plus frais pour vos apéritifs estivaux autour des charcuteries ou d’un plat de fromage par exemple.",
            prix: 12.8,
            promo: false,
        },
    ];



    return (
        <section className={styles.container}>
            {
                vins.map(vin => <ProductListItem key={vin.id} {...vin}></ProductListItem>)
            }
        </section>
    )
}