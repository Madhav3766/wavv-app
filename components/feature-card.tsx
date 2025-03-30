import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group wavv-card p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}

