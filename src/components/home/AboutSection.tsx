import React, { useRef } from 'react';
import { CheckCircle, TrendingUp, ArrowUpRight, Percent } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);

  useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const chartData = [30, 50, 75, 95];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 font-montserrat bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT - Exactly Same */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Know About Us
          </p>

          {/* <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            We Build Growth Systems For <br />
            <span className="text-blue-600">Modern Brands</span>
          </h2> */}

                   <h2 className="text-4xl md:text-5xl font-extrabold">
             We Build Growth Systems For <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Brands</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            We combine performance marketing, automation and analytics to
            create scalable digital funnels that increase revenue and maximize ROI.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              'Performance Marketing',
              'Automation Systems',
              'Advanced Analytics',
              'Conversion Optimization',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="mt-12">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
              <span>Campaign Performance</span>
              <span className="text-blue-600">94%</span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '94%' }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-blue-700 transition"
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE - Percentage Based */}
        <div className="relative flex items-center justify-center py-10">
          
          {/* Main Chart Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-[480px]"
          >
            {/* Chart Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Performance Metrics
                </h4>
                <h3 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-blue-600" />
                  Growth Overview
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-blue-600">+216%</span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-72">

              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="border-t border-gray-100"
                    style={{ borderWidth: '0.5px' }}
                  />
                ))}
              </div>

              {/* Bars Container */}
              <div className="absolute inset-0 flex items-end justify-around px-4">
                {chartData.map((height, index) => {
                  const barHeight = (height / 100) * 220;
                  const percentage = [30, 50, 75, 95][index];
                  
                  return (
                    <div key={index} className="relative flex flex-col items-center">
                      {/* Bar - Original Color & Animation */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: barHeight }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.15,
                          ease: [0.34, 1.26, 0.64, 1]
                        }}
                        viewport={{ once: true }}
                        className="w-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl shadow-xl"
                        style={{
                          boxShadow: '0 12px 28px rgba(37, 99, 235, 0.3)'
                        }}
                      >
                        {/* Value Badge with Percentage */}
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 + index * 0.15 }}
                          className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                        >
                          {percentage}%
                        </motion.div>
                      </motion.div>

                      {/* Month Label - 1st, 2nd, 3rd, 4th */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        className="text-sm font-medium text-gray-500 mt-5"
                      >
                        {index === 0 ? '1st Month' : 
                         index === 1 ? '2nd Month' : 
                         index === 2 ? '3rd Month' : '4th Month'}
                      </motion.span>
                    </div>
                  );
                })}
              </div>

              {/* Curvy Line with Arrow Tip - Original */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 480 288">
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="5"
                      orient="auto"
                    >
                      <path
                        d="M0 0 L10 5 L0 10 L2 5 Z"
                        fill="#3B82F6"
                      />
                    </marker>
                  </defs>
                  
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    d="M40 200 Q 140 80 220 140 T 420 40"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            </div>

            {/* Growth Message - Now with Percentage */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-6 bg-blue-50 p-3 rounded-xl border border-blue-100"
            >
              <p className="text-xs text-gray-600 flex items-center gap-2 flex-wrap">
                <span className="text-blue-600 font-bold">📈 Your business grows</span>
                <span className="text-gray-400">from</span>
                <span className="font-bold text-green-600">30%</span>
                <span className="text-gray-400">to</span>
                <span className="font-bold text-blue-600">95%+</span>
                <span className="text-gray-400">in just 4 months</span>
              </p>
            </motion.div>

            {/* Stats Cards - Now with Percentage */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Start', value: '30%', delay: 1.4, color: 'text-gray-900' },
                { label: 'Current', value: '95%', delay: 1.5, color: 'text-blue-600' },
                { label: 'Growth', value: '+216%', delay: 1.6, color: 'text-green-600' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay }}
                  className="text-center bg-white/50 py-2 rounded-xl"
                >
                  <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                  <p className={`text-base font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Arrow - Original */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-8 right-0 text-blue-400/40"
            >
              <ArrowUpRight size={56} strokeWidth={1} />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;