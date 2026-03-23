import { motion } from "framer-motion";
import { useState, useRef } from "react"; // Added useRef
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  // We keep the state for UI control, but use useRef for the actual email sending
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vishmi-gangodawila/" },
    { name: "GitHub", url: "https://github.com/Vishmeii444" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send message. Please check your connection.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#1E3226] pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-[#CCB363] uppercase tracking-tighter"
          >
            Contact.
          </motion.h1>
          <div className="h-[2px] w-12 bg-[#CCB363] mt-2" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* INFO SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-3xl mb-4 italic font-['Outfit']">
                Let's connect.
              </h3>
              <p className="text-[#fbedc3]/60 leading-relaxed text-lg">
                I'm currently looking for new opportunities. If you have any
                questions, feel free to contact me.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              <div className="group cursor-pointer">
                <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.3em] mb-1">
                  Email
                </p>
                <a
                  href="mailto:vishmihgangodawila@gmail.com"
                  className="text-white text-xl font-medium group-hover:text-[#CCB363] transition-colors block"
                >
                  vishmihgangodawila@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
                  Socials
                </p>
                <div className="flex flex-wrap gap-6">
                  {socials.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fbedc3] border-b border-[#CCB363]/30 pb-1 hover:border-[#CCB363] hover:text-[#CCB363] transition-all text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CCB363]/20 to-[#1E3226] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-[#16261d] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    required
                    type="text"
                    name="name" // Matches {{name}} in EmailJS template
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all placeholder:text-white/20"
                  />
                  <input
                    required
                    type="email"
                    name="email" // Matches {{email}} in EmailJS template
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all placeholder:text-white/20"
                  />
                </div>
                <textarea
                  required
                  name="message" // Matches {{message}} in EmailJS template
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all resize-none placeholder:text-white/20"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`mt-4 py-4 font-bold uppercase tracking-[0.4em] text-[10px] transition-all ${
                    submitted
                      ? "bg-green-700 text-white"
                      : "bg-[#CCB363] text-[#1E3226] hover:bg-[#fbedc3]"
                  }`}
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitted
                      ? "Message Sent!"
                      : "Send Inquiry"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;