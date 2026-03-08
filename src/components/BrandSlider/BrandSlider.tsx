import styles from './BrandSlider.module.css'


export const BrandSlider = () => {

    return (
        <>
            <div className={styles.carouselStyle}>
                <div className={styles.groupStyle}>
                    <div className={styles.cardStyle}>1</div>
                    <div className={styles.cardStyle}>2</div>
                    <div className={styles.cardStyle}>3</div>
                    <div className={styles.cardStyle}>4</div>
                    <div className={styles.cardStyle}>5</div>
                    <div className={styles.cardStyle}>6</div>
                </div>

                <div aria-hidden className={styles.groupStyle}>
                    <div className={styles.cardStyle}>1</div>
                    <div className={styles.cardStyle}>2</div>
                    <div className={styles.cardStyle}>3</div>
                    <div className={styles.cardStyle}>4</div>
                    <div className={styles.cardStyle}>5</div>
                    <div className={styles.cardStyle}>6</div>
                </div>
            </div>
        </>
    )
}