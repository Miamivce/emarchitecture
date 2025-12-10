export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://emarchitecture.be/#organization',
        name: 'EM Architecture',
        url: 'https://emarchitecture.be',
        email: 'info@emarchitecture.be',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brasschaat',
          addressRegion: 'Antwerp',
          addressCountry: 'BE',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Brasschaat',
          },
          {
            '@type': 'City',
            name: 'Antwerp',
          },
          {
            '@type': 'Country',
            name: 'Belgium',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://emarchitecture.be/#service',
        name: 'EM Architecture',
        image: 'https://emarchitecture.be/og-image.jpg',
        description:
          'High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture with a focus on timeless, sophisticated design.',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brasschaat',
          addressRegion: 'Antwerp',
          addressCountry: 'BE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.2913,
          longitude: 4.4913,
        },
        url: 'https://emarchitecture.be',
        telephone: '+32',
        email: 'info@emarchitecture.be',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        areaServed: [
          'Brasschaat',
          'Antwerp',
          'Antwerpen',
          'Belgium',
          'België',
          'Belgique',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://emarchitecture.be/#website',
        url: 'https://emarchitecture.be',
        name: 'EM Architecture',
        description: 'High-end architectural design studio',
        publisher: {
          '@id': 'https://emarchitecture.be/#organization',
        },
        inLanguage: 'nl-BE',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://emarchitecture.be/#webpage',
        url: 'https://emarchitecture.be',
        name: 'EM Architecture | Architect Brasschaat Antwerp',
        isPartOf: {
          '@id': 'https://emarchitecture.be/#website',
        },
        about: {
          '@id': 'https://emarchitecture.be/#organization',
        },
        description:
          'High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture with a focus on timeless, sophisticated design.',
        inLanguage: 'nl-BE',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
