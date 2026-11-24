import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { business } from '../../data/business'
import { img, photos } from '../../data/images'

export default function Seo({ title, description, image = img(photos.heroHouse, 1200) }) {
  const { pathname } = useLocation()
  const url = `${business.domain}${pathname === '/' ? '' : pathname}`
  const full = `${title} | ${business.name}`
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
