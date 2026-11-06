/**
 * Central place for personal details.
 * Update the email address here if it changes.
 */
export const site = {
  name: 'Hari Krishna R',
  title: 'AWS Infrastructure & DevOps Engineer',
  tagline: 'Building secure, automated and highly available cloud infrastructure.',
  summary:
    'AWS Infrastructure & DevOps Engineer focused on designing, provisioning and automating cloud infrastructure. Experienced in AWS, Terraform, Docker, Kubernetes, GitHub Actions, CI/CD automation and DevSecOps practices. Hands-on experience implementing highly available AWS infrastructure, secure CI/CD pipelines, containerized applications and GitOps-based Kubernetes deployments.',
  email: 'harikrish58027@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/hari-krish-13300b27a/',
    github: 'https://github.com/Harikrishna2525',
    resume:
      'https://drive.google.com/file/d/1K4d8MkZDP8mwvcyzUc0WBTKrtOPltsUT/view?usp=sharing',
  },
  stack: [
    'AWS',
    'Terraform',
    'Docker',
    'Kubernetes',
    'Amazon EKS',
    'GitHub Actions',
    'DevSecOps',
  ],
  focusAreas: [
    'AWS Cloud',
    'Terraform',
    'CI/CD',
    'Kubernetes',
    'GitOps',
    'DevSecOps',
  ],
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'AI DevOps', href: '#ai-devops' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
