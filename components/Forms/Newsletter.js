"use client";

import { useState } from "react";
import Button from "@/components/Buttons/Button";
import styles from "./Newsletter.module.css";

export default function Newsletter({ className, title = "Subscribe to our newsletter" }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <div className={`${styles.newsletter} ${className || ""}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        Stay updated with the latest news and offers. (Placeholder — no backend connected.)
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          className={styles.input}
          placeholder="Enter your email"
          required
          autoComplete="email"
          disabled={status === "submitted"}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "submitted"}
        >
          {status === "submitted" ? "Subscribed" : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
