import weddingStage from './assets/weddings/wedding-stage.jpg';
import weddingInvites from './assets/weddings/wedding-invites.jpg';
import guestWelcome from './assets/weddings/guest-welcome.jpg';
import weddingDecor from './assets/weddings/wedding-decor.jpg';
import haldiMehendi from './assets/weddings/haldi-mehendi.jpg';
import reception from './assets/weddings/reception.jpg';
import specialEntry from './assets/weddings/special-entry.jpg';
import weddingActivities from './assets/weddings/wedding-activities.jpg';
import founderImage from '../founder.jpeg';

export const images = {
  hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85',
  about: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=85',
  wedding: weddingStage,
  corporate: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85',
  social: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
  artist: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85',
  founder: founderImage
};

export const brandCollage = [
  {
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=85',
    label: 'Wedding Decor'
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85',
    label: 'Corporate Production'
  },
  {
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85',
    label: 'Live Entertainment'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85',
    label: 'Social Celebrations'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
    label: 'Luxury Hospitality'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
    label: 'Grand Entrances'
  }
];

export const siteCopy = {
  heroKicker: 'To Your Rescue',
  heroLine: 'WE ARE EVENT',
  aboutParagraphs: [
    "Event Brigade was founded by a squad of passionate event enthusiasts and managers with a simple mission, to rescue people from the stress of planning and managing life's most important events. Built on creativity, enthusiasm, and a commitment to excellence, we bring together fresh ideas, meticulous planning, and flawless execution to create experiences that leave a lasting impression.",
    "As a Pune-based event management and production company, we specialize in weddings, corporate events, social celebrations, artist management, and large-scale entertainment experiences. We believe that every event deserves its own identity, meaning, and vision. By paying attention to every detail and understanding the unique needs of our clients, we transform concepts into memorable experiences that are engaging, seamless, and truly unforgettable.",
    "Our philosophy is simple: with dedication, teamwork, and innovation, we can turn ideas into extraordinary realities. While our clients focus on enjoying the moment, we work tirelessly behind the scenes to manage every detail, overcome every challenge, and ensure every event unfolds effortlessly from concept to completion."
  ],
  philosophy:
    'To become India’s most trusted "Experience Factory," where every event sets a new benchmark for excellence. We aim to redefine the event management landscape by fostering a culture of precision and creativity. Our goal is to grow alongside our clients, evolving from a local leader into a national standard for how modern events should be felt, seen, and remembered.',
  mission:
    'To redefine global event standards by integrating immersive technology and creative strategy. We build the world-class platforms where brands, individuals, and ideas connect without boundaries.',
  founder:
    'While doing BCA, Kunal first came to know about event management as a field and it immediately stuck with him. So following his passion, He did a degree course in event management and since then there has been no looking back. He now has a solid experience of 15+ years in the field and he is very well versed with all the internal aspects and intricacies of the field right from production to logistics, artist management to hospitality and so on and so forth. In the last 15+ years, a time period that He has thoroughly enjoyed, He has worked on 1900+ events and still going on strong!'
};

export const stats = [
  { value: 1900, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Cities Covered' },
  { value: 100000, suffix: '+', label: 'Impressed Audience' }
];

export const services = [
  {
    title: 'Weddings',
    image: images.wedding,
    text: 'From simple to big fat weddings, we specialize in managing them all!',
    servicesWeProvide: [
      'Food and Beverages',
      'Vendor Management',
      'Pre-wedding Shoot Coordination',
      'Sangeet Choreography',
      'Bridal Makeup & Styling',
      'Trousseau & Gifting Packaging'
    ]
  },
  {
    title: 'Corporate Events',
    image: images.corporate,
    text: 'Be it an annual bash, product launch or a conference, we are more than equipped!',
    servicesWeProvide: [
      "Dealer/Trade/Retailer's Meet",
      'Customer Dealer Programs',
      'Merchandise & Brand Promotions',
      'Corporate Gifting & Merchandising',
      'VIP Protocol & Liaison',
      'Brand Extension Campaigns',
      'Exhibitions & Stall Fabrication',
      'PR & Press Conferences',
      'Outbound Teambuilding Tours',
      'AV & Technical Setup Services',
      'Signage & Branding Production',
      'Temporary Venue Fabrication'
    ]
  },
  {
    title: 'Social Events',
    image: images.social,
    text: 'Family functions, social get-togethers or any cultural event, you name it, we got it!',
    servicesWeProvide: [
      'College Fest & Annual Days',
      'House Warming Ceremonies',
      'Naming Ceremonies',
      'Ganesh Utsav & Festivals',
      'Private Theme Parties',
      'Surprise Proposal Planning'
    ]
  }
];

export const weddingShowcase = {
  eyebrow: 'Wedding Services',
  title: 'We do not just plan weddings. We curate experiences.',
  text:
    'At Event Brigade, a wedding is more than an event. It is a once-in-a-lifetime story waiting to be told beautifully. From the first idea to the final farewell, we handle every detail with precision, creativity and calm execution.',
  modules: [
    {
      title: 'Invitation & RSVP',
      text: 'Wedding logos, e-invites, special cards, guest RSVP coordination and custom wedding stationery.',
      image: weddingInvites
    },
    {
      title: 'Logistics & Hospitality',
      text: 'Guest travel, hotel bookings, welcome desks, transport planning, luggage tagging and room hampers.',
      image: guestWelcome
    },
    {
      title: 'Decor & Themes',
      text: 'Connected wedding themes, floral installations, mandap styling and immersive venue transformations.',
      image: weddingDecor
    },
    {
      title: 'Haldi, Mehendi & Rituals',
      text: 'Dedicated ritual teams, function-wise requirements, material planning and festive guest experiences.',
      image: haldiMehendi
    },
    {
      title: 'Reception & Entertainment',
      text: 'Reception design, live bands, artists, performers, celebrity acts, singers and curated stage experiences.',
      image: reception
    },
    {
      title: 'Special Entries & Activities',
      text: 'Bride and groom entries, live calligraphy, candle-making, bangle stations, perfume bars and guest engagement zones.',
      image: specialEntry
    }
  ],
  gallery: [weddingStage, reception, specialEntry, weddingActivities]
};

export const corporatePortfolio = {
  eyebrow: 'Corporate Portfolio 2026',
  title: 'Corporate events engineered for impact.',
  intro:
    "We Don't Just Manage Events. We Create Experiences. From a high-stakes corporate summit to an employee celebration, Event Brigade handles the complexity so teams can focus on the moment.",
  pages: [
    {
      number: '01',
      title: 'Corporate Event Portfolio',
      text: 'Event Brigade corporate event portfolio for 2026.',
      tags: ['Corporate Events', 'Portfolio', 'www.eventbrigade.in']
    },
    {
      number: '02',
      title: 'Introduction',
      text:
        'Most people see an event as a series of tasks: a venue booked, a stage set, a guest list managed. At Event Brigade, we see it differently. We see a blank canvas for your brand’s next big leap or your family’s most cherished memory.',
      tags: ['15+ Years', 'Pune', 'Seamless Execution']
    },
    {
      number: '03',
      title: 'Company Overview',
      text:
        'Event Brigade is a Pune-based, full-service event management and production company specializing in corporate, social and large-format events. We combine operational excellence, creative strategy, project management, technical production and on-ground execution.',
      tags: ['Full-Service', 'Production', 'Strategy']
    },
    {
      number: '04',
      title: 'Vision & Mission',
      text:
        'Vision: To become India’s most trusted Experience Factory, where every event sets a new benchmark for excellence. Mission: To redefine global event standards by integrating immersive technology and creative strategy.',
      tags: ['Experience Factory', 'Creativity', 'Technology']
    },
    {
      number: '05',
      title: 'How We Work',
      text:
        'From concept to completion, every detail is planned and executed through a structured process: understanding requirements, planning and strategy, design and preparation, execution, contracting, and feedback and evaluation.',
      tags: ['Requirements', 'Strategy', 'Execution']
    },
    {
      number: '06',
      title: 'Why Choose Us',
      text:
        'Seamless, creative and result-driven corporate events you can trust, built on reliable delivery, proven expertise, end-to-end execution and customized creative solutions.',
      tags: ['Reliable', '15 Years', 'Result-Driven']
    },
    {
      number: '07',
      title: 'What We Do',
      text:
        'We create value by delivering innovative solutions and exceptional experiences across annual days, product launches, conferences, family days and theme parties, channel partner and dealers meets, and outdoor events.',
      tags: ['Annual Days', 'Launches', 'Conferences']
    },
    {
      number: '08',
      title: 'Annual Days & Awards Night',
      text:
        'Creative, brand-aligned themes with immersive stage design, lighting, premium decor, live bands, celebrity performers, DJs, emcees, stage acts, team-building activities, awards ceremonies, employee recognition and curated F&B experiences.',
      tags: ['Theme & Decor', 'Entertainment', 'Awards']
    },
    {
      number: '09',
      title: 'Product Launches',
      text:
        'Product launches are shaped through concept and theme, a strategic reveal moment with countdowns and visuals, seamless registration and hospitality, high-impact LED walls, AV, lighting and special effects.',
      tags: ['Reveal Moment', 'LED Walls', 'Guest Experience']
    },
    {
      number: '10',
      title: 'Conference',
      text:
        'Professional conference delivery includes stage design, seating layout, branding, venue coordination, efficient check-in systems, attendee handling, hospitality, speaker coordination, agenda management and smooth session flow.',
      tags: ['Venue Setup', 'Registration', 'Speaker Flow']
    },
    {
      number: '11',
      title: 'Family Days & Theme Parties',
      text:
        'Family-friendly corporate gatherings with vibrant themes, immersive decor, kids zones, games, live performances, food options, seamless service and comfortable guest experiences.',
      tags: ['Family Days', 'Kids Zones', 'Hospitality']
    },
    {
      number: '12',
      title: 'Channel Partner & Dealers Meet',
      text:
        'Premium partner meets with creative outdoor setups, professional venue and stage design, branding, ambience, interactive networking, relationship-building opportunities and curated entertainment.',
      tags: ['Partner Engagement', 'Branding', 'Networking']
    },
    {
      number: '13',
      title: 'Outdoor Events',
      text:
        'Outdoor event execution includes concept and theme, professional stages for opening ceremonies, announcements and prize distribution, team engagement activities, offsites, team bonding experiences, recognition awards and prize distribution.',
      tags: ['Offsites', 'Team Activities', 'Recognition']
    },
    {
      number: '14',
      title: 'Event Spotlight',
      text:
        'A visual spotlight of corporate stages, conferences, branded registration desks, runway-style experiences and audience-focused production setups.',
      tags: ['Stage Production', 'Registration', 'Audience Experience']
    },
    {
      number: '15',
      title: 'Event Spotlight Gallery',
      text:
        'Additional showcase visuals featuring large-format seating, tented hospitality, themed installations, outdoor production, decor and immersive venue transformations.',
      tags: ['Large Format', 'Hospitality', 'Themed Installations']
    },
    {
      number: '16',
      title: 'Our Clients',
      text: 'Client portfolio includes Lodha Group, CREDAI, Ace Golfing and Nestle.',
      tags: ['Lodha Group', 'CREDAI', 'Nestle']
    },
    {
      number: '17',
      title: 'Our Clients',
      text: 'Client portfolio also includes Sandvik, EO Pune, Goyal Properties and Gabriel.',
      tags: ['Sandvik', 'EO Pune', 'Gabriel']
    },
    {
      number: '18',
      title: 'Client Testimonials',
      text:
        'Client feedback highlights well-organized execution, attention to smallest details, excellent coordination, helpful and energetic teams, hassle-free delivery, AV understanding, last-minute support and calm on-ground management.',
      tags: ['Reviews', 'Coordination', 'Seamless Delivery']
    },
    {
      number: '19',
      title: 'Contact',
      text: 'Contact Event Brigade at info@eventbrigade.in or +91 9028755979.',
      tags: ['info@eventbrigade.in', '+91 9028755979']
    }
  ],
  workflow: [
    'Understanding Requirements',
    'Planning & Strategy',
    'Design & Preparation',
    'Execution',
    'Contracting',
    'Feedback & Evaluation'
  ],
  strengths: [
    {
      title: 'Reliable & Result-Driven',
      text: 'Delivered on time, within budget and focused on measurable impact.'
    },
    {
      title: 'Proven Expertise',
      text: '15 years of corporate event experience supports professional, high-quality execution.'
    },
    {
      title: 'End-to-End Execution',
      text: 'Planning, production and delivery are managed through one seamless process.'
    },
    {
      title: 'Customized Creative Solutions',
      text: 'Every event is designed to reflect the brand and meet its objectives.'
    }
  ],
  services: [
    {
      title: 'Annual Days & Awards Night',
      items: ['Theme & Decor', 'Artists & Entertainment', 'Activities & Engagement', 'F&B Experience']
    },
    {
      title: 'Product Launches',
      items: ['Concept & Theme', 'Product Reveal Moment', 'Guest Experience', 'Stage & Technical Setup']
    },
    {
      title: 'Conference',
      items: ['Venue & Setup', 'Registration & Guest Management', 'Speaker & Agenda Management']
    },
    {
      title: 'Family Days Events & Theme Parties',
      items: ['Theme & Experience', 'Activities & Entertainment', 'F&B / Hospitality']
    },
    {
      title: 'Channel Partner & Dealers Meet',
      items: ['Creative Outdoor Setups', 'Venue & Setup', 'Partner Engagement', 'Entertainment & Experience']
    },
    {
      title: 'Outdoor Events',
      items: ['Concept & Theme', 'Team Engagement Activities', 'Recognition & Awards']
    }
  ],
  clients: ['Lodha Group', 'CREDAI', 'Ace Golfing', 'Nestle', 'Sandvik', 'EO Pune', 'Goyal Properties', 'Gabriel'],
  testimonialHighlights: [
    'Well organised and smallest details taken care of throughout the event.',
    'Excellent coordination between everyone involved and service delivered with a smile.',
    'Helpful, energetic and attentive team with good management.',
    'Seamless, hassle-free execution with strong AV understanding and last-minute support.'
  ]
};

export const portfolio = [
  { title: 'Weddings', category: 'Weddings', image: images.wedding },
  { title: 'Corporate Events', category: 'Corporate', image: images.corporate },
  { title: 'Social Events', category: 'Social Events', image: images.social },
  { title: 'Artist Management', category: 'Artist Management', image: images.artist },
  {
    title: 'Company Overview',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85'
  },
  {
    title: 'Our Philosophy',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85'
  },
  {
    title: 'Popular Social Events',
    category: 'Social Events',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1400&q=85'
  },
  {
    title: 'Popular Corporate Events',
    category: 'Artist Management',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85'
  }
];

export const testimonials = [
  {
    quote:
      'Thank you Event Brigade and Kunal Garg for organising a fun-filled event. The idea of a mocktails making competition was unique and something new and it was managed to perfection. AYW as Club will cherish this event for a long time to come. All the best and keep up the good work.',
    name: 'Chirayush Agarwal',
    role: 'AYW President 2018'
  },
  {
    quote:
      'We Hired Event Brigade for our vendor meet held on 25th July 2018. I must say the service provided by them was excellent. We were offered very creative solutions. Starting from the suggestion to the screen sizes to be used to proactively editing the artwork to make the designs look better. The decor done was very good, The support on the desk for registration also did a wonderful job. I would recommend Event Brigade for any corporate event. They have mastered the art of conducting amazing corporate events with commendable smoothness.',
    name: 'Arashad Zubair',
    role: 'SSCM Gabrial Limited'
  },
  {
    quote:
      "Working with Kunal has always been a pleasure. It's like half the battle won. His presence itself is enough to make you feel in control of the event. Be it tackling issues at the eleventh hour or the ideas that can make an event a success, this guy has it all. I wish Kunal and his team all the best and success for his new venture.",
    name: 'Mr. Sameer Jalan',
    role: 'Director at Jalan Group'
  },
  {
    quote:
      "I've known Kunal for a few years and I must say its been more than a privilege of working together as a team. Be it social events or weddings, Kunal maintains his calm composure in the toughest situations, that is rare to find in this industry. Excellent with his planning and execution skills, he's definitely a preferred partner to work with. Highly recommended!",
    name: 'Chaitanya Rathi',
    role: 'Popular Anchor'
  },
  {
    quote:
      'Just completed an event with Kunal, Bhavik and their team. After doing several of these events in different cities, this was the first one that was just seamless and hassle free. From understanding our AV requirements to the tee, making last minute requests for changes to presentations and videos, completing the set up in a short amount of time available to them, and just instilling so much confidence in me because of their calm and "don\'t worry about a thing" attitude. Everything ran like clockwork! Would definitely recommend and use their services again.',
    name: 'Reem Khokar',
    role: 'Client'
  },
  {
    quote:
      "After doing so many corporate events and award functions I can trust the team of Event brigade blindly. The quality conscious team delivers the complete event with absolute perfection. Their sound and light effects never have any glitches and the every event moves seamlessly. Kudos to the team of Kunal, Bhavik & Sagar. Thank you for such wonderful shows, it's always a pleasure to work with guys.",
    name: 'Gunjan Sabikhi',
    role: 'Client'
  },
  {
    quote:
      "Excellent & Smiling staff !!! Very well Co-ordination between every one involved in the over all event happening !!! Don't Know to say NO. Everything will be taken care with a smile !!!",
    name: 'Anirodha Mishra',
    role: 'Client'
  }
];

export const contact = {
  address: '202, Swami Shraddha Apartments, Opposite SBI Bank, Bavdhan, Pune - 411021',
  mapUrl: 'https://maps.app.goo.gl/mWkgcbVrVeSiAfR29',
  phones: ['+91 8552831191', '+91 9028755979'],
  email: 'info@eventbrigade.in',
  founderEmail: 'kunal@eventbrigade.in',
  website: 'www.eventbrigade.in'
};
