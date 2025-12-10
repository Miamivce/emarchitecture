export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://emarchitecture.be/#organization',
        name: 'EM Architecture',
        url: 'https://emarchitecture.be',
        email: 'info@em-architecture.com',
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
        email: 'info@em-architecture.com',
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
      {
        '@type': 'Service',
        '@id': 'https://emarchitecture.be/#service-residential',
        serviceType: 'Residential Architecture',
        provider: {
          '@id': 'https://emarchitecture.be/#organization',
        },
        areaServed: ['Brasschaat', 'Antwerp', 'Belgium'],
        description: 'High-end residential architectural design services',
      },
      {
        '@type': 'Service',
        '@id': 'https://emarchitecture.be/#service-commercial',
        serviceType: 'Commercial Design',
        provider: {
          '@id': 'https://emarchitecture.be/#organization',
        },
        areaServed: ['Brasschaat', 'Antwerp', 'Belgium'],
        description: 'Sophisticated commercial architectural design',
      },
      {
        '@type': 'Service',
        '@id': 'https://emarchitecture.be/#service-renovation',
        serviceType: 'Renovation & Restoration',
        provider: {
          '@id': 'https://emarchitecture.be/#organization',
        },
        areaServed: ['Brasschaat', 'Antwerp', 'Belgium'],
        description: 'Architectural renovation and restoration services',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://emarchitecture.be/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where is EM Architecture located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'EM Architecture is based in Brasschaat and Antwerp, Belgium, serving the surrounding regions.',
            },
          },
          {
            '@type': 'Question',
            name: 'What services does EM Architecture offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'EM Architecture offers residential architecture, commercial design, renovation and restoration, interior architecture, and design consultation services.',
            },
          },
          {
            '@type': 'Question',
            name: 'What areas does EM Architecture serve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'EM Architecture serves Brasschaat, Antwerp, Antwerpen, and surrounding regions in Belgium.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://emarchitecture.be/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://emarchitecture.be',
          },
        ],
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
