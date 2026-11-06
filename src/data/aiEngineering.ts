export type AiUseCaseIcon =
  | 'terraform'
  | 'cloud'
  | 'containers'
  | 'kubernetes'
  | 'cicd'
  | 'devsecops'
  | 'linux'
  | 'documentation'

export interface AiUseCase {
  id: string
  title: string
  description: string
  icon: AiUseCaseIcon
}

export const aiUseCases: AiUseCase[] = [
  {
    id: 'terraform',
    title: 'Terraform configuration',
    description:
      'Generating, reviewing and troubleshooting Terraform configuration, plans and errors.',
    icon: 'terraform',
  },
  {
    id: 'aws-analysis',
    title: 'AWS infrastructure analysis',
    description:
      'Analysing service configuration, networking, IAM relationships and infrastructure behaviour.',
    icon: 'cloud',
  },
  {
    id: 'containers',
    title: 'Dockerfile & container troubleshooting',
    description:
      'Reviewing build failures, image configuration and container runtime issues.',
    icon: 'containers',
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes manifests & deployments',
    description:
      'Assisting with YAML configuration and troubleshooting deployment behaviour.',
    icon: 'kubernetes',
  },
  {
    id: 'cicd',
    title: 'GitHub Actions CI/CD',
    description:
      'Developing and debugging build, security scan and container delivery workflows.',
    icon: 'cicd',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps scan analysis',
    description:
      'Reviewing Trivy, Checkov, Gitleaks and CodeQL findings with remediation guidance.',
    icon: 'devsecops',
  },
  {
    id: 'linux',
    title: 'Linux & command assistance',
    description:
      'Working through shell commands, system behaviour and infrastructure troubleshooting.',
    icon: 'linux',
  },
  {
    id: 'documentation',
    title: 'Technical documentation',
    description:
      'Improving runbooks, operational notes and infrastructure workflow documentation.',
    icon: 'documentation',
  },
]
