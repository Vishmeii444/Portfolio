import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1E3226] pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER - Kept aligned with your other pages */}
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
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I’ll try my best to get back to
                you!
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              <div className="group cursor-pointer">
                <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.3em] mb-1">
                  Email
                </p>
                <p className="text-white text-xl font-medium group-hover:text-[#CCB363] transition-colors">
                  vishmihimashag@gmail.com
                </p>
              </div>

              <div>
                <p className="text-[#CCB363] font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
                  Socials
                </p>
                <div className="flex flex-wrap gap-3">
                  {["LinkedIn", "GitHub"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[#fbedc3] border-b border-[#CCB363]/30 pb-1 hover:border-[#CCB363] hover:text-[#CCB363] transition-all text-sm font-medium"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORM SIDE - Glassmorphic Card instead of Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative group"
          >
            {/* Subtle Glow behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CCB363]/20 to-[#1E3226] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-[#16261d] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all placeholder:text-white/20"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all placeholder:text-white/20"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-[#1E3226]/50 border border-white/5 rounded-none border-b-white/20 p-3 text-white focus:outline-none focus:border-b-[#CCB363] transition-all resize-none placeholder:text-white/20"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 bg-[#CCB363] py-4 text-[#1E3226] font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-[#fbedc3]"
                >
                  Send Inquiry
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
