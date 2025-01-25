"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "What you think, about me?";

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default_service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "default_template_id",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "default_public_key"
      )
      
  };

  return (
    <motion.div
      className="h-full relative overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="bg-circle bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full"
          initial={{ x: "-50%", y: "-50%", scale: 0.5 }}
          animate={{ x: ["-50%", "50%", "-50%"], y: ["-50%", "50%", "-50%"], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "400px", height: "400px", position: "absolute" }}
        />
        <motion.div
          className="bg-circle bg-gradient-to-r from-pink-400 to-yellow-500 opacity-30 rounded-full"
          initial={{ x: "50%", y: "50%", scale: 0.5 }}
          animate={{ x: ["50%", "-50%", "50%"], y: ["50%", "-50%", "50%"], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "500px", height: "500px", position: "absolute" }}
        />
      </div>

      {/* Content */}
      <div className="contactContainer mx-8 flex items-center flex-col lg:flex-row lg:items-center lg:justify-center lg:mx-60 relative z-10">
        {/* Title Section */}
        <div className="mb-12 lg:w-1/2">
          <h1 className="text-2xl lg:text-7xl">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 0,
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Form Section */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full h-auto flex flex-col justify-center bg-gradient-to-b from-slate-400 to-blue-300 rounded-lg text-white py-6 px-10 lg:w-1/2 lg:py-16 shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-shadow duration-300"
        >
          <motion.span
            className="text-xl lg:text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            Hello, Rian
          </motion.span>

          <motion.textarea
            rows={3}
            name="user_message"
            placeholder="Write your message here..."
            className="bg-transparent border-b-2 outline-none mb-3 text-2xl"
            required
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          />

          <motion.span
            className="text-xl mb-3 lg:text-2xl lg:mb-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Your Email Address:
          </motion.span>

          <motion.input
            type="email"
            name="user_email"
            placeholder="example@mail.com"
            className="bg-transparent border-b-2 outline-none lg:text-2xl lg:mb-5 invalid:text-pink-700 peer"
            required
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          />
          <p className="text-sm md:text-base top-0 text-pink-500 invisible peer-invalid:visible">
            Email is not valid
          </p>

          <motion.button
            type="submit"
            className="bg-slate-500 text-xl mt-4 rounded-full mx-24 duration-[0.4s] ease-in-out hover:bg-slate-400 py-2 lg:text-4xl mb-4"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>

          {success && (
            <motion.span
              className="text-green-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Your message has been sent successfully!
            </motion.span>
          )}

          {error && (
            <motion.span
              className="text-red-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Something went wrong!
            </motion.span>
          )}
        </motion.form>
      </div>
      <div className="mb-4"></div>
    </motion.div>
  );
};

export default ContactPage;
