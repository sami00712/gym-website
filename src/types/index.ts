export interface GymConfig {
  name: string;
  tagline: string;
  subtitle: string;
  locationCity: string;
  locationCountry: string;
  fullAddressNote: string;
  googleMapsUrl: string;
  phone: string;
  whatsappPhone: string;
  whatsappMessage: string;
  email: string;
  openingHoursWeekday: string;
  openingHoursWeekend: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  priceNote: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  duration: string;
  level: string;
  intensity: 'Medium' | 'High' | 'Elite';
  description: string;
  benefits: string[];
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Interior' | 'Equipment' | 'Training' | 'Atmosphere';
  image: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
