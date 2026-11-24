import {
  PaintRoller, BrickWall, Droplets, Zap, Wrench, Hammer, Waves, Ruler, Home, Award, CalendarCheck,
  ScanSearch, HeartHandshake, Clock, Sparkles, Gem, ShieldCheck, BriefcaseBusiness, Smile, Ear,
  MessagesSquare, ClipboardList, MessageCircle,
} from 'lucide-react'

const map = {
  PaintRoller, BrickWall, Droplets, Zap, Wrench, Hammer, Waves, Ruler, Home, Award, CalendarCheck,
  ScanSearch, HeartHandshake, Clock, Sparkles, Gem, ShieldCheck, BriefcaseBusiness, Smile, Ear,
  MessagesSquare, ClipboardList, MessageCircle,
}

export default function Icon({ name, ...props }) {
  const C = map[name] ?? Sparkles
  return <C aria-hidden="true" {...props} />
}
