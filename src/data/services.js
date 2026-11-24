import { photos } from './images'

/**
 * Home-page service cards (8). `anchor` links to the matching section on /services.
 * Icons are lucide-react component names, resolved in the components.
 */
export const coreServices = [
  {
    title: 'Interior & Exterior Painting',
    anchor: 'interior-painting',
    image: photos.paintRoller,
    icon: 'PaintRoller',
    text: 'Clean lines, careful prep and even coverage — for single rooms, whole interiors and the outside of your home.',
  },
  {
    title: 'Wall Repair & Drywall',
    anchor: 'wall-repair',
    image: photos.wallRenovation,
    icon: 'BrickWall',
    text: 'Cracks, dents and holes patched, sanded and finished so the repair disappears into the wall.',
  },
  {
    title: 'Plumbing Services',
    anchor: 'plumbing',
    image: photos.faucet,
    icon: 'Droplets',
    text: 'Help with dripping faucets, fixture swaps and the small plumbing jobs that are easy to put off.',
  },
  {
    title: 'Electrical Services',
    anchor: 'electrical',
    image: photos.electrician,
    icon: 'Zap',
    text: 'Light fixtures, switches and outlets — the everyday electrical updates that make a room work better.',
  },
  {
    title: 'Home Maintenance & Repairs',
    anchor: 'maintenance',
    image: photos.drill,
    icon: 'Wrench',
    text: 'Doors that stick, loose hardware, worn trim — the to-do list, handled in one visit where possible.',
  },
  {
    title: 'Home Improvement & Renovation',
    anchor: 'renovation',
    image: photos.whiteKitchen,
    icon: 'Hammer',
    text: 'Thoughtful upgrades and minor remodels that make your space look and feel new again.',
  },
  {
    title: 'Pressure Washing',
    anchor: 'pressure-washing',
    image: photos.patio,
    icon: 'Waves',
    text: 'Driveways, patios and exterior surfaces washed down to bring back their original look.',
  },
  {
    title: 'General Handyman Services',
    anchor: 'maintenance',
    image: photos.measuring,
    icon: 'Ruler',
    text: 'Measured, fitted, mounted and fixed — practical help for the many small jobs around the house.',
  },
]

/** Detailed service sections for the /services page. */
export const serviceDetails = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    kicker: 'Rooms that feel finished',
    image: photos.greenLivingRoom,
    image2: photos.paintRoller,
    icon: 'PaintRoller',
    description:
      'A fresh coat of paint is one of the most effective ways to change how a room feels. We take care of the parts that make the difference — protecting floors and furniture, filling small imperfections, cutting in crisp edges and applying even coats — so you are left with walls and ceilings that look clean and considered.',
    features: ['Living room painting', 'Bedroom painting', 'Kitchen painting', 'Ceiling painting', 'Interior wall finishing'],
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    kicker: 'Curb appeal, protected',
    image: photos.craftsmanHouse,
    image2: photos.colorfulExterior,
    icon: 'Home',
    description:
      'The outside of your home is the first thing people see and the part that works hardest against the weather. Exterior painting starts with proper surface preparation, followed by finishes chosen to suit the surface, so your home looks refreshed and its siding and trim are better protected.',
    features: ['Exterior wall painting', 'Residential exterior improvements', 'Surface preparation', 'Protective finishing'],
  },
  {
    id: 'wall-repair',
    title: 'Wall Repair & Drywall',
    kicker: 'Smooth, seamless surfaces',
    image: photos.wallRenovation,
    image2: photos.brickWall,
    icon: 'BrickWall',
    description:
      'From doorknob dents to settling cracks and larger damaged sections, we repair drywall so it blends back into the surrounding wall. Each repair is patched, taped, feathered and sanded, then prepared for paint — so the finished surface reads as one continuous wall.',
    features: ['Drywall repair', 'Wall crack repair', 'Hole patching', 'Surface preparation', 'Wall finishing'],
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    kicker: 'Small fixes, fewer drips',
    image: photos.faucet,
    image2: photos.pipes,
    icon: 'Droplets',
    description:
      'Minor plumbing issues have a way of becoming bigger ones. We help with everyday plumbing tasks such as repairing faucets, addressing leak-related repairs and installing new fixtures. Tell us what you are seeing and we will let you know how we can help and what the job involves.',
    features: ['Faucet repairs', 'Minor plumbing maintenance', 'Leak-related repairs', 'Fixture installation'],
    note: 'Scope of plumbing work is confirmed during your project discussion.',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    kicker: 'Light where you need it',
    image: photos.electrician2,
    image2: photos.livingWarm,
    icon: 'Zap',
    description:
      'Updated lighting and working switches and outlets make a home safer and more comfortable to live in. We assist with light fixture installation, switch and outlet repairs and basic electrical maintenance, and we will be upfront about what falls within the scope of a visit.',
    features: ['Light fixture installation', 'Switch and outlet repairs', 'Basic electrical maintenance'],
    note: 'Scope of electrical work is confirmed during your project discussion.',
  },
  {
    id: 'maintenance',
    title: 'Home Maintenance & Handyman',
    kicker: 'Your to-do list, done',
    image: photos.drill,
    image2: photos.measuring,
    icon: 'Wrench',
    description:
      'Every home collects a list of small jobs — a door that will not latch, a loose handle, a shelf that needs mounting. Our handyman and maintenance service is built for exactly that: bring us the list, and we will work through it carefully so the little things stop getting in the way.',
    features: ['General household repairs', 'Door and hardware repairs', 'Minor maintenance projects', 'General handyman assistance'],
  },
  {
    id: 'renovation',
    title: 'Home Improvement & Renovation',
    kicker: 'Upgrades with intention',
    image: photos.whiteKitchen,
    image2: photos.blueprint,
    icon: 'Hammer',
    description:
      'Sometimes a room needs more than a repair. We help homeowners plan and carry out interior improvements and minor remodeling projects — refreshing finishes, upgrading fixtures and making spaces work better for the way you live — with clear communication from first conversation to final walkthrough.',
    features: ['Interior improvements', 'Residential upgrades', 'Minor remodeling projects', 'Home enhancement solutions'],
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing & Exterior Care',
    kicker: 'Outdoor surfaces, renewed',
    image: photos.patio,
    image2: photos.suburbanHouse,
    icon: 'Waves',
    description:
      'Dirt, mildew and everyday grime build up on outdoor surfaces over time. Pressure washing lifts that build-up from driveways, patios and exterior surfaces, restoring a cleaner look — and it is an ideal first step before exterior painting or staining.',
    features: ['Driveway cleaning', 'Exterior surface washing', 'Patio and outdoor surface cleaning'],
  },
]

export const serviceOptions = [
  ...serviceDetails.map((s) => s.title),
  'Multiple services',
  'Not sure yet — need advice',
]
