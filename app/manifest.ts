import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EM Architecture',
    short_name: 'EM Architecture',
    description: 'High-end architectural design studio in Brasschaat and Antwerp',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f7',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
