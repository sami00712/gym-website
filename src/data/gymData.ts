import { GymConfig, FeatureItem, FacilityItem, MembershipPlan, TrainerItem, ProgramItem, GalleryPhoto, FaqItem } from '../types';

import heroImg from '../assets/images/hero_gym_cinematic_1790331460399.jpg';
import strengthImg from '../assets/images/facility_strength_zone_1790331476774.jpg';
import functionalImg from '../assets/images/facility_functional_area_1790331491172.jpg';
import trainerImg from '../assets/images/trainer_spotlight_1790331503917.jpg';
import transformationImg from '../assets/images/gym_transformation_lifestyle_1790331521435.jpg';

export const gymConfig: GymConfig = {
  name: 'Eleven Gym Lahore',
  tagline: 'BUILD YOUR STRONGEST SELF.',
  subtitle: 'Train stronger. Move better. Become your best version.',
  locationCity: 'Lahore',
  locationCountry: 'Pakistan',
  fullAddressNote: 'Eleven Gym, Lahore, Punjab, Pakistan',
  googleMapsUrl: 'https://share.google/ZED9ffzlr6PshSvy2',
  phone: '+92 300 1111999',
  whatsappPhone: '+923001111999',
  whatsappMessage: 'Hello Eleven Gym Lahore, I would like to inquire about membership options and schedule a gym visit.',
  email: 'contact@elevengymlahore.pk',
  openingHoursWeekday: 'Monday – Saturday: 6:00 AM – 11:30 PM',
  openingHoursWeekend: 'Sunday: 9:00 AM – 8:00 PM',
  stats: [
    { label: 'Active Members*', value: '500+', subtext: 'Dedicated community' },
    { label: 'Training Programs', value: '20+', subtext: 'Goal-oriented tracks' },
    { label: 'Elite Coaches', value: '10+', subtext: 'Certified specialists' },
    { label: 'Weekly Access', value: '7 Days', subtext: 'Flexible schedule' },
  ],
};

export const whyChooseCards: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Precision Equipment',
    description: 'Commercial biomechanical pin-loaded machines, Olympic barbells, calibrated competition plates, and dedicated lifting platforms.',
    iconName: 'Dumbbell',
  },
  {
    id: 'feat-2',
    title: 'Certified Master Trainers',
    description: 'Accredited strength and conditioning coaches providing science-backed training protocols, posture corrections, and programming.',
    iconName: 'Award',
  },
  {
    id: 'feat-3',
    title: 'Personalized Programming',
    description: 'Tailored workout and nutrition roadmaps built around your biomechanics, body composition goals, and current fitness baseline.',
    iconName: 'Target',
  },
  {
    id: 'feat-4',
    title: 'Dark Luxury Ambience',
    description: 'A focused, distraction-free environment engineered with curated acoustics, temperature-controlled airflow, and premium lighting.',
    iconName: 'Sparkles',
  },
  {
    id: 'feat-5',
    title: 'Flexible Membership Tiers',
    description: 'Transparent plans designed for consistent athletes, without hidden administrative fees or locking lock-in barriers.',
    iconName: 'CreditCard',
  },
  {
    id: 'feat-6',
    title: 'Disciplined Community',
    description: 'Surround yourself with like-minded individuals in Lahore who respect the craft of continuous physical transformation.',
    iconName: 'Users',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    id: 'strength-training',
    title: 'Heavy Strength & Powerlifting',
    category: 'Free Weights & Racks',
    description: 'Dedicated squat racks, competition Olympic benches, heavy-gauge rubber deadlift stations, and dumbbells up to 50kg.',
    image: strengthImg,
    highlights: ['Multi-grip pull up stations', 'Calibrated bumper plates', 'Competition power racks'],
  },
  {
    id: 'functional-turf',
    title: 'Athletic Conditioning & Turf',
    category: 'Functional Movement',
    description: 'A 20-meter sprint turf lane equipped with weighted push sleds, battle ropes, plyometric boxes, and kettlebell arrays.',
    image: functionalImg,
    highlights: ['Sled push track', 'Battle ropes & kettlebells', 'High-density impact flooring'],
  },
  {
    id: 'cardio-zone',
    title: 'Endurance & Cardio Arena',
    category: 'Metabolic Conditioning',
    description: 'StairMasters, commercial curved treadmills, assault air bikes, and rowing ergometers with heart rate telemetry.',
    image: heroImg,
    highlights: ['Curved motorless runners', 'Concept2 rowers & SkiErgs', 'Personal metric screens'],
  },
  {
    id: 'hypertrophy-zone',
    title: 'Biomechanical Machine Zone',
    category: 'Isolate & Hypertrophy',
    description: 'Engineered selectorized and plate-loaded machines designed to maximize muscle engagement while protecting joints.',
    image: strengthImg,
    highlights: ['Converging chest & shoulder presses', 'Hack squat & pendulum leg press', 'Cable crossover towers'],
  },
  {
    id: 'coaching-suite',
    title: '1-on-1 Personal Training Suite',
    category: 'Private Coaching',
    description: 'Dedicated private assessment area for functional movement screenings, body composition tracking, and custom coaching.',
    image: trainerImg,
    highlights: ['InBody assessment station', 'Movement screening area', 'Private coaching lanes'],
  },
  {
    id: 'amenities-recovery',
    title: 'Locker & Changing Suites',
    category: 'Luxury Amenities',
    description: 'Spacious, impeccably sanitized changing rooms with secure digital lockers, hot rain showers, and grooming amenities.',
    image: transformationImg,
    highlights: ['Digital keyless lockers', 'High-pressure hot showers', 'Clean towel service available'],
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic Access',
    badge: 'Core Fitness',
    priceNote: 'Contact for Pricing',
    description: 'Ideal for independent lifters seeking full access to premier strength and cardio equipment.',
    features: [
      'Full Gym Floor & Free Weights Access',
      'Cardio & Functional Turf Access',
      'Locker Room & Shower Facilities',
      'Free Initial Fitness Assessment',
      'Access 7 Days a Week',
    ],
    ctaLabel: 'GET MEMBERSHIP DETAILS',
  },
  {
    id: 'premium',
    name: 'Premium Member',
    badge: 'Most Popular',
    popular: true,
    priceNote: 'Contact for Pricing',
    description: 'The optimal choice for serious fitness enthusiasts seeking structured progression and guidance.',
    features: [
      'All Basic Access Benefits',
      'Dedicated Gym Induction & Custom Routine',
      'Monthly InBody Composition Check',
      'Complimentary Guest Pass (1 / Month)',
      'Access to Functional Conditioning Workshops',
      'Priority Locker Access',
    ],
    ctaLabel: 'GET MEMBERSHIP DETAILS',
  },
  {
    id: 'elite',
    name: 'Elite VIP',
    badge: 'Full Coaching',
    priceNote: 'Contact for Pricing',
    description: 'Comprehensive high-touch physical transformation program with personalized 1-on-1 coaching.',
    features: [
      'All Premium Tier Privileges',
      'Dedicated 1-on-1 Personal Trainer Sessions',
      'Customized Sports Nutrition & Macro Guidance',
      'Weekly Biometric & Performance Audits',
      'Unlimited Guest Passes (Accompanied)',
      'VIP Locker & Premium Eleven Gym Welcome Kit',
    ],
    ctaLabel: 'GET MEMBERSHIP DETAILS',
  },
];

export const trainersData: TrainerItem[] = [
  {
    id: 'trainer-1',
    name: 'Coach Hamza Malik',
    role: 'Head Strength & Conditioning',
    specialty: 'Powerlifting & Athletic Performance',
    experience: '8+ Years Experience',
    bio: 'Specializes in Olympic barbell biomechanics, progressive overload strategies, and elite strength foundation for athletes.',
    image: trainerImg,
    certifications: ['CSCS Certified', 'CrossFit L2', 'Olympic Weightlifting Specialist'],
  },
  {
    id: 'trainer-2',
    name: 'Coach Ayesha Tariq',
    role: 'Functional & Mobility Specialist',
    specialty: 'Movement Correction & Body Transformation',
    experience: '6+ Years Experience',
    bio: 'Passionate about structural alignment, postpartum athletic reconditioning, and sustainable fat loss regimens.',
    image: trainerImg,
    certifications: ['ACE Certified Personal Trainer', 'Precision Nutrition L1', 'FMS Certified'],
  },
  {
    id: 'trainer-3',
    name: 'Coach Bilal Raza',
    role: 'Hypertrophy & Physique Coach',
    specialty: 'Bodybuilding & Metabolic Conditioning',
    experience: '7+ Years Experience',
    bio: 'Focuses on periodized resistance training, neuromuscular mind-muscle connection, and competition-ready conditioning.',
    image: trainerImg,
    certifications: ['ISSA Master Trainer', 'Certified Strength Coach', 'Sports Nutritionist'],
  },
];

export const programsData: ProgramItem[] = [
  {
    id: 'prog-strength',
    title: 'Hypertrophy & Strength System',
    duration: '12-Week Protocol',
    level: 'Intermediate to Advanced',
    intensity: 'High',
    description: 'A scientifically structured progressive overload program designed to maximize lean muscle mass and raw power output.',
    benefits: ['Substantial strength gains in core compound lifts', 'Optimized neuromuscular efficiency', 'Structured recovery schedule'],
    image: strengthImg,
  },
  {
    id: 'prog-fatloss',
    title: 'High-Density Body Recomp',
    duration: '8-Week Accelerator',
    level: 'All Fitness Baselines',
    intensity: 'High',
    description: 'Combines compound lifting with high-octane metabolic intervals to incinerate body fat while preserving lean muscular density.',
    benefits: ['Elevated basal metabolic rate', 'Accelerated fat oxidation', 'Cardiovascular endurance reinforcement'],
    image: functionalImg,
  },
  {
    id: 'prog-personal',
    title: '1-on-1 Elite Personal Coaching',
    duration: 'Flexible / Ongoing',
    level: 'Custom Tailored',
    intensity: 'Elite',
    description: 'Private sessions with a master coach who monitors your daily form, tracks every rep, and structures your complete lifestyle.',
    benefits: ['Zero guesswork in workout design', 'Weekly accountability checks', 'Strict injury-prevention mechanics'],
    image: trainerImg,
  },
  {
    id: 'prog-foundation',
    title: 'Beginner Lifting Foundations',
    duration: '4-Week Onboarding',
    level: 'Beginner Friendly',
    intensity: 'Medium',
    description: 'Designed specifically for newcomers to master compound movements, gym etiquette, and build unstoppable training habits.',
    benefits: ['Master the barbell squat, bench, and hinge safely', 'Confidence in any gym space', 'Gradual physical conditioning'],
    image: heroImg,
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Main Strength Floor',
    category: 'Interior',
    image: heroImg,
    caption: 'Eleven Gym Lahore high-spec lifting facility with bespoke black steel racks.',
  },
  {
    id: 'gal-2',
    title: 'Free Weight Arsenal',
    category: 'Equipment',
    image: strengthImg,
    caption: 'Precision calibrated matte black dumbbells and Olympic barbells.',
  },
  {
    id: 'gal-3',
    title: 'Functional Sprint Turf',
    category: 'Training',
    image: functionalImg,
    caption: 'Dedicated indoor athletic turf for sled pushes, sprints, and conditioning.',
  },
  {
    id: 'gal-4',
    title: 'Coaching in Action',
    category: 'Atmosphere',
    image: trainerImg,
    caption: 'Our certified coaching staff guiding members through precision movements.',
  },
  {
    id: 'gal-5',
    title: 'Pure Focus & Determination',
    category: 'Training',
    image: transformationImg,
    caption: 'Atmosphere engineered for deep focus, heavy lifts, and daily discipline.',
  },
  {
    id: 'gal-6',
    title: 'Lifting Platform Precision',
    category: 'Equipment',
    image: strengthImg,
    caption: 'Heavy shock-absorbing platforms built for serious deadlifts and cleans.',
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Eleven Gym located in Lahore?',
    answer: 'Eleven Gym is located in Lahore, Pakistan. You can access our exact location, directions, and navigation anytime via our verified Google Maps link: https://share.google/ZED9ffzlr6PshSvy2 or by contacting our front desk via WhatsApp.',
  },
  {
    id: 'faq-2',
    question: 'How can I get current membership pricing?',
    answer: 'We provide several flexible membership options (Basic, Premium, and Elite Coaching). Because promotions, seasonal packages, and student discounts change regularly, please click "Get Membership Details" or reach out via WhatsApp to receive the latest rate card immediately.',
  },
  {
    id: 'faq-3',
    question: 'What are the operating hours of Eleven Gym?',
    answer: 'We are open 7 days a week: Monday through Saturday from 6:00 AM to 11:30 PM, and Sunday from 9:00 AM to 8:00 PM. This provides maximum flexibility for early morning routines and late evening training sessions.',
  },
  {
    id: 'faq-4',
    question: 'Can beginners join Eleven Gym without prior lifting experience?',
    answer: 'Absolutely. We pride ourselves on creating an encouraging, disciplined environment. Every new member receives a complimentary initial movement screening and equipment walkthrough. Our "Beginner Lifting Foundations" program is specifically designed to build confidence and technique.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer dedicated 1-on-1 personal training?',
    answer: 'Yes! Our certified personal trainers work with members for strength building, body recomposition, sports conditioning, and corrective exercise. Personal training includes customized workout routines and nutritional guidance.',
  },
  {
    id: 'faq-6',
    question: 'Can I visit for a walkthrough or trial workout?',
    answer: 'Yes. Prospective members are warmly invited to book a walkthrough or request a day pass consultation. Simply submit our contact form or send a message on WhatsApp and our concierge team will reserve your spot.',
  },
];
