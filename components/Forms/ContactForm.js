"use client";

import { useState } from "react";
import Button from "@/components/Buttons/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm({ className }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <form
      className={`${styles.form} ${className || ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            className={styles.input}
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            className={styles.input}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>
          Subject
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          className={styles.input}
          placeholder="How can we help?"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.textarea}
          placeholder="Your message..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" variant="primary" size="md" disabled={status === "submitted"}>
        {status === "submitted" ? "Message Sent" : "Send Message"}
      </Button>

      {status === "submitted" && (
        <p className={styles.success} role="status">
          Thank you! Your message has been received. (Placeholder — no backend connected.)
        </p>
      )}
    </form>
  );
}
