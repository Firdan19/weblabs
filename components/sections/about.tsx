"use client";

import Container from "../common/container";
import { motion } from "framer-motion";
import { Sparkles, Zap, Globe2 } from "lucide-react";

export default function About() {
  const items = [
    {
      Icon: Sparkles,
      title: "Inovatif",
      desc: "Detail premium & estetika formal yang mendukung citra brand.",
      floatDelay: 0,
    },
    {
      Icon: Zap,
      title: "Responsif & Cepat",
      desc: "Optimasi performa dan SEO agar maksimal di semua perangkat.",
      floatDelay: 0.4,
    },
    {
      Icon: Globe2,
      title: "Dukungan Lokal",
      desc: "Mendorong brand lokal agar bersaing secara global.",
      floatDelay: 0.8,
    },
  ];

  return (
    <section id="tentang-kami" className="relative bg-white py-20 sm:py-24">
      <Container>
        {/* Hapus heading/garis dekoratif kiri-atas sesuai permintaan */}
        <div className="grid gap-12 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.18 }}
              className="max-w-[34rem] rounded-2xl p-1"
            >
              <motion.div
                whileHover={{
                  y: -2,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="rounded-xl bg-white/90 p-1"
              >
                {/* Icon + subtle glow */}
                <div className="mb-3 inline-flex items-center">
                  <motion.span
                    // float pelan
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 5.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: it.floatDelay,
                    }}
                    className="relative grid h-6 w-6 place-items-center"
                  >
                    <it.Icon className="h-6 w-6 text-[var(--gold)]" />
                    {/* glow sangat lembut */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-[6px] opacity-20"
                      style={{ background: "var(--gold)" }}
                    />
                  </motion.span>
                </div>

                <h3 className="text-[15px] sm:text-[16px] font-medium text-[var(--navy)]">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--navy)]/70">
                  {it.desc}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
