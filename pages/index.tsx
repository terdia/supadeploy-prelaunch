import React, { useRef, ReactNode } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Database, Github, Linkedin, Twitter, Zap, Shield, Settings, HelpCircle, Check, Menu, Mail } from "lucide-react"

export default function PresaleLandingPage() {
  const featuresRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const faqsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const stayUpdatedRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm dark:bg-gray-800/80 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">SupaDeploy</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <button onClick={() => scrollToSection(featuresRef)} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection(faqsRef)} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            FAQs
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Contact
          </button>
          <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/login">
            Login
          </Link>
        </nav>
        <button className="md:hidden ml-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          <button onClick={() => scrollToSection(featuresRef)} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900">
            Features
          </button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900">
            Testimonials
          </button>
          <button onClick={() => scrollToSection(faqsRef)} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900">
            FAQs
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900">
            Contact
          </button>
          <Link className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900" href="/login">
            Login
          </Link>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                Simplify Self-Hosting Supabase
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Deploy Supabase locally or in the cloud effortlessly with our all-in-one solution. Save time, reduce complexity, and focus on building great applications.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8">
                  Pre-order Now at 50% Off
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection(stayUpdatedRef)} className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8">
                  Stay Updated
                </Button>
              </div>
              <p className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                Limited time offer! Get 50% off when you pre-order now.
              </p>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
              <img src="/api/placeholder/800/600" alt="SupaDeploy Dashboard" className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section ref={featuresRef} id="features" className="w-full py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />}
                title="Automated Deployment"
                description="One-click deployment scripts for Docker and Kubernetes."
              />
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />}
                title="User-Friendly Interface"
                description="Intuitive UI suitable for all skill levels."
              />
              <FeatureCard
                icon={<Settings className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />}
                title="Custom Configurations"
                description="Tailor deployments to your specific needs."
              />
              <FeatureCard
                icon={<HelpCircle className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />}
                title="Expert Support"
                description="Access to our team for guidance and assistance."
              />
            </div>
          </div>
        </section>
        
        {/* Pricing section */}
        <section className="w-full py-20 bg-indigo-50 dark:bg-indigo-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Unbeatable Pre-order Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">Get our product at an exclusive pre-launch price</p>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8">
                <p className="text-3xl sm:text-4xl font-bold line-through text-gray-400 dark:text-gray-500">$150</p>
                <p className="text-4xl sm:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-2">$75</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-300 mt-4">Limited Time Offer: 50% off</p>
                <ul className="mt-6 space-y-4 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Lifetime access to SupaDeploy</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full">
                  Pre-order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section ref={testimonialsRef} id="testimonials" className="w-full py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="This tool looks promising! Can't wait to try it out for our startup's backend needs."
                author="John Doe"
                title="Tech Enthusiast"
                avatar="/api/placeholder/100/100"
              />
              <TestimonialCard
                quote="The automated deployment feature could save us hours of work. Excited for the launch!"
                author="Jane Smith"
                title="DevOps Engineer"
                avatar="/api/placeholder/100/100"
              />
              <TestimonialCard
                quote="As a small business owner, I appreciate tools that simplify complex processes. This looks perfect."
                author="Mike Johnson"
                title="Small Business Owner"
                avatar="/api/placeholder/100/100"
              />
            </div>
          </div>
        </section>
        
        {/* FAQs section */}
        <section ref={faqsRef} id="faqs" className="w-full py-20 bg-indigo-50 dark:bg-indigo-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <FAQItem
                question="What is included in the pre-order?"
                answer="Your pre-order includes lifetime access to our SupaDeploy platform at 50% off the regular price."
              />
              <FAQItem
                question="When will I receive access to the product?"
                answer="We're aiming to launch in Q3 2023. All pre-order customers will get early access before the public release."
              />
              <FAQItem
                question="What payment methods are accepted?"
                answer="We accept all major credit cards and PayPal for your convenience and security."
              />
            </div>
          </div>
        </section>

        {/* New Stay Updated section */}
        <section ref={stayUpdatedRef} id="stay-updated" className="w-full py-20 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Stay in the Loop</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Not ready to pre-order yet? No problem! Sign up for our newsletter to receive the latest
                updates, news, and release dates for SupaDeploy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Input
                  className="w-full sm:w-96 bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg text-lg py-2 px-6 transition duration-300 ease-in-out transform hover:scale-105">
                  Subscribe
                  <Mail className="ml-2 h-5 w-5 inline" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section ref={contactRef} id="contact" className="w-full py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Get in Touch</h2>
              <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-12">Have questions? We're here to help!</p>
              <form className="space-y-6">
                <Input
                  className="w-full"
                  placeholder="Your Name"
                  type="text"
                  required
                />
                <Input
                  className="w-full"
                  placeholder="Your Email"
                  type="email"
                  required
                />
                <Textarea
                  className="w-full"
                  placeholder="Your Message"
                  required
                  rows={6}
                />
                <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-base sm:text-lg py-4 sm:py-6">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">SupaDeploy</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-0">
            <Link className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
              Terms of Service
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023 SupaDeploy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-indigo-900">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

function TestimonialCard({ quote, author, title, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
    </div>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  )
}