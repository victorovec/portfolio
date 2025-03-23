/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "cdn.jsdelivr.net", 
          "raw.githubusercontent.com", 
          "www.gstatic.com", 
          "www.postman.com"
        ],
      },
};

export default nextConfig;
