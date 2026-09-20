import {
  exterior, entrance, night, bonFair,
  standardRoom, deluxeRoom, deluxeBalcony, rooms1, rooms2, rooms3, rooms3_2, rooms4, rooms5, bathroom, roomsBathroom,
  lounge, looby, looby3, sittingArea, sittingArea2, dining, diningArea, fitness,
  snowView, snowView2, sunset, sunset2, views, views2,
  food, food2, foodWithMountain, rooms as roomsImage
} from "@/lib/images";

import { blogExtraArticles } from "@/lib/blog-extra";

export type RoomInfo = {
  name: string;
  image: string;
  guests: string;
  copy: string;
  features: string[];
  messageKey: "standard" | "deluxe";
};

export const rooms: RoomInfo[] = [
  {
    name: "Standard Room",
    image: standardRoom,
    guests: "2 guests",
    copy: "A calm, wood-warmed room with a comfortable double bed, soft lighting and a private attached bathroom — ideal for couples and solo travellers.",
    features: ["Double bed", "Attached bathroom", "Hot water", "Mountain air"],
    messageKey: "standard",
  },
  {
    name: "Deluxe Room",
    image: deluxeRoom,
    guests: "2–3 guests",
    copy: "Our largest room with full pine panelling, a sit-out by the window and a private balcony that opens straight onto the deodar ridgeline.",
    features: ["Private balcony", "Seating area", "Smart TV", "Valley view"],
    messageKey: "deluxe",
  },
];

export type Destination = {
  slug: string;
  name: string;
  intro: string;
  thingsToDo: string[];
  bestTime: string;
  nearby: string[];
  howToReach: string;
  asABase: string;
};

export const destinations: Destination[] = [
  {
    slug: "theog",
    name: "Theog",
    intro:
      "Theog is a small hill town on NH-5, roughly 30 km east of Shimla, that most travellers pass through on the way to Kufri, Narkanda or the apple belt of Kotgarh. It has a quiet bazaar, a few local eateries and wide views over the surrounding ridges — a practical and peaceful base for exploring the upper Shimla hills.",
    thingsToDo: [
      "Walk through Theog bazaar and the surrounding apple orchards",
      "Drive up to the ridge near Kathot for sunrise valley views",
      "Use Theog as a starting point for short drives to Fagu and Kufri",
      "Visit the small local temples around the Theog area",
    ],
    bestTime:
      "March to June for pleasant weather and clear views; October to November for the apple harvest and crisp skies. Winters (December–February) can bring snow and cold nights.",
    nearby: ["Fagu (8 km)", "Kufri (22 km)", "Shimla (30 km)", "Narkanda (56 km)"],
    howToReach:
      "Theog is on NH-5, about an hour's drive from Shimla. Regular state buses run between Shimla and Theog. The nearest major railhead is Shimla (narrow gauge) and the nearest airport is Jubbarhatti near Shimla.",
    asABase:
      "Alpine Crest Homestay sits in Village Kathot, a short distance from Theog town, making it a convenient base for day trips to Fagu, Kufri and the surrounding ridges without staying in the busier tourist stops.",
  },
  {
    slug: "kufri",
    name: "Kufri",
    intro:
      "Kufri is a small hill station about 16 km from Shimla, known for its winter snow, the Himalayan Nature Park and views toward the greater ranges. It gets busy in peak season and on winter weekends when visitors come for snow activities.",
    thingsToDo: [
      "Visit the Himalayan Nature Park, home to local wildlife including snow leopards and bears",
      "Enjoy horse rides and short nature walks around Mahasu Peak",
      "In winter, try basic snow activities like tobogganing",
      "Take in the mountain views from the Kufri viewpoints",
    ],
    bestTime:
      "December to February for snow; March to June for pleasant weather and clear views. Avoid peak holiday weekends if you prefer a quieter experience.",
    nearby: ["Fagu (9 km)", "Theog (22 km)", "Shimla (16 km)", "Chail (45 km)"],
    howToReach:
      "Kufri is about a 45-minute drive from Shimla via NH-5 and the Fagu–Kufri road. Taxis are the most common way to reach Kufri; state buses also connect Shimla to Kufri during the season.",
    asABase:
      "Alpine Crest Homestay near Theog is a short drive from Kufri, letting you enjoy Kufri's sights during the day and return to a quiet, uncrowded setting in the evening.",
  },
  {
    slug: "shimla",
    name: "Shimla",
    intro:
      "Shimla is the capital of Himachal Pradesh and one of India's most popular hill stations, known for the Mall Road, the Ridge, colonial-era architecture and the heritage Kalka–Shimla toy train. It is the natural gateway to the surrounding hill destinations.",
    thingsToDo: [
      "Stroll the Mall Road and the Ridge, with views over the surrounding hills",
      "Visit the Viceregal Lodge (Indian Institute of Advanced Study) and Christ Church",
      "Ride the Kalka–Shimla narrow-gauge toy train, a UNESCO World Heritage site",
      "Explore Jakhu Temple and the surrounding cedar forests",
    ],
    bestTime:
      "March to June for summer escapes; October to November for clear views; December to February for snow. Monsoon months (July–September) can bring heavy rain.",
    nearby: ["Kufri (16 km)", "Theog (30 km)", "Mashobra (12 km)", "Chail (45 km)"],
    howToReach:
      "Shimla is connected by road (NH-5), by the Kalka–Shimla toy train, and by Jubbarhatti airport. It is about 3.5 hours by road from Chandigarh.",
    asABase:
      "Alpine Crest Homestay near Theog is roughly an hour from Shimla, making it easy to spend a day exploring Shimla and then retreat to the quiet of the Kathot hills.",
  },
  {
    slug: "fagu",
    name: "Fagu",
    intro:
      "Fagu is a tiny village on the Shimla–Kufri–Narkanda road, surrounded by apple orchards and potato fields. It is known for its peaceful atmosphere and panoramic views of the surrounding ranges — a quiet stop between Kufri and Theog.",
    thingsToDo: [
      "Walk through the apple orchards and terraced fields around Fagu",
      "Enjoy the roadside viewpoints looking toward the greater Himalaya",
      "Stop for local food at the small dhabas along the highway",
      "Use Fagu as a peaceful photography stop away from Kufri's crowds",
    ],
    bestTime:
      "April to June for pleasant weather; October for the apple harvest and clear skies. Winters can bring light snow.",
    nearby: ["Theog (8 km)", "Kufri (9 km)", "Shimla (24 km)", "Narkanda (48 km)"],
    howToReach:
      "Fagu sits on NH-5 between Theog and Kufri, easily reached by taxi or by state buses running along the Shimla–Narkanda route.",
    asABase:
      "Alpine Crest Homestay near Theog is only a short drive from Fagu, making it easy to visit the village and its orchards as a half-day trip.",
  },
  {
    slug: "narkanda",
    name: "Narkanda",
    intro:
      "Narkanda is a hill town about 60 km from Shimla, set at nearly 2,700 metres. It is known for skiing in winter, apple orchards in autumn, and the Hatu Peak trek. It sits at the edge of the apple belt that includes Kotgarh and Thanedhar.",
    thingsToDo: [
      "Trek or drive up to Hatu Peak for panoramic Himalayan views",
      "In winter, try skiing at the Narkanda ski slopes",
      "Visit the apple orchards of Kotgarh and Thanedhar in autumn",
      "Explore the small town and the surrounding deodar forests",
    ],
    bestTime:
      "January to February for skiing and snow; March to June for trekking; October for the apple harvest.",
    nearby: ["Theog (56 km)", "Shimla (60 km)", "Hatu Peak (7 km)", "Kotgarh (16 km)"],
    howToReach:
      "Narkanda is on NH-5 past Theog and Fagu, about a 2.5-hour drive from Shimla. State buses and taxis run along this route.",
    asABase:
      "Alpine Crest Homestay near Theog is a convenient lower-base for travellers heading to Narkanda, offering a quieter, warmer stop before the higher altitude.",
  },
  {
    slug: "chail",
    name: "Chail",
    intro:
      "Chail is a quiet hill station about 45 km from Shimla, developed as a summer retreat by the Maharaja of Patiala. It is known for the Chail Palace, the world's highest cricket ground, and dense deodar forests — a peaceful alternative to Shimla.",
    thingsToDo: [
      "Visit the Chail Palace and its manicured grounds",
      "See the historic cricket ground, one of the highest in the world",
      "Walk through the Chail Wildlife Sanctuary and surrounding deodar forests",
      "Enjoy quiet valley views away from Shimla's crowds",
    ],
    bestTime:
      "March to June for pleasant weather; October to November for clear views. Winters are cold with occasional snow.",
    nearby: ["Shimla (45 km)", "Kufri (30 km)", "Theog (45 km)", "Sadhupul (20 km)"],
    howToReach:
      "Chail is about a 2-hour drive from Shimla via Kandaghat. Taxis are the most common way to reach Chail.",
    asABase:
      "Alpine Crest Homestay near Theog can serve as a base for travellers combining Chail with the Theog–Kufri circuit, though Chail lies on a different road from Shimla.",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  relatedLinks: { to: string; label: string }[];
  body: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "best-places-to-visit-near-theog",
    title: "Best Places to Visit Near Theog, Himachal Pradesh",
    excerpt:
      "A practical guide to the quiet spots, viewpoints and day-trip destinations around Theog, beyond the usual Shimla tourist trail.",
    date: "2025-09-12",
    readTime: "6 min read",
    relatedLinks: [
      { to: "/homestay-at-theog", label: "Homestay at Theog" },
      { to: "/places-to-visit/kufri", label: "Places to visit near Kufri" },
      { to: "/rooms", label: "Rooms at Alpine Crest" },
    ],
    body: [
      "Theog sits on NH-5, about an hour east of Shimla, and most travellers simply drive through it on the way to Kufri or Narkanda. That is a missed opportunity. The ridge around Theog — and the villages just off the highway like Kathot — offer some of the quietest mountain views in the upper Shimla hills, without the crowds that gather in Kufri or on the Mall Road.",
      "Start with the ridge at Kathot. The east-facing balconies here catch the first light over the Shali Tibba range, and on a clear morning the view stretches across the pine-covered valleys toward Fagu. It is the kind of spot where you want a cup of chai and nothing on your schedule.",
      "From Theog, a short drive takes you to Fagu, a tiny village surrounded by apple orchards and terraced fields. Fagu is a peaceful stop for photography and a break from the road. Carry on a little further and you reach Kufri, where the Himalayan Nature Park and the views from Mahasu Peak are the main draws.",
      "If you have a full day, the drive up to Narkanda and Hatu Peak is well worth the effort. The road climbs through deodar forest to nearly 2,700 metres, and the panoramic view from the top takes in a long sweep of the greater Himalaya. In autumn, the apple orchards of Kotgarh and Thanedhar along the way are a destination in themselves.",
      "For a quieter day, stay closer to Theog. Walk through the local apple orchards, visit the small temples in the surrounding villages, and take an unhurried lunch at the homestay. The appeal of the Theog area is precisely that it does not require a packed itinerary — the mountain views and the slow pace are the point.",
      "Alpine Crest Homestay in Village Kathot makes a convenient base for all of these trips. You get the peace of the Theog ridge with easy road access to Fagu, Kufri and Narkanda, and the host can help arrange taxis for day excursions.",
    ],
  },
  {
    slug: "things-to-do-in-kufri",
    title: "Things to Do in Kufri: Complete Travel Guide",
    excerpt:
      "Kufri is best known for snow, but there is more to do year-round. Here is a practical guide to Kufri's sights, timing and how to enjoy it.",
    date: "2025-09-10",
    readTime: "7 min read",
    relatedLinks: [
      { to: "/homestay-at-kufri", label: "Homestay at Kufri" },
      { to: "/places-to-visit/kufri", label: "Explore Kufri" },
      { to: "/rooms", label: "Rooms at Alpine Crest" },
    ],
    body: [
      "Kufri is a small hill station about 16 km from Shimla, and for most visitors it is the first real 'mountain' stop on the road out of Shimla. It is best known for winter snow, but the area has plenty to offer through the rest of the year too.",
      "The Himalayan Nature Park is the highlight for most travellers. It is home to local Himalayan wildlife including snow leopards, Himalayan bears and various pheasants, set in a quiet cedar forest. It is a good, low-effort visit for families and for anyone interested in the region's ecology.",
      "For views, head toward Mahasu Peak. The short walk or horse ride up gives you a broad panorama of the surrounding ranges. On a clear day the view is one of the better ones accessible without a long trek.",
      "In winter — usually January and February — Kufri gets snow, and basic snow activities like tobogganing are available. This is when Kufri is at its busiest, so if you prefer a quieter experience, visit on a weekday or consider coming in the shoulder months instead.",
      "One of the best ways to enjoy Kufri is to not stay there. Kufri gets crowded in peak season, and the accommodation options are limited and often fully booked. Staying a short drive away — at a peaceful homestay near Theog — lets you enjoy Kufri's sights during the day and return to a quiet setting in the evening.",
      "Alpine Crest Homestay near Theog is roughly a short drive from Kufri, making it a practical base. You can spend the morning at the Nature Park and the viewpoints, then drive back to the homestay for a slow lunch on the balcony.",
    ],
  },
  {
    slug: "best-time-to-visit-theog",
    title: "Best Time to Visit Theog, Himachal Pradesh",
    excerpt:
      "Theog changes character through the year. Here is what to expect in each season, so you can pick the right time for your trip.",
    date: "2025-09-08",
    readTime: "5 min read",
    relatedLinks: [
      { to: "/homestay-at-theog", label: "Homestay at Theog" },
      { to: "/places-to-visit/theog", label: "Explore Theog" },
      { to: "/contact", label: "Check availability" },
    ],
    body: [
      "Theog sits at a moderate altitude on NH-5, which means it has a longer comfortable season than the higher stops like Narkanda. Each season offers a different experience.",
      "Spring (March to April) is one of the nicest times to visit. The weather is pleasant, the orchards begin to bloom, and the views are clear after the winter. This is a good time for walking and for photography.",
      "Summer (May to June) is the peak season for the broader Shimla area. Theog stays quieter than Shimla and Kufri, which is part of its appeal. Days are comfortable and evenings are cool. Book ahead if you plan to visit in this window.",
      "The monsoon (July to September) brings green to the hills but also rain and the risk of road disruption. If you do not mind wet weather and want the hills at their greenest, this can be a peaceful time, but check road conditions before you travel.",
      "Autumn (October to November) is the apple harvest season and one of the best times to visit. The weather is crisp, the skies are clear, and the orchards around Theog and Fagu are full of activity. This is a favourite time for photographers.",
      "Winter (December to February) brings cold nights and the chance of snow, particularly in January. Theog itself gets less snow than Kufri or Narkanda, but it can still see a dusting. If you want snow without the Kufri crowds, this is worth considering — just pack warm.",
    ],
  },
  {
    slug: "kufri-vs-shimla",
    title: "Kufri vs Shimla: Which Place Should You Stay In?",
    excerpt:
      "Shimla and Kufri offer very different experiences. Here is a practical comparison to help you choose where to base your Himachal trip.",
    date: "2025-09-05",
    readTime: "6 min read",
    relatedLinks: [
      { to: "/homestay-at-kufri", label: "Homestay at Kufri" },
      { to: "/homestay-at-shimla", label: "Homestay at Shimla" },
      { to: "/rooms", label: "Rooms at Alpine Crest" },
    ],
    body: [
      "Shimla and Kufri are the two most popular stops in the upper Shimla hills, and travellers often wonder which one to choose as a base. The honest answer is that they serve different purposes, and the best choice depends on what kind of trip you want.",
      "Shimla is a proper town. It has the Mall Road, the Ridge, the Viceregal Lodge, cafes, restaurants and the toy train. If you enjoy walking through a colonial-era hill town, eating out, and having plenty of things to do within walking distance, Shimla is the place. The trade-off is that it is busy, especially in peak season, and accommodation in the town centre can feel cramped.",
      "Kufri is much smaller and more about nature than about town life. Its main draws are the Himalayan Nature Park, the views from Mahasu Peak, and snow in winter. It is a good choice if your priority is quiet and views, but it has limited dining and accommodation, and it gets very crowded on winter weekends when people come for snow.",
      "There is a third option that many travellers overlook: stay near Theog, between Shimla and Kufri. A homestay in the Kathot area gives you the peace and mountain views that draw people to Kufri, with easy road access to both Shimla and Kufri for day trips. You avoid the crowds of both and get a more authentic mountain experience.",
      "Alpine Crest Homestay near Theog is designed for exactly this. It is roughly an hour from Shimla and a short drive from Kufri, so you can explore both during the day and return to a quiet balcony in the evening. For most travellers who want a balance of convenience and peace, this is the better base than either Shimla or Kufri alone.",
    ],
  },
  {
    slug: "weekend-getaway-near-shimla",
    title: "Weekend Getaway Near Shimla",
    excerpt:
      "A two-day itinerary for a peaceful weekend near Shimla, based out of the Theog ridge — away from the Mall Road crowds.",
    date: "2025-09-03",
    readTime: "5 min read",
    relatedLinks: [
      { to: "/homestay-at-shimla", label: "Homestay at Shimla" },
      { to: "/homestay-at-theog", label: "Homestay at Theog" },
      { to: "/places-to-visit", label: "Places to visit" },
    ],
    body: [
      "A weekend near Shimla does not have to mean fighting for space on the Mall Road. With two days, you can base yourself on the Theog ridge and combine quiet mountain time with a day trip to the better-known sights.",
      "Day one: arrive at Alpine Crest Homestay in Kathot, settle in, and take tea on the balcony. In the afternoon, walk through the apple orchards around the village, or simply rest and enjoy the view. Dinner is home-cooked Himachali food in the family kitchen — request siddu or madra if you want something local.",
      "Day two: after an early breakfast, drive to Kufri for the Himalayan Nature Park and the views from Mahasu Peak. On the way back, stop at Fagu for a walk through the orchards and a roadside chai. Return to the homestay for a slow evening on the terrace.",
      "If you have an extra half-day, add a morning visit to Shimla for the Ridge, Christ Church and a walk down the Mall Road, then drive back to the homestay before the evening traffic builds.",
      "The advantage of this plan is that you get the highlights of the Shimla hills without staying in the busiest parts. You sleep in a quiet room with mountain air, and you spend your days out exploring rather than navigating crowded hotel areas.",
    ],
  },
];

export const allBlogArticles: BlogArticle[] = [...blogArticles, ...blogExtraArticles];

export function getArticle(slug: string): BlogArticle | undefined {
  return [...blogArticles, ...blogExtraArticles].find((a) => a.slug === slug);
}

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  { src: exterior, alt: "Alpine Crest Homestay exterior on a Himalayan slope near Theog", category: "Property" },
  { src: entrance, alt: "Entrance and approach to Alpine Crest Homestay, Theog", category: "Property" },
  { src: night, alt: "Alpine Crest Homestay at night", category: "Property" },
  { src: bonFair, alt: "Bonfire at Alpine Crest Homestay", category: "Property" },
  { src: lounge, alt: "Wood-panelled common lounge and dining area at Alpine Crest Homestay", category: "Property" },
  { src: looby, alt: "Lobby area at Alpine Crest Homestay", category: "Property" },
  { src: looby3, alt: "Lobby area at Alpine Crest Homestay", category: "Property" },
  { src: sittingArea, alt: "Sitting area at Alpine Crest Homestay", category: "Property" },
  { src: sittingArea2, alt: "Sitting area at Alpine Crest Homestay", category: "Property" },
  { src: diningArea, alt: "Dining area at Alpine Crest Homestay", category: "Property" },
  { src: fitness, alt: "Fitness corner at Alpine Crest Homestay", category: "Property" },
  { src: standardRoom, alt: "Standard room with double bed at Alpine Crest Homestay, Theog", category: "Rooms" },
  { src: deluxeRoom, alt: "Deluxe room with pine panelling at Alpine Crest Homestay", category: "Rooms" },
  { src: bathroom, alt: "Clean attached bathroom at Alpine Crest Homestay", category: "Rooms" },
  { src: deluxeBalcony, alt: "Deluxe room balcony door opening onto the valley at Alpine Crest Homestay", category: "Balcony" },
  { src: snowView, alt: "Snow view from Alpine Crest Homestay", category: "Views" },
  { src: snowView2, alt: "Snow covered mountains view from Alpine Crest Homestay", category: "Views" },
  { src: sunset, alt: "Sunset view from Alpine Crest Homestay", category: "Views" },
  { src: sunset2, alt: "Sunset view from Alpine Crest Homestay", category: "Views" },
  { src: views, alt: "Mountain view from Alpine Crest Homestay", category: "Views" },
  { src: views2, alt: "Scenic mountain view from Alpine Crest Homestay", category: "Views" },
  { src: food, alt: "Home-cooked Himachali thali served at Alpine Crest Homestay", category: "Food" },
  { src: food2, alt: "Delicious local food served at Alpine Crest Homestay", category: "Food" },
  { src: foodWithMountain, alt: "Enjoying food with a mountain view at Alpine Crest Homestay", category: "Food" },
];

export type Amenity = {
  icon: string;
  label: string;
  description: string;
};

export const amenitiesList: Amenity[] = [
  { icon: "Wifi", label: "Free Wi-Fi", description: "Stay connected across the property." },
  { icon: "Car", label: "Private Parking", description: "Secure parking right at the house." },
  { icon: "Zap", label: "Power Backup", description: "Backup for uninterrupted comfort." },
  { icon: "Sun", label: "Private Balcony", description: "East-facing balconies with valley views." },
  { icon: "Trees", label: "Terrace & Garden", description: "Open terrace and orchard garden to relax in." },
  { icon: "UtensilsCrossed", label: "Home-Cooked Food", description: "Himachali meals on request from the family kitchen." },
  { icon: "Mountain", label: "Mountain Views", description: "Panoramic views of the surrounding ranges." },
  { icon: "Leaf", label: "Peaceful Location", description: "A quiet setting away from tourist crowds." },
  { icon: "Dumbbell", label: "Fitness Corner", description: "A small space to keep up your routine." },
  { icon: "ShowerHead", label: "Hot Water 24×7", description: "Round-the-clock hot water in all rooms." },
];
