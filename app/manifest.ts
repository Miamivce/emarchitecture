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
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
