import styles from "./innercomponents.module.css";
export default function InnerComponent({ children }) {
  return <div className={styles.InnerContent}>{children}</div>;
}
