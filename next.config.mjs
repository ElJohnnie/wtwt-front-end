import withBundleAnalyzer from '@next/bundle-analyzer';
import BundleSizePlugin from './bundle-size-plugin.mjs';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: true,
  openAnalyzer: false,
  generateStatsFile: true,
  analyzerMode: 'static',
  reportFilename: './bundle-analyzer-report.html',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(new BundleSizePlugin());
    }
    return config;
  },
};

export default bundleAnalyzer(nextConfig);
