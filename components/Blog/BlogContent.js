import styles from "./BlogContent.module.css";

export default function BlogContent({ sections }) {
  return (
    <div className={styles.content}>
      {sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h2 key={index} className={styles.heading}>
              {section.text}
            </h2>
          );
        }

        if (section.type === "list") {
          return (
            <ul key={index} className={styles.list}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className={styles.paragraph}>
            {section.text}
          </p>
        );
      })}
    </div>
  );
}
