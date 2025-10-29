import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields", { id: "error" });
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name,
          email,
          message, // must match your template
        },
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData(initialState);
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        toast.error("Failed to send message");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="w-full relative select-none bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <Toaster toastOptions={toastOptions} />

      <div className="section-container flex flex-col justify-center items-center">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-purple-400">Contact</p>
          <h1 className="text-5xl mt-2 font-semibold text-purple-500">
            Get In Touch
          </h1>
          <p className="text-gray-400 mt-3">
            I’d love to hear from you! Send me a message below 👇
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-black/80 border-2 border-purple-600 rounded-2xl shadow-lg shadow-purple-800/40 p-10 w-[90%] sm:w-[30rem] md:w-[35rem]">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative mb-8">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full h-12 px-4 text-lg text-white bg-transparent rounded-md border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="relative mb-8">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full h-12 px-4 text-lg text-white bg-transparent rounded-md border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div className="relative mb-8">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full min-h-[10rem] px-4 py-3 text-lg text-white bg-transparent rounded-md border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {isSending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
