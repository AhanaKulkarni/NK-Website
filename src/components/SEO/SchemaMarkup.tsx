import React from 'react';

export function SchemaMarkup() {
  const educationalOrganization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "NK Academy",
    "url": "https://nkacademy.com",
    "logo": "https://nkacademy.com/logo.png",
    "description": "The benchmark digital education platform in Borivali. Premium coaching for SSC, CBSE, ICSE, Science, Commerce, NEET, JEE, and Sanskrit.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Borivali East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400066",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Borivali West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400092",
        "addressCountry": "IN"
      }
    ],
    "telephone": "+91-9000000000",
    "sameAs": [
      "https://www.facebook.com/nkacademy",
      "https://www.instagram.com/nkacademy",
      "https://www.youtube.com/nkacademy"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganization) }}
    />
  );
}
