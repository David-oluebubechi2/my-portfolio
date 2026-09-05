import { GithubIcon, LinkedinIcon, WhatsAppIcon, MailIcon } from "./icons";

export const socialIconMap: Record<
  string,
  (p: { className?: string }) => React.ReactElement
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsAppIcon,
  email: MailIcon,
};