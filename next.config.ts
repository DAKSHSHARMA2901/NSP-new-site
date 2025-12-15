import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",

  // Serve as directories (recommended for exported sites)
  trailingSlash: true,

  // Performance & general flags
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // Disable strict linting for build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image settings — unoptimized is required for static export
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/',
      },
    ],
  },

  // Build optimizations - keep if helpful
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'aos', '@emailjs/browser'],
    scrollRestoration: true,
  },

  // Redirects (keep as-is)
  async redirects() {
    return [
      {
        source: '/design-development-for',
        destination: '/website-development-for',
        permanent: true,
      },
      {
        source: '/design-development-for/:path*',
        destination: '/website-development-for/:path*',
        permanent: true,
      },
    ];
  },

  // Headers for better caching and performance (kept)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/image(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/logo.jpg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // Keep webpack optimizations (unchanged)
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: { name: 'vendor', chunks: 'all', test: /node_modules/, priority: 20 },
            common: { name: 'common', minChunks: 2, chunks: 'all', priority: 10, reuseExistingChunk: true, enforce: true },
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true
            },
            icons: { name: 'icons', test: /[\\/]node_modules[\\/](react-icons)[\\/]/, chunks: 'all', priority: 30 },
            animations: { name: 'animations', test: /[\\/]node_modules[\\/](framer-motion|aos)[\\/]/, chunks: 'all', priority: 25 }
          },
          maxInitialRequests: 25,
          minSize: 20000,
        },
      };
    }

    config.performance = { hints: false };
    return config;
  },
};

export default nextConfig;