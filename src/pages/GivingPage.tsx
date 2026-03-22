import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, CreditCard, Building2, Smartphone, Gift, Users, Globe, Church } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const givingMethods = [
    {
        icon: CreditCard,
        title: "Online Giving",
        description: "Give securely online with your credit or debit card",
        action: "Give Now",
    },
    {
        icon: Building2,
        title: "Bank Transfer",
        description: "Set up a direct bank transfer or standing order",
        details: "Account: 12345678, Sort: 12-34-56",
    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description: "Download our app for easy mobile giving",
        action: "Download App",
    },
    {
        icon: Church,
        title: "In Person",
        description: "Give during our Sunday services",
        details: "Offering boxes available at both campuses",
    },
]

const givingImpact = [
    {
        icon: Users,
        title: "Local Community",
        description: "Supporting families, food banks, and community outreach programs",
        percentage: "40%",
    },
    {
        icon: Church,
        title: "Church Operations",
        description: "Maintaining facilities, staff, and weekly services",
        percentage: "35%",
    },
    {
        icon: Globe,
        title: "Global Missions",
        description: "Supporting missionaries and church planting worldwide",
        percentage: "25%",
    },
]

const faqs = [
    {
        question: "Is my giving secure?",
        answer: "Yes, all online transactions are encrypted and secure. We use industry-standard security measures to protect your information.",
    },
    {
        question: "Can I set up recurring giving?",
        answer: "Absolutely! You can set up weekly, monthly, or custom recurring donations through our online platform or by bank transfer.",
    },
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, Liberty Church is a registered charity. We can provide tax receipts for all donations over £20.",
    },
    {
        question: "How is my donation used?",
        answer: "Your donations support our local ministry, global missions, and community outreach. We maintain full financial transparency with annual reports.",
    },
]

export default function GivingPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const isHeroInView = useInView(heroRef, { once: true })

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-cream overflow-hidden"
            >
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isHeroInView ? { opacity: 0.05 } : {}}
                        className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isHeroInView ? { scale: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                            className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6"
                        >
                            <Heart className="w-10 h-10 text-gold" />
                        </motion.div>

                        <span className="text-gold text-sm font-medium tracking-widest uppercase">
                            Generosity
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mt-4 mb-6 text-balance">
                            Give
                        </h1>
                        <p className="text-muted-foreground text-xl leading-relaxed">
                            Your generosity helps us share the love of Jesus in our community
                            and around the world. Thank you for partnering with us in ministry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why We Give */}
            <section className="py-16 md:py-24 bg-warm-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                            Why We Give
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Giving is an act of worship and obedience. When we give, we acknowledge
                            that everything we have comes from God. We give cheerfully, not out of
                            obligation, but out of gratitude for what God has done for us.
                        </p>
                        <div className="mt-8 p-6 bg-gold/10 rounded-2xl">
                            <p className="text-charcoal italic text-lg">
                                "Each of you should give what you have decided in your heart to give,
                                not reluctantly or under compulsion, for God loves a cheerful giver."
                            </p>
                            <p className="text-gold font-medium mt-2">2 Corinthians 9:7</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Giving Methods */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                            Ways to Give
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the method that works best for you
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {givingMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full border-border/50 hover:shadow-lg transition-all">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                                            <method.icon className="w-7 h-7 text-gold" />
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                                            {method.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {method.description}
                                        </p>
                                        {method.details && (
                                            <p className="text-xs text-charcoal/70 mb-4 font-mono">
                                                {method.details}
                                            </p>
                                        )}
                                        {method.action && (
                                            <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal rounded-full">
                                                {method.action}
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="py-16 md:py-24 bg-warm-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                            Your Impact
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            See how your generosity makes a difference
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {givingImpact.map((impact, index) => (
                            <motion.div
                                key={impact.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                <Card className="border-border/50 hover:shadow-lg transition-all h-full">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                                            <impact.icon className="w-8 h-8 text-gold" />
                                        </div>
                                        <div className="text-4xl font-bold text-gold mb-2">
                                            {impact.percentage}
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                                            {impact.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {impact.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="border-border/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-charcoal text-warm-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Gift className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Give?
                        </h2>
                        <p className="text-warm-white/80 text-lg mb-8">
                            Thank you for your generosity. Your gift makes a real difference
                            in the lives of people in our community and around the world.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gold hover:bg-gold-dark text-charcoal font-medium rounded-full px-8 py-6 text-lg"
                        >
                            Give Online Now
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
