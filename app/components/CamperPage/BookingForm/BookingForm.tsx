"use client";
import { useState } from "react";
import css from "./BookingForm.module.css";
import { bookingRequest } from "@/app/services/api";
interface bookingRequestProps {
  camperId: string;
}

export default function BookingForm({ camperId }: bookingRequestProps) {
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    try {
      await bookingRequest(camperId, data);

      setMessage("Booking successful!");
      e.currentTarget.reset();
    } catch {
      setMessage("Something went wrong");
    }
  }
  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="name"
          type="name"
          required
          placeholder="Name*"
        />
        <input
          className={css.input}
          name="email"
          type="email"
          required
          placeholder="Email*"
        />
        <button className={css.formButton} type="submit">
          Send
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
