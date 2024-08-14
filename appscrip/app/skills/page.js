import Link from "next/link";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <article className={styles.article}>
      <img
        alt="banner"
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className={styles.image}
      />

      <div className={styles.content}>
        <Link href="#">
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </Link>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <Link href="#" className={styles.moreLink}>
          Find out more
          <span aria-hidden="true" className={styles.arrow}>
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
};

export default Skills;
