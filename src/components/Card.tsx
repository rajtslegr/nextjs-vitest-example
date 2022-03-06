import styles from '../styles/Home.module.css'

interface CardProps {
  link: string;
  header: string;
  content: string;
}

const Card: React.FC<CardProps> = ({link, header, content}) => {
  return (
    <a href={link} className={styles.card}>
      <h2>{header}</h2>
      <p>{content}</p>
    </a>
  );
};

export default Card;
