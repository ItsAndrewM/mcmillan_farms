import styles from "./textHero.module.css";

const TextHero = ({ tagline, headline, content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <small>{tagline}</small>
        <h1>{headline}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TextHero;
