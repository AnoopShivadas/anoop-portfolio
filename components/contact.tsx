"use client";

import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";
import { motion } from "framer-motion";
import Link from "next/link";
import { createRef, FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

import { EXTRA_LINKS } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const recaptchaRef = createRef<ReCAPTCHA>();

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const handleCaptchaChange = (value: string | null) => {
    if (!value) return;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          subject: "Portfolio Contact Form",
          "g-recaptcha-response": value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          toast.success("Message sent successfully. I’ll get back to you soon!");
        },
        (error: EmailJSResponseStatus) => {
          console.error(error);
          toast.error(error.text ?? "Something went wrong!");
        }
      )
      .finally(() => {
        setLoading(false);
        recaptchaRef?.current?.reset();
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const validateForm = (): boolean => {
    const { name, email, message } = form;

    if (name.trim().length < 3) {
      toast.error("Invalid Name");
      return false;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim().toLowerCase().match(emailRegex)) {
      toast.error("Invalid E-mail");
      return false;
    }

    if (message.trim().length < 5) {
      toast.error("Invalid Message");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return false;

    setLoading(true);

    recaptchaRef.current?.execute();
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-600 -mt-6 dark:text-white/80">
        Feel free to reach out for opportunities, collaborations, or any queries.
        <Link className="underline ml-1" href={`mailto:${EXTRA_LINKS.email}`}>
          e-mail
        </Link>{" "}
        or through this form.
      </p>

      {/* FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-4 p-6 rounded-2xl 
        bg-white dark:bg-white/5 
        border border-gray-200 dark:border-white/10 
        backdrop-blur-xl shadow-lg"
      >
        {/* NAME */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
          placeholder="Your name"
          className="h-14 px-4 rounded-lg 
          bg-white dark:bg-white/10
          text-black dark:text-white
          placeholder:text-gray-500 dark:placeholder:text-white/50
          border border-gray-300 dark:border-white/10
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
          outline-none transition-all"
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg 
          bg-white dark:bg-white/10
          text-black dark:text-white
          placeholder:text-gray-500 dark:placeholder:text-white/50
          border border-gray-300 dark:border-white/10
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
          outline-none transition-all"
          required
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          disabled={loading}
          placeholder="Your message"
          className="h-52 p-4 rounded-lg 
          bg-white dark:bg-white/10
          text-black dark:text-white
          placeholder:text-gray-500 dark:placeholder:text-white/50
          border border-gray-300 dark:border-white/10
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
          outline-none transition-all resize-none"
          required
        />

        {siteKey && (
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={siteKey}
            onChange={handleCaptchaChange}
          />
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="group relative self-center mt-4 px-8 py-3 rounded-full 
          bg-gradient-to-r from-blue-600 to-purple-600 
          text-white font-medium 
          shadow-lg shadow-blue-500/20
          transition-all duration-300 
          hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
          active:scale-95
          disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-2">
            {loading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
              <>
                Send Message
                <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </span>

          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition"></span>
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;