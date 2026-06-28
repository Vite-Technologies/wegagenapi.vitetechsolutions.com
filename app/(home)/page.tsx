"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CircleAlert,
  KeyRound,
  ServerCog,
  ShieldCheck,
  Workflow,
  Terminal,
  Code2,
} from "lucide-react";

const integrationSteps = [
  {
    step: "1",
    title: "Retrieve your secret key",
    description:
      "Collect your pm_test_ or pm_live_ key from the developer dashboard and store it only on your secure backend.",
  },
  {
    step: "2",
    title: "Create an order",
    description:
      "Send a JSON request to the create-order endpoint with customer, amount, payment method, services, and notify_url.",
  },
  {
    step: "3",
    title: "Track the lifecycle",
    description:
      "Listen for asynchronous notifications and use the order status endpoint to confirm pending, paid, or fail states.",
  },
];

const endpointCards = [
  {
    title: "Create Order",
    href: "/docs/orders/create-order",
    method: "POST",
    path: "/api/orders/create-order",
    description:
      "Initiate a transaction route and trigger the selected payment method in real time.",
  },
  {
    title: "Retrieve Order Status",
    href: "/docs/orders/retrieve-order-status",
    method: "GET",
    path: "/api/orders/:orderId/status",
    description:
      "Poll the current state of a transaction when your system needs a direct status check.",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span>Wegagen Connect API powered by Prana Connect</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-4xl text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1]"
        >
          Secure payment middleware for <br className="hidden sm:block" />
          <span className="text-muted-foreground">merchant platforms.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Wegagen Connect is a REST API middleware that bridges merchant systems
          directly to Wegagen Bank&apos;s core payment infrastructure. Initiate
          transactions, validate requests, and track payment states in real
          time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary/20"
          >
            Start integrating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/docs/orders/create-order"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Terminal className="mr-2 h-4 w-4 text-muted-foreground" />
            Explore create-order
          </Link>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="px-6 py-24 lg:px-8 border-t border-border/50 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for production-grade integrations
            </h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
              Everything you need to connect your enterprise applications with
              Wegagen Bank reliably and securely.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Large Box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:col-span-2 hover:border-primary/30 transition-colors"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <ServerCog className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold">
                Direct bank connectivity
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-md">
                Route merchant orders directly into Wegagen Bank&apos;s payment
                infrastructure through a secure middleware layer built for high
                availability.
              </p>
            </motion.div>

            {/* Small Box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
            >
              <KeyRound className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-lg font-semibold">Backend-only auth</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Every request is authenticated with the x-secret-key header.
                Sandbox or production is inferred from the key prefix.
              </p>
            </motion.div>

            {/* Small Box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
            >
              <CircleAlert className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-lg font-semibold">Structured payloads</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Debug faster with consistent JSON responses that include
                statusCode, timestamp, path, message, and requestId.
              </p>
            </motion.div>

            {/* Large Box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:col-span-2 hover:border-primary/30 transition-colors"
            >
              <div className="absolute inset-0 bg-linear-to-tl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Activity className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold">
                Real-time status handling
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-md">
                Create orders, receive webhook notifications on your notify_url,
                and poll order status when needed. Webhooks and polling are
                complementary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Flow Timeline */}
      <section className="px-6 py-24 lg:px-8 border-t border-border/50 bg-muted/20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                <Workflow className="h-3.5 w-3.5" />
                <span>Integration Flow</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                From dashboard key to cleared transaction in three steps.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The recommended workflow is straightforward: provision a secure
                backend secret, create the order, and reconcile the outcome via
                webhook or status polling.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-border md:left-8" />
              <div className="space-y-8">
                {integrationSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-14 md:pl-20"
                  >
                    <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border-[6px] border-muted bg-background text-sm font-bold text-primary shadow-sm md:left-2">
                      {item.step}
                    </div>
                    <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="px-6 py-24 lg:px-8 border-t border-border/50 bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            <Code2 className="h-3.5 w-3.5" />
            <span>Developer Experience</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">
            The order lifecycle is intentionally small and clear.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Send the same create-order request from the backend stack your team
            already uses. All integrations use secure server-side execution.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
            {endpointCards.map((endpoint) => (
              <Link
                key={endpoint.title}
                href={endpoint.href}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/30"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {endpoint.method}
                    </span>
                    <code className="text-xs text-muted-foreground font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <h3 className="text-lg font-medium">{endpoint.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {endpoint.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  View documentation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24 lg:px-8 border-t border-border/50 bg-muted/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to integrate with Wegagen Bank?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Use the documentation as your implementation guide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read getting started
            </Link>
            <Link
              href="/docs/tutorial"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View full tutorial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
