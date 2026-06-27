import styles from "./LegalContent.module.css";

export default function LegalContent({ policy, lastUpdated }) {
  return (
    <article className={styles.article}>
      <p className={styles.updated}>Last updated: {lastUpdated}</p>
      <p className={styles.intro}>{policy.intro}</p>

      {policy.sections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <h2 className={styles.heading}>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className={styles.list}>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
