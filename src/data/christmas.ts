// Content for the "Christmas at Liberty" pop-up, supplied by Lois (22-24 Nov 2026).
// To change wording, add an event, or add a graphic, edit this file only.
//
// Each event has one or more "groups". A group is one block of text (and optionally buttons and a
// graphic). When an event has more than one group, a divider line is drawn between them. Use
// groups to keep a graphic next to the venue it belongs to, e.g. Gaer and Risca on the same day.

export interface ChristmasLink {
  label: string;
  href: string;
}

export interface ChristmasImage {
  src: string;
  alt: string;
}

export interface ChristmasGroup {
  lines: string[];
  links?: ChristmasLink[];
  image?: ChristmasImage;
}

export interface ChristmasEvent {
  date: string;
  groups: ChristmasGroup[];
}

export const christmasTile: ChristmasImage = {
  src: '/images/christmas/christmas-at-liberty-tile.jpg',
  alt: 'Christmas at Liberty. Making room for Jesus.',
};

export const christmasIntro =
  'We would love you to join us over Christmas, please see all that’s happening below and how you can get involved…';

export const christmasEvents: ChristmasEvent[] = [
  {
    date: 'Sunday 6th December',
    groups: [
      {
        lines: ['Christmas Market 5-7pm', 'The Coffee House Quiz Night 7-9pm', 'Both at Liberty Gaer Hub'],
        links: [
          {
            label: 'Register to run a stall',
            href: 'https://libertychurchwales.churchsuite.com/-/forms/4r6ukapm',
          },
        ],
        image: {
          src: '/images/christmas/christmas-market-quiz-night-6-dec.png',
          alt: 'Christmas Market 5 to 7pm and Quiz Night 7 to 9pm, Sunday 6th December, The Coffee House, Gaer Park Drive, Newport',
        },
      },
    ],
  },
  {
    date: 'Friday 11th December',
    groups: [{ lines: ['Youth Christmas Party 6.30-9.30pm at Liberty Gaer Hub'] }],
  },
  {
    date: 'Sunday 13th December',
    groups: [
      // Gaer first, then a divider, then Risca with its sign-up button and graphic,
      // so the food sign-up and the graphic clearly belong to Risca only.
      {
        lines: ['Liberty Gaer Sunday Services - 9am and 10.45am (Kids Christmas Party in both services)'],
      },
      {
        lines: ['Liberty Risca Family Service and lunch together 10.30am.', 'Please let us know what food you can bring.'],
        links: [
          {
            label: 'Food sign-up',
            href: 'https://libertychurchwales.churchsuite.com/-/forms/l6yxasmf',
          },
        ],
        image: {
          src: '/images/christmas/risca-christmas-family-service-13-dec.jpg',
          alt: 'Christmas family service, Sunday 13th December, 10:30am, followed by lunch together. Risca Scouts Hall, NP11 6LL',
        },
      },
    ],
  },
  {
    date: 'Sunday 20th December',
    groups: [
      {
        lines: ['Liberty Gaer Carol Services - 9am and 10.45am'],
        image: {
          src: '/images/christmas/carols-gaer-20-dec.jpg',
          alt: 'Carols at Liberty, 20th December, 9am and 10:45am, Liberty Hub, Gaer Park Drive, Newport, NP20 3NN',
        },
      },
      {
        lines: ['Liberty Risca Carol Service at Bethany Baptist Church 10.30am.'],
        image: {
          src: '/images/christmas/carols-risca-20-dec.jpg',
          alt: 'Carols at Liberty, 20th December, 10:30am, Bethany Baptist Church, Risca',
        },
      },
    ],
  },
  {
    date: 'Thursday 24th December',
    groups: [
      {
        lines: ['Christmas Eve Service at 5pm, at Liberty Gaer Hub'],
        image: {
          src: '/images/christmas/christmas-eve-o-holy-night-24-dec.jpg',
          alt: 'O Holy Night, Christmas Eve service, 24th December, 5pm, at the Gaer Hub',
        },
      },
    ],
  },
  {
    date: 'Sunday 27th December',
    groups: [{ lines: ['Liberty Gaer Sunday Services at 9am and 10.45am', 'Liberty Risca Sunday Service at 10.30am.'] }],
  },
  {
    date: 'Friday 1st January',
    groups: [
      {
        lines: ['New Years Day worship night at the Gaer at 7.30pm'],
        image: {
          src: '/images/christmas/new-years-day-worship-night-1-jan.jpg',
          alt: 'Worship night, New Years Day, from 7:30pm, Liberty Hub, Gaer',
        },
      },
    ],
  },
  {
    // Lois confirmed 3 January (her original text said "3rd December" in error).
    date: 'Sunday 3rd January',
    groups: [{ lines: ['Liberty Gaer Sunday Service at 10.30am', 'Liberty Risca Sunday Service at 10.30am.'] }],
  },
];

export const bagsOfHope = {
  title: 'For the One - Bags of Hope Christmas Appeal',
  intro: 'Join us in reaching out to those in need this Christmas.',
  waysIntro: 'There are 2 ways to get involved this year:',
  ways: [
    'Purchase items from the list below and drop off at Liberty Gaer Hub/The Coffee House between 30th November - 11th December',
    'Help give bags to those in need on Sunday 20th December, 1.30pm. Please drop us a message to let us know if you can make it.',
  ],
  itemsIntro: 'Here is an updated list of items we are collecting:',
  items: [
    '£10 Greggs gift card',
    'Large sharing pack of crisps',
    '100g bar of chocolate',
    '175g Bags of Haribo sweets',
    'Pocket size tissues',
    'Wet wipes',
    'Toothpaste and toothbrushes',
    'Soap',
    'Pot Noodles',
    'Instant porridge pots',
    'Hats and gloves',
    'Small jar of instant coffee',
    'Small box of teabags',
  ],
  image: {
    src: '/images/christmas/for-the-one-bags-of-hope.jpg',
    alt: 'For the One. Find out how you can get involved this Christmas to help stand alongside our homeless community.',
  },
};
