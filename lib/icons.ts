import { Github, Linkedin, Twitter } from "lucide-react"

export const contactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}
