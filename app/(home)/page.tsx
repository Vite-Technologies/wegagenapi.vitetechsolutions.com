"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Zap,
  Building2,
  Globe,
  Terminal,
  Layers,
  Lock,
  Cpu,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section - Clean & Minimal */}
      <section className="relative px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
          <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Zap className="mr-1.5 h-3 w-3" />
              v2.0 Live
            </span>
            <span className="text-xs text-muted-foreground">
              Now serving Wegagen Bank
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Enterprise payments,
            <br />
            <span className="text-primary">simplified.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg"
          >
            Prana Connect is the middleware that bridges your platform to
            Wegagen Bank. Secure, NBE-compliant, and built for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs/api-reference"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              API Reference
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight">
              Built for enterprise scale
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to process payments at scale.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 auto-rows-fr">
            {/* Large Card - Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:col-span-2 md:row-span-2"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">NBE Compliant & Secure</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Fully compliant with National Bank of Ethiopia regulations.
                End-to-end encryption, PCI-DSS standards, and bank-grade
                security.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  <span>256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Cpu className="h-3 w-3" />
                  <span>PCI-DSS</span>
                </div>
              </div>
            </motion.div>

            {/* Small Card - Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Drop-in Integration</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Minimal code changes. Works with your existing stack.
              </p>
            </motion.div>

            {/* Small Card - Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">High Throughput</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Enterprise scale with low latency processing.
              </p>
            </motion.div>

            {/* Small Card - Multi-tenant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Multi-Tenant</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Perfect for SaaS and institutions.
              </p>
            </motion.div>

            {/* Small Card - Developer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Developer First</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                SDKs, webhooks, and comprehensive APIs.
              </p>
            </motion.div>

            {/* Small Card - Global */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Local Focus</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Amharic support and Ethiopian payment methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-size-[32px_32px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to integrate?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
                Get started with Prana Connect in minutes. Full documentation,
                SDKs, and support included.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center justify-center rounded-lg bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
                >
                  Quick Start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 bg-transparent px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <span className="font-semibold">Prana Connect</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                Enterprise payment middleware for Wegagen Bank. Secure,
                scalable, and developer-friendly.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api-reference"
                    className="hover:text-foreground"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/docs/sdks" className="hover:text-foreground">
                    SDKs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="hover:text-foreground cursor-pointer">
                    About
                  </span>
                </li>
                <li>
                  <span className="hover:text-foreground cursor-pointer">
                    Contact
                  </span>
                </li>
                <li>
                  <span className="hover:text-foreground cursor-pointer">
                    Status
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Prana Connect. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                Privacy
              </span>
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                Terms
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
