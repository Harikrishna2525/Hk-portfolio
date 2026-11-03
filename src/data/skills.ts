export type SkillStatus = 'implemented' | 'in-progress' | 'planned'

export interface Skill {
  name: string
  note?: string
  status?: SkillStatus
}

export interface SkillGroup {
  id: string
  title: string
  subtitle: string
  icon: 'cloud' | 'code' | 'containers' | 'workflow'
  skills: Skill[]
  footnote?: string
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'aws',
    title: 'AWS Cloud Platform',
    subtitle: 'Core services used to design and operate cloud environments.',
    icon: 'cloud',
    skills: [
      { name: 'Amazon EC2' },
      { name: 'Amazon VPC' },
      { name: 'AWS IAM' },
      { name: 'Amazon S3' },
      { name: 'Application Load Balancer' },
      { name: 'Auto Scaling Groups' },
      { name: 'Amazon EKS', status: 'in-progress' },
      { name: 'AWS Secrets Manager'},
      { name: 'Amazon CloudFront' },
      { name: 'AWS CloudWatch' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    subtitle: 'Reproducible AWS environments defined in version control.',
    icon: 'code',
    skills: [
      { name: 'Terraform' },
      { name: 'Variables & Outputs' },
      { name: 'Remote State' },
      { name: 'S3 Backend' },
      { name: 'S3 Native State Locking', note: 'where implemented' },
    ],
    footnote:
      'Terraform is my primary provisioning workflow for AWS networking, compute and delivery infrastructure.',
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    subtitle: 'Packaging applications and building toward GitOps-driven Kubernetes.',
    icon: 'containers',
    skills: [
      { name: 'Docker' },
      { name: 'Kubernetes', status: 'in-progress' },
      { name: 'Amazon EKS', status: 'in-progress' },
      { name: 'Kubernetes Deployments', status: 'in-progress' },
      { name: 'Pods', status: 'in-progress' },
      { name: 'ReplicaSets', status: 'in-progress' },
      { name: 'Services', status: 'in-progress' },
      { name: 'Argo CD', status: 'in-progress' },
    ],
    footnote:
      'Docker is in active use. Kubernetes, EKS and Argo CD are marked in progress — implementation is under way, not claimed as complete.',
  },
  {
    id: 'cicd',
    title: 'CI/CD & Automation',
    subtitle: 'Automated build, scan and container delivery workflows.',
    icon: 'workflow',
    skills: [
      { name: 'GitHub Actions' },
      { name: 'CI/CD Pipeline Automation' },
      { name: 'GitHub Container Registry' },
      { name: 'Automated Docker Builds' },
      { name: 'Container Image Publishing' },
      { name: 'GITHUB_TOKEN Authentication' },
    ],
    footnote:
      'GHCR publishing authenticates with the workflow-scoped GITHUB_TOKEN rather than a manually maintained personal access token.',
  },
]

export interface SecurityPractice {
  name: string
  category: string
  description: string
}

export const securityPractices: SecurityPractice[] = [
  {
    name: 'IAM OIDC',
    category: 'Cloud identity',
    description:
      'GitHub Actions authenticates to AWS by assuming an IAM role through OIDC — no long-lived AWS access keys stored in the repository.',
  },
  {
    name: 'Gitleaks',
    category: 'Secret scanning',
    description:
      'Detects exposed credentials and sensitive values in source code and repository content.',
  },
  {
    name: 'Trivy',
    category: 'Container security',
    description:
      'Scans container images and dependencies for known vulnerabilities before delivery.',
  },
  {
    name: 'Checkov',
    category: 'IaC security',
    description:
      'Static analysis of Terraform to surface insecure infrastructure configuration.',
  },
  {
    name: 'CodeQL',
    category: 'SAST',
    description:
      'Static application security testing that analyses source code for security weaknesses.',
  },
]

export const foundationGroups: SkillGroup[] = [
  {
    id: 'os',
    title: 'Operating System',
    subtitle: '',
    icon: 'code',
    skills: [{ name: 'Linux' }, { name: 'Ubuntu' }],
  },
  {
    id: 'vcs',
    title: 'Version Control',
    subtitle: '',
    icon: 'workflow',
    skills: [{ name: 'Git' }, { name: 'GitHub' }],
  },
  {
    id: 'registry',
    title: 'Container Registry',
    subtitle: '',
    icon: 'containers',
    skills: [{ name: 'GitHub Container Registry (GHCR)' }],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    subtitle: '',
    icon: 'cloud',
    skills: [
      { name: 'CloudWatch Logs' },
      { name: 'CloudWatch Metrics' },
      { name: 'CloudWatch Alarms' },
    ],
  },
]
