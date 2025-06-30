import React from "react";
import { CheckCircle2, Video, Mic, Users, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "./staggerContainer";
import { useTranslation } from "react-i18next";

const WorkerSection = () => {
  const { t } = useTranslation();
  const features = [
    t("home.partnerl1"),
    t("home.partnerl2"),
    t("home.partnerl3"),
  ];

  // Floating bubbles configuration
  const floatingBubbles = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    opacity: [0, 0.2 + Math.random() * 0.3, 0],
  }));

  const interviewFeatures = [
    {
      icon: <Video className="w-8 h-8" />,
      title: t("home.liveFeature1"),
      description: t("home.liveFeatured1"),
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: t("home.liveFeature2"),
      description: t("home.liveFeatured2"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("home.liveFeature3"),
      description: t("home.liveFeatured3"),
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: t("home.liveFeature4"),
      description: t("home.liveFeatured4"),
    },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src="/images/Off2work/1x/asset2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {floatingBubbles.map(
            (
              bubble // Fixed the spelling here
            ) => (
              <motion.div
                key={bubble.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: "100vh",
                  opacity: bubble.opacity,
                  transition: {
                    duration: bubble.duration,
                    repeat: Infinity,
                    delay: bubble.delay,
                    ease: "linear",
                  },
                }}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  left: `${bubble.x}%`,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* Seasonal Workers Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-[#3E3F48]/90 relative z-20 text-white py-16 px-6 md:px-20"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 0.2)}
            className="text-center md:text-left"
          >
            <motion.h2
              variants={textVariant(0.2)}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {t("home.seasonalwh")}
            </motion.h2>
            <motion.p
              variants={textVariant(0.4)}
              className="mb-8 text-lg md:text-xl leading-relaxed opacity-90"
            >
              {t("home.seasonalwp")}
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(2, 58, 81, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#023a51] hover:bg-[#035b7a] text-xl cursor-pointer hover:shadow-xl transition-all duration-300 text-white px-8 py-4 rounded-lg uppercase font-medium tracking-wide shadow-lg"
              onClick={() => {
                const section = document.querySelector("#get-in-touch");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("home.seasonalwbtn")}
            </motion.button>
          </motion.div>

          <motion.div variants={zoomIn(0.4, 1)} className="flex justify-center">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"
              ></motion.div>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src="/images/Off2work/seasonal-workers-from-our-network.jpeg"
                alt="Seasonal Workers"
                className="rounded-lg shadow-2xl relative w-full transform transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Productivity Partner Section */}
      <section className="relative z-20 py-16 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Animated background blobs */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-20 left-20 w-40 h-40 bg-[#023a51]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 md:mt-0"
          >
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.75 }}
                transition={{ duration: 0.8 }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-teal-900/5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"
              ></motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src="/images/Off2work/your-partner-in-boosting-productivity-and-growth.jpg"
                alt="Productivity Partner"
                className="relative rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-[1.03] w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-start mt-12 md:mt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-[#023a51]"
            >
              {t("home.partnerh")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray-700 bg-gray-100/50 rounded-md p-4 leading-relaxed"
            >
              {t("home.partnerp")}
            </motion.p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="text-[#023a51] w-7 h-7 flex-shrink-0 mt-1 group-hover:text-[#035b7a] transition-colors" />
                  </motion.div>
                  <p className="text-gray-700 text-base group-hover:text-gray-900 transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Interview Section */}
      <section className="relative z-20 py-24 px-6 md:px-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Off2work/live-interview-service.jpg"
            alt="Live Interview Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3E3F48]/90 to-[#023a51]/90"></div>
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 max-w-screen-xl mx-auto text-center"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t("home.liveInterh")}
          </motion.h2>

          <motion.p
            variants={textVariant(0.4)}
            className="mb-12 text-lg leading-relaxed max-w-3xl mx-auto opacity-90"
          >
            {t("home.liveInterp")}
          </motion.p>

          {/* Interview Features Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {interviewFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-[#023a51] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={zoomIn(0.6, 1)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f8f9fa",
              color: "#023a51",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#023a51] hover:bg-gray-100 px-8 py-3 uppercase rounded-lg font-bold tracking-wide shadow-md transition-all text-xl duration-300 cursor-pointer"
            onClick={() => {
              const section = document.querySelector("#get-in-touch");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("home.getint")}
          </motion.button>
        </motion.div>

        {/* Floating animated elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-30 z-0"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="absolute top-1/4 right-20 w-6 h-6 bg-white rounded-full opacity-20 z-0"
        />
      </section>
    </div>
  );
};

export default WorkerSection;
