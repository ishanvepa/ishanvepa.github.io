"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // <div className="bg-black bg-gradient-to-br from-primary/5 via-transparent to-accent/5 min-h-screen relative overflow-hidden">
    <div className="bg-black min-h-screen relative overflow-hidden">      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/3 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <header className="fixed inset-x-0 top-6 z-50 px-6 lg:px-8">
        <motion.nav 
          aria-label="Global" 
          className="mx-auto max-w-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop Navigation - Oval Glassomorphic */}
          <div className="hidden lg:flex items-center justify-center backdrop-blur-md bg-white/5 rounded-full px-8 py-4 shadow-lg">
            {/* <div className="flex items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ishan Vepa</span>
                <div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">IV</span>
                </div>
              </a>
            </div> */}
            
            <div className="flex items-center gap-x-8 justify-center">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-semibold text-white/90 hover:text-orange-300 transition-colors duration-200 relative group"
                >
                  {item.name}
                  {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-200"></span> */}
                </a>
              ))}
            </div>
            
            {/* <div className="flex items-center">
              <a 
                href="#" 
                className="text-sm font-semibold text-white/90 hover:text-orange-400 transition-colors duration-200 px-4 py-2 rounded-full border border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/5"
              >
                Contact <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ishan Vepa</span>
                <Image
                  src="/largeishan_favicon(1).png"
                  alt="Ishan Vepa"
                  width={32}
                  height={32}
                  className="rounded-lg object-cover"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </motion.nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-xl bg-black/90 border-l border-white/10 p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ishan Vepa</span>
                <Image
                  src="/largeishan_favicon(1).png"
                  alt="Ishan Vepa"
                  width={32}
                  height={32}
                  className="rounded-lg object-cover"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-orange-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <motion.div 
              className="relative rounded-full px-3 py-1 text-sm/6 text-zinc-400 ring-1 ring-zinc-800 hover:ring-orange-500/30 transition-all duration-200 hover:bg-zinc-950"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Want to connect?{' '}
              <a href="#" className="font-semibold text-orange-500 hover:text-orange-400 transition-all">
                <span aria-hidden="true" className="absolute inset-0 transition-all" />
                Get in touch <span aria-hidden="true">&rarr;

                </span>
              </a>
            </motion.div>
          </div>

          {/* Profile Picture Section */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="relative group">
              {/* Animated gradient glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-300 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/profpic.jpeg"
                  alt="Ishan Vepa - CS @ Georgia Tech"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                
                {/* Floating particles */}
                {/* <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + i * 5}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        x: [-5, 5, -5],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div> */}
              </motion.div>

              {/* Status indicator */}
              {/* <motion.div
                className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 rounded-full border-3 border-black flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div> */}
            </div>
          </motion.div>

          <div className="text-center">
            <motion.h1 
              className="text-5xl tracking-tight text-balance text-white sm:text-7xl font-[var(--font-display)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ishan Vepa
            </motion.h1>
            <motion.p 
              className="mt-4 text-2xl font-medium text-orange-500 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CS @ Georgia Tech
            </motion.p>
            {/* <motion.p 
              className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting elegant solutions with modern technologies. Passionate about building scalable applications and intuitive user experiences.
            </motion.p> */}
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
              >
                View My Work
              </a>
              <a
                href="/Ishan_Vepa_Resume.pdf"
                download="ishan_vepa_resume.pdf"
                className="text-sm/6 font-semibold text-white hover:text-orange-400 transition-colors"
              >
                Download Resume <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://linkedin.com/in/ishanvepa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/ishanvepa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Github size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}