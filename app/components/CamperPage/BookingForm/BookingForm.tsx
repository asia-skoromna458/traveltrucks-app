"use client";

import { useState } from "react";
import css from "./BookingForm.module.css";
import { bookingRequest } from "@/app/services/api";
import toast from "react-hot-toast";
import { MdErrorOutline } from "react-icons/md";

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
    };

    const validationErrors = {
      name: !data.name.trim()
        ? "Please enter your name."
        : !/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/.test(data.name)
          ? "Name can contain only letters."
          : data.name.trim().length < 2
            ? "Name must be at least 2 characters."
            : "",

      email: !data.email.trim()
        ? "Please enter your email."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
          ? "Please enter a valid email."
          : "",
    };

    setErrors(validationErrors);

    if (validationErrors.name || validationErrors.email) return;

    try {
      setIsLoading(true);

      await bookingRequest(camperId, data);

      toast.success("Booking successful!");

      form.reset();

      setErrors({
        name: "",
        email: "",
      });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>

      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
            name="name"
            type="text"
            placeholder="Name*"
          />

          {errors.name && <MdErrorOutline className={css.errorIcon} />}

          {errors.name && <p className={css.errorText}>{errors.name}</p>}
        </div>

        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
            name="email"
            type="email"
            placeholder="Email*"
          />

          {errors.email && <MdErrorOutline className={css.errorIcon} />}

          {errors.email && <p className={css.errorText}>{errors.email}</p>}
        </div>

        <button className={css.formButton} type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
