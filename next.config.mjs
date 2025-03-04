import withBundleAnalyzer from '@next/bundle-analyzer';
import BundleSizePlugin from './bundle-size-plugin.mjs';
import process from 'process';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: false,
  openAnalyzer: false,
  generateStatsFile: true,
  analyzerMode: 'static',
  reportFilename: './bundle-analyzer-report.html',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['community.revelo.com.br', 'image.tmdb.org'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_AUTHORIZATION_TOKEN:
      process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
    NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL:
      process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
  webpack(config, { isServer, dev }) {
    if (!isServer && !dev) {
      config.plugins.push(new BundleSizePlugin());
    }
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
