// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };




// export default nextConfig;



// next.config.ts

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // This applies to all pages
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-src 'self' *.licdn.com linkedin.com www.linkedin.com lnkd.demdex.net player.vimeo.com;`
          }
        ]
      }
    ]
  }
}

export default nextConfig
