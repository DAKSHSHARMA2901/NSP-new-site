"use client"
import { motion } from 'framer-motion'

export default function AnimatedLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full px-0 py-0"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-700 via-blue-500 to-purple-500 z-0 blur-xl opacity-30 pointer-events-none"
      />
    </main>
  )
}
