// Content for the "Christmas at Liberty" pop-up, supplied by Lois (22 Nov 2026).
// To change wording, add an event, or add a graphic, edit this file only.

export interface ChristmasLink {
  label: string;
  href: string;
}

export interface ChristmasImage {
  src: string;
  alt: string;
}

export interface ChristmasEvent {
  date: string;
  lines: string[];
  links?: ChristmasLink[];
  image?: ChristmasImage;
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
  {
    date: 'Friday 11th December',
    lines: ['Youth Christmas Party 6.30-9.30pm at Liberty Gaer Hub'],
  },
  {
    date: 'Sunday 13th December',
    lines: [
      'Liberty Gaer Sunday Services - 9am and 10.45am (Kids Christmas Party in both services)',
      'Liberty Risca Family Service and lunch together 10.30am.',
      'Please let us know what food you can bring.',
    ],
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
  {
    date: 'Sunday 20th December',
    lines: [
      'Liberty Gaer Carol Services - 9am and 10.45am',
      'Liberty Risca Carol Service at Bethany Baptist Church 10.30am.',
    ],
  },
  {
    date: 'Thursday 24th December',
    lines: ['Christmas Eve Service at 5pm, at Liberty Gaer Hub'],
  },
  {
    date: 'Sunday 27th December',
    lines: ['Liberty Gaer Sunday Services at 9am and 10.45am', 'Liberty Risca Sunday Service at 10.30am.'],
  },
  {
    date: 'Friday 1st January',
    lines: ['New Years Day worship night at the Gaer at 7.30pm'],
  },
  {
    // The supplied text said "Sunday 3rd December". 3 December 2026 is a Thursday and the list
    // is already past 1 January, so this is Sunday 3 January 2027. Waiting on Lois to confirm.
    date: 'Sunday 3rd January',
    lines: ['Liberty Gaer Sunday Service at 10.30am', 'Liberty Risca Sunday Service at 10.30am.'],
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
