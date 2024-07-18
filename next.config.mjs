import withBundleAnalyzer from '@next/bundle-analyzer';
import BundleSizePlugin from './bundle-size-plugin.mjs';

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
