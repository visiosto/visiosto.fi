// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export default {
  contentfulPage: {
    title: 'Hinnasto',
    body: {
      childMarkdownRemark: {
        html: '<div class="centered">\n  Lorem ipsum dolor sit amet...\n</div>',
      },
    },
    description: {
      description: 'Hinnasto',
    },
    image: null,
    pageData: [
      {
        listType: 'consumer',
        additionalFees: [
          {
            extra: false,
            name: 'paperInvoice',
            price: 2,
            rate: 'invoice',
          },
          {
            extra: false,
            name: 'invoiceReminder',
            price: 2,
            rate: 'reminder',
          },
          {
            extra: true,
            name: 'invoiceNote',
            price: 3,
            rate: 'note',
          },
        ],
        additionalWork: [
          {
            name: 'programming',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'contentManagement',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'contentCreation',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'otherAdditionalWork',
            price: 15,
            rate: 'hourly',
          },
        ],
        prices: [
          {
            name: 'domain',
            price: 3,
            rate: 'monthly',
          },
          {
            name: 'server',
            price: 10.5,
            rate: 'monthly',
          },
        ],
      },
      {
        listType: 'business',
        additionalFees: [
          {
            extra: false,
            name: 'paperInvoice',
            price: 2,
            rate: 'invoice',
          },
          {
            extra: false,
            name: 'invoiceReminder',
            price: 2,
            rate: 'reminder',
          },
          {
            extra: true,
            name: 'invoiceNote',
            price: 3,
            rate: 'note',
          },
        ],
        additionalWork: [
          {
            name: 'programming',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'contentManagement',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'contentCreation',
            price: 15,
            rate: 'hourly',
          },
          {
            name: 'otherAdditionalWork',
            price: 15,
            rate: 'hourly',
          },
        ],
        prices: [
          {
            name: 'domain',
            price: 3,
            rate: 'monthly',
          },
          {
            name: 'server',
            price: 10.5,
            rate: 'monthly',
          },
        ],
      },
    ],
    pageDataLocalization: {
      additionalFees: [
        {
          extra: null,
          id: 'title',
          name: 'Lisämaksut',
        },
        {
          extra: null,
          id: 'paperInvoice',
          name: 'Lasku paperilla',
        },
        {
          extra: null,
          id: 'invoiceReminder',
          name: 'Maksumuistutus',
        },
        {
          extra: 'maksumuistutuksen lisämaksun lisäksi',
          id: 'invoiceNote',
          name: 'Maksuhuomautus',
        },
      ],
      additionalWork: [
        {
          id: 'title',
          name: 'Lisätyöt',
        },
        {
          id: 'programming',
          name: 'Ohjelmointilisätyö',
        },
        {
          id: 'contentManagement',
          name: 'Sisällönhallintalisätyö',
        },
        {
          id: 'contentCreation',
          name: 'Sisällöntuotantolisätyö',
        },
        {
          id: 'otherAdditionalWork',
          name: 'Muu lisätyö',
        },
      ],
      listType: [
        {
          description:
            'Kaikki hinnat sisältävät yleisen arvonlisäverokannan mukaisen arvonlisäveron (24&nbsp;%).',
          id: 'consumer',
          link: 'kuluttajahinnasto',
          name: 'Kuluttajahinnasto',
        },
        {
          description: 'Hinnat eivät sisällä arvonlisäveroa.',
          id: 'business',
          link: 'yrityshinnasto',
          name: 'Yrityshinnasto',
        },
      ],
      prices: [
        {
          id: 'title',
          name: 'Palveluiden hinnat',
        },
        {
          id: 'serverDomain',
          name: 'Palvelin ja verkkotunnus',
        },
        {
          id: 'domain',
          name: 'Verkkotunnus',
        },
        {
          id: 'server',
          name: 'Verkkotunnus',
        },
      ],
      rate: [
        {
          id: 'hourly',
          name: 'h',
        },
        {
          id: 'monthly',
          name: 'kk',
        },
        {
          id: 'invoice',
          name: 'lasku',
        },
        {
          id: 'reminder',
          name: 'muistutus',
        },
        {
          id: 'note',
          name: 'huomautus',
        },
      ],
    },
  },
};
