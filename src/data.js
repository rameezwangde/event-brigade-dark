import weddingStage from './assets/weddings/wedding-stage.jpg';
import weddingInvites from './assets/weddings/wedding-invites.jpg';
import guestWelcome from './assets/weddings/guest-welcome.jpg';
import weddingDecor from './assets/weddings/wedding-decor.jpg';
import haldiMehendi from './assets/weddings/haldi-mehendi.jpg';
import reception from './assets/weddings/reception.jpg';
import specialEntry from './assets/weddings/special-entry.jpg';
import weddingActivities from './assets/weddings/wedding-activities.jpg';

export const images = {
  hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85',
  about: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=85',
  wedding: weddingStage,
  corporate: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85',
  social: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
  artist: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85',
  founder: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhtU7mmijOriy5hIfHEOTdlYk7qwPIhovRQaPHHeI7IJrxGK-eYZG4XL5261os8SppAIrewy_y6D2XBL0KfuD1Hubcm5u3lOgJrhTsqA-KP5hgOMEOB2qlRG0T8YK2ZNUhrKT3asf0bRI/s1600/kg.jpg'
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
  about:
    "Most people see an event as a series of tasks, a venue booked, a stage set, a guest list managed. At Event Brigade, we see it differently. We see a blank canvas for your brand's next big leap or your family's most cherished memory. Based in the heart of Pune and with over 15 years of experience, we are a collective of strategists, creators, and logistical experts dedicated to the art of seamless execution. Whether it's a high-stakes corporate summit or a once-in-a-lifetime celebration, we handle the complexity so you can focus on the moment.",
  company:
    'Event Brigade is a Pune-based, full-service event management and production company specializing in the planning and execution of corporate, social, and large-format events. With a strong foundation in operational excellence and creative strategy, we deliver end-to-end event solutions that align with client objectives, brand positioning, and audience engagement goals. Our approach integrates concept development, project management, technical production, and on-ground execution to ensure seamless delivery at every stage.',
  philosophy:
    'To become India’s most trusted "Experience Factory," where every event sets a new benchmark for excellence. We aim to redefine the event management landscape by fostering a culture of precision and creativity. Our goal is to grow alongside our clients, evolving from a local leader into a national standard for how modern events should be felt, seen, and remembered.',
  mission:
    'To redefine global event standards by integrating immersive technology and creative strategy. We build the world-class platforms where brands, individuals, and ideas connect without boundaries.',
  founder:
    'While doing BCA, Kunal first came to know about event management as a field and it immediately stuck with him. So following his passion, He did a degree course in event management and since then there has been no looking back. He now has a solid experience of 15+ years in the field and he is very well versed with all the internal aspects and intricacies of the field right from production to logistics, artist management to hospitality and so on and so forth. In the last 15+ years, a time period that He has thoroughly enjoyed, He has worked on 3000+ events and still going on strong!'
};

export const stats = [
  { value: 3000, suffix: '+', label: 'Projects Completed' },
  { value: 3000, suffix: '+', label: 'Happy Customers' },
  { value: 40, suffix: '+', label: 'Cities Covered' },
  { value: 100000, suffix: '+', label: 'Impressed Audience' }
];

export const services = [
  {
    title: 'Weddings',
    image: images.wedding,
    text: 'From simple to big fat weddings, we specialize in managing them all!',
    servicesWeProvide: [
      'Invitation and Guest RSVP',
      'Logistics',
      'Hospitality',
      'Stationary',
      'Decor',
      'Artist Management',
      'Food and Beverages',
      'Vendor Management'
    ]
  },
  {
    title: 'Corporate Events',
    image: images.corporate,
    text: 'Be it an annual bash, product launch or a conference, we are more than equipped!',
    servicesWeProvide: [
      'Seminars, Conferences & Meetings',
      'Brand/Product/Corporate Launches',
      "Dealer/Trade/Retailer's Meet",
      'Customer Dealer Interaction Programs',
      'Merchandise and In Shop Promotions',
      'Brand Extention Services',
      'Annual Celebrations',
      'Exibitions',
      'Press Conferences',
      'Outbound/Inbound Educational/Spiritual Tours',
      'Sale, Rental & Installation of Audio Visual Equipments'
    ]
  },
  {
    title: 'Social Events',
    image: images.social,
    text: 'Family functions, social get-togethers or any cultural event, you name it, we got it!',
    servicesWeProvide: [
      'Anniversaries',
      'Birthday Parties',
      'Cultural Events',
      'Social Club Gettogether',
      'College Annual Days',
      'Babyshower',
      'House Warming Ceremonies',
      'Naming Ceremonies'
    ]
  },
  {
    title: 'Artist Management',
    image: images.artist,
    text: 'From dancers to comedians and live bands to mind boggling artists, we provide them all for perfect artistic events!',
    servicesWeProvide: [
      'Live Bands',
      'Singers',
      'Illusionist / Mentalists / Magicians',
      'Instrumental Artists',
      'Comedians',
      'Acrobatics Act',
      'DJ with Musicians',
      'Mime Act',
      'International Symphony',
      'Mascots',
      'Stilt Walkers',
      'Special Celebrities',
      'Dance Troupes',
      'Bartenders'
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
