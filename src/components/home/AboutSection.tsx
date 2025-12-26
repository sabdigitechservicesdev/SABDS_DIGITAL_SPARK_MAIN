import React, { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import person from "../../assets/person.png";

const AboutSection = () => {
  const ref = useRef(null);

  useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 font-montserrat "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Know About Us
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            We Optimize Your Funnel For <br />
            <span className="text-blue-600">Higher Conversions</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            We help businesses grow faster by building conversion-focused
            digital experiences backed by analytics, automation, and scalable
            architecture.
          </p>

          {/* FEATURES */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Innovative Solutions',
              'Secure Transactions',
              'User-Friendly Interface',
              'Real-Time Analytics',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="mt-10">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
              <span>Marketing Performance</span>
              <span className="text-blue-600">86%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '86%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center">

          {/* Soft Glow */}
          <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-3xl" />

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-8 w-14 h-14 rounded-xl bg-blue-100 shadow-md"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 right-10 w-10 h-10 rounded-full bg-blue-200 shadow-sm"
          />

          <motion.div
            animate={{ x: [0, 16, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-6 w-16 h-1 bg-blue-400/60 rounded-full"
          />

          {/* PERSON IMAGE WITH BREATH EFFECT */}
          <motion.img
            src={person}
            alt="Consultant"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ 
              scale: [1, 1.03, 1],
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="
              relative z-10
              w-[420px] lg:w-[500px]
              drop-shadow-2xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
