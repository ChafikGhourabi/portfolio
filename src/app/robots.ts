import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://portfolio-umber-nine-j8befgo8i9.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/500', '/404'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
