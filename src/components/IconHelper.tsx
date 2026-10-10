import {
  Building2, Target, Bus, ScanEye, GraduationCap, HeartPulse,
  ShoppingCart, Zap, BrainCircuit, BookOpen, Cpu, Mail,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Target,
  Bus,
  ScanEye,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Zap,
  BrainCircuit,
  BookOpen,
  Cpu,
  Mail,
};

export function getCategoryIcon(name: string): LucideIcon {
  return iconMap[name] ?? Building2;
}
