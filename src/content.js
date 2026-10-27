// ------------------------------------------------------------------
// ALL SITE TEXT, LINKS AND CONTACT DETAILS LIVE HERE.
// To reuse this template for another client, edit this file (and
// theme.css) - the components never need to change.
// Source: muzibitiondjs.com (home, 3 course pages, studio, originals,
// testimonials, contact). Quotes are verbatim from the old site.
// ------------------------------------------------------------------

const STUDIO_IMG = "https://i0.wp.com/muzibitiondjs.com/wp-content/uploads/2018/09/";

export const content = {
  brand: {
    name: "MUZIBITION",
    suffix: "DJs",
    tagline: ["Learn.", "Produce.", "Release."],
    subline:
      "Mumbai's school for DJing and music production, founded in 2003 by Manoj Karnani. One-on-one training for careers and hobbyists alike.",
    badge: "Admissions open · New batch",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Studio", href: "#studio" },
    { label: "Students", href: "#students" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    primary: { label: "Join a batch", href: "#contact" },
    secondary: { label: "Watch us play", href: "https://www.youtube.com/user/TheMuzibition" },
  },

  about: {
    eyebrow: "About",
    title: "Where DJs get made.",
    body: [
      "Muzibition is a Mumbai-based school for DJing and music production, founded in 2003 by Manoj Karnani, a professional DJ, music director, composer and sound engineer. He has played over 2000 events, from clubs and pubs to private parties, corporate events and weddings.",
      "Training is one-on-one, and suits students who want a career in music as well as those who just love it. Manoj's originals have also aired on MTV Indies under the name “The Muzibition”.",
    ],
  },

  stats: [
    { value: "2003", label: "Founded" },
    { value: "2000+", label: "Events played" },
    { value: "1:1", label: "Teaching" },
    { value: "3", label: "Courses" },
  ],

  courses: {
    eyebrow: "Courses",
    title: "Pick your sound.",
    syllabusLabel: "Full syllabus",
    items: [
      {
        icon: "deck",
        name: "Pro DJ",
        blurb: "Learn the art of mixing on professional DJ gear, then perform live after the course.",
        durations: ["3 months", "1 month crash course"],
        topics: ["Beat & bar counting", "Beat matching", "Cue, loop, release", "EQ & FX", "Music genres"],
        overview: [
          "We believe the DJs are the musicians of the future. They play the key role of entertainment in all kinds of events like clubs / pubs, corporate, weddings, private gigs, live performances etc. With the growing demand for quality music, professional DJs now have many potential avenues within this fresh and exciting industry.",
          "The DJ course deals with both creative DJ skills and understanding the workings of the industry. Learn the Art of Mixing on the professional DJ gears. Also get a chance to perform live after the course completion.",
          "Be a Pro DJ & make people dance to your tunes.",
        ],
        syllabus: [
          {
            items: [
              "Introduction to the world of DJing",
              "Understanding music genres",
              "Equipment technicalities",
              "Beat & bar counting",
              "Cue",
              "Loop",
              "Release",
              "Bend / balance",
              "Beat matching",
              "EQ",
              "FX",
            ],
          },
        ],
      },
      {
        icon: "wave",
        name: "Electronic Music Production",
        blurb: "Go from a blank canvas to a finished track, with hands-on workshops and individual studio time.",
        durations: ["3 months", "6 months"],
        topics: ["Ableton Live", "Reason & Nuendo", "Sound synthesis", "Mixing & mastering", "Remixes"],
        overview: [
          "Muzibition proudly presents its yet another flagship course: EMP. This is an exclusively designed module to help you master the tools & techniques, which will provide a strong foundation to run parallel with today's ever changing Electronic Music scenario. With high end software such as Ableton Live, Reason & Nuendo you will gain competitive edge & the essential knowledge required to produce, arrange, mix & perform a variety of Electronic Dance Music.",
          "Go from a blank canvas to a finished track with the best instructors in the music education. We are focused on helping students of all ages achieve their music and personal enrichment goals which sets us apart from other Electronic Music Production schools. The technique will be taught using hands-on workshops & providing individual practical / studio time.",
        ],
        syllabus: [
          {
            title: "Module one",
            items: [
              "What is sound",
              "Setting up your home studio",
              "Digital audio & editing",
              "Signal processing (frequency / dynamics / effects)",
              "Musical instrument digital interface",
              "Sampling techniques",
              "Sound synthesis",
              "Sound loops and basic arrangement",
              "Assignment one",
              "Module examination",
            ],
          },
          {
            title: "Module two",
            items: [
              "Ableton Live, level one: introduction",
              "Music theory for dance music",
              "Ableton Live, level two: programming and production",
              "Ableton Live, level three: advanced programming techniques",
              "Nuendo essentials (making remixes)",
              "Mixing an EDM track (vocal based)",
              "Mastering: the last creative step",
              "Genre based arrangement examples",
              "Final assignment",
            ],
          },
        ],
      },
      {
        icon: "disc",
        name: "Turntablism",
        blurb: "From your first baby scratch to scratches over a beat, on analog and digital.",
        durations: ["3 months", "1 month crash course"],
        topics: ["Baby, stab & crab scratch", "Transforms", "Backspinning", "Clean blending", "Looping & echos"],
        overview: [
          "Our curriculum is structured to sharpen your talents, emphasize fundamentals, and define your strengths and weaknesses in order for you to become a successful DJ. Beginner DJs will be able to grasp the basics of mixing, blending and scratching within a few lessons. Intermediate and advanced DJs will be able to brush up and fine-tune their skills and stay up to date on today's cutting edge techniques and scratches. Whether you want to learn the basics or expand your scratch techniques.",
        ],
        syllabus: [
          {
            items: [
              "Analog & digital scratch programme",
              "Mixing songs, how to bring in records",
              "Clean blending",
              "Baby scratch",
              "Stab scratch",
              "Transform scratch",
              "Crab scratch",
              "Crab, stab and transform over a beat",
              "Backspinning",
              "Looping",
              "Phasing",
              "Echos",
            ],
          },
        ],
      },
    ],
  },

  studio: {
    eyebrow: "The Studio",
    title: "Your second home.",
    body: "Muzibition Studio, a recording studio in Mulund West.",
    images: [
      { src: STUDIO_IMG + "PANO_20180920_163152.jpg?w=1200", alt: "Muzibition studio panorama" },
      { src: STUDIO_IMG + "IMG_7932.jpg?w=800", alt: "Studio gear" },
      { src: STUDIO_IMG + "IMG_7945.jpg?w=800", alt: "Studio session" },
      { src: STUDIO_IMG + "IMG_7954.jpg?w=800", alt: "Studio desk" },
      { src: STUDIO_IMG + "IMG_79631.jpg?w=800", alt: "Studio corner" },
    ],
  },

  originals: {
    eyebrow: "Originals",
    title: "Manoj Karnani's originals.",
    body: "Original tracks by Manoj Karnani. Listen on his channels.",
    tracks: [
      "Fuckin Up My Life",
      "Thank You Friend",
      "Kahan Hai Freedom",
      "Song For Maa",
      "Something I Want",
    ],
  },

  students: {
    eyebrow: "Students",
    title: "Heard on the floor.",
    winsTitle: "Student wins",
    wins: [
      "Shubham Godbole won 1st place at Symphony – War of DJs, KJ Somaiya College, 8 February 2018.",
      "DJ Parth Ruparel won 1st prize at MCC College Fest '15 and 3rd prize at Ruia College Fest '16.",
      "DJ Chirag Thakker won 2nd prize at Ruia College Fest '16.",
    ],
    allLabel: "Read all testimonials",
    // `featured` ones show on the page; the rest sit under "Read all".
    // `more` = extra paragraphs shown after the main quote.
    testimonials: [
      {
        featured: true,
        name: "DoctorDJ (Chirag Thakker)",
        quote: [
          "It has been quite an experience to learn at Muzibition. The teaching was great, and the vibes were simply awesome. You learn so so much while you’re having fun. Thanks to Muzibition and DJ Manoj Karnani, DJing is a huge part of my life now :)",
        ],
      },
      {
        featured: true,
        name: "Anurag Porwal",
        quote: [
          "Muzibition is a great place to learn and explore Music. An interesting combination of theory of music along with practical hands on experience of DJing really keeps your foundation strong. Fun along with learning will help you nurture your love for MUSIC here.",
        ],
      },
      {
        featured: true,
        name: "Parth Ruparel",
        quote: [
          "Muzibition was a great experience to me. Apart from DJing, I gained tremendous knowledge in music. This is what we learn here. Great experience & fun thanks to DJ Manoj Karnani & Muzibition.",
        ],
      },
      {
        name: "Hitesh Tolani",
        quote: [
          "My experience learning at Muzibition Studio was truly a memorable one. Today, whatever I know about music is only because of Manoj Karnani. You can be rest assured that not only your money becomes worth by visiting his studio to learn music, you will come out as one of the nice DJ’s you could have imagined. I would highly recommend DJ Manoj Karnani to anyone looking for talented, professional, efficient and committed teacher to learn music.",
        ],
        more: [
          "After completing my graduation in 2007 and after working for a year to save money to learn DJing and music production, I clearly remember visiting various DJ’s and their workshop to see who can be the best teacher and the place where there’s always positive minds to learn. For quiet sometime, I couldn’t find the right place and most of them I met were already in a belief that they have already achieved big in life, so my search still continued. It was coincidence one day I happen to meet the right person i.e. DJ Manoj Karnani at an event meeting, I spoke to him for about 10-15 minutes to share with him my interest of learning music and DJing. He was very kind to invite me at his studio and patiently listen to some of my early days mixes to understand how much knowledge I had about music. His life itself is one teacher of his own and which is why I felt he’s one of the best down to earth DJ I could ever meet. I immediately enrolled myself and started my course at his studio. The good part was that he makes his students understand different genre of music first, basics of every genre and variation in beats, before he puts anyone on console directly. Along with the course, he also ensures to take students at live gigs of his own to give them on ground experience of set up, understand what crowd looks for, what to play when everyone’s on their high, etc. His passion for music and sharing knowledge of music with his students clearly shows at what level he has reached today. He can never ever think bad about his students, if you haven’t understood anything, he will ensure you learn it till you know. Muzibition studio doors are always open for his students and friends 🙂",
        ],
      },
      {
        name: "Shraddha Pawar",
        quote: [
          "One thing good about being a dj is that you get a chance to reinvent yourself every single day. and Muzibition gave me a platform to reinvent myself. muzibition taught me to love my passion. muzibition taught me that music is much more than lyrics & beats.",
          "it’s like mud…it’s all about how creatively you shape it, and present it in front of the world. manoj sir is a great mentor and an extremely humble personality. thank you manoj sir, all the fellow students & entire muzibition team. and congratulations on making it this far! :)",
        ],
      },
      {
        name: "Rishi Ved",
        quote: [
          "It’s a great experience. Initially i had my knowledge restricted to bollywood. Later on Muzibition helped me to develop my theoretical knowledge of other music genres. Friendly environment to learn music. Happy being part of Muzibition learning school.",
        ],
      },
      {
        name: "Ashish Sawant",
        quote: [
          "It was a great experience learning from Manoj Karnani sir. I have learned many new things in music. Thank you sir, you & Muzibition means a lot to me.",
        ],
      },
      {
        name: "Jaimeen Shah",
        quote: [
          "Its been great being at Muzibition DJ’s the knowledge that i got from DJ Manoj Karnani was great learning at Muzibition DJ’s would add a new flavor to your life that is MUSIC. My knowledge in House Music has gone on a different level all thanks to Sir & its been an awesome 4 years of musical journey with Muzibition.",
        ],
      },
      {
        name: "Vikram Ahuja",
        quote: [
          "It’s real fun learning the art of DJing by non other then Master of Mixes DJ Manoj Karnani… One have to catch him playing live to experience his music. Manoj you are fabulous and we admire your talent and want to become a successful DJ like you.",
        ],
      },
      {
        name: "Ameyash",
        quote: [
          "It has been a great time learning at Muzibition.. at Muzibition i was able to learn how to dj in the proper way not only did i learn to dj, Manoj sir has also helped us in increasing our knowledge in different genres of music. We understood that to be a good dj you don’t need to listen to only an particular type of genre but explore all the genres, I have been learning for quite some time and it has been really helpful for me. Sir also sends us to events where we perform..",
          "And i have recently joined the music production course and within the first few classes i have learned a lot. After joining this class i learned to dj, explored different genres of music and now i am learning to produce music in the right way. And sir has always been friendly with us and has helped us a lot and is a great teacher and a musician.",
          "The price is also very low as compared to other music institutions.",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's make music happen.",
    body: "Admissions are open for the new batch. Call, message or drop your details and we'll get back to you.",
    studioName: "Muzibition Studio",
    address: "LG-21 Avior, Nirmal Galaxy, Opp Johnson & Johnsons, L.B.S. Road, Mulund (West), Mumbai 400080",
    phone: "+91 98920 22240",
    phoneRaw: "919892022240",
    email: "muzibition@yahoo.com",
    whatsappText: "Hi Muzibition, I'd like to know about your DJ courses.",
    // Form posts here. Create a free form at formspree.io and paste its URL.
    // Until then the form falls back to opening the visitor's email app.
    formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    courseOptions: ["Pro DJ", "Electronic Music Production", "Turntablism", "Not sure yet"],
  },

  socials: [
    { label: "YouTube", href: "https://www.youtube.com/user/TheMuzibition" },
    { label: "Facebook", href: "https://www.facebook.com/pages/Muzibition-The-DJ-Workshop/126250764080085" },
    { label: "SoundCloud", href: "https://soundcloud.com/dj-manojkarnani" },
  ],

  footer: { note: "© MUZIBITION DJs. Mulund West, Mumbai." },
};
