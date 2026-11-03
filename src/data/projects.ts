export type ProjectStatus = 'Completed' | 'In Progress'

export type DiagramKind = 'auto-healing' | 'devsecops' | 'eks-gitops'

export interface Project {
  id: string
  index: string
  title: string
  shortTitle: string
  status: ProjectStatus
  description: string
  technologies: string[]
  highlightsLabel: string
  highlights: string[]
  diagram: DiagramKind
  diagramLabel: string
  note?: string
}

export const projects: Project[] = [
  {
    id: 'auto-healing-aws',
    index: '01',
    title: 'Highly Available & Auto-Healing Web Infrastructure on AWS using Terraform',
    shortTitle: 'Auto-Healing AWS Infrastructure',
    status: 'Completed',
    description:
      'Designed and provisioned highly available AWS infrastructure using Terraform. The architecture distributes application traffic through an Application Load Balancer across EC2 instances deployed in multiple Availability Zones. If an EC2 instance becomes unhealthy, the Auto Scaling Group replaces it automatically.',
    technologies: [
      'AWS EC2',
      'VPC',
      'Application Load Balancer',
      'Target Groups',
      'Auto Scaling Groups',
      'IAM',
      'CloudWatch',
      'Terraform',
      'Docker',
    ],
    highlightsLabel: 'Implementation highlights',
    highlights: [
      'Infrastructure provisioned using Terraform.',
      'Multi-AZ infrastructure design.',
      'ALB-based traffic distribution.',
      'Auto Scaling and automatic instance replacement.',
      'Health checks on registered targets.',
      'CloudWatch monitoring, logs and alarms.',
      'Containerized Node.js application running on EC2.',
    ],
    diagram: 'auto-healing',
    diagramLabel:
      'Architecture: users reach an Internet Gateway, then an Application Load Balancer, which forwards traffic to a target group. Two EC2 instances in separate Availability Zones run containers behind an Auto Scaling Group. CloudWatch monitors the environment.',
  },
  {
    id: 'devsecops-cicd',
    index: '02',
    title: 'Secure CI/CD Pipeline with Automated Security Scanning',
    shortTitle: 'Secure DevSecOps CI/CD Pipeline',
    status: 'Completed',
    description:
      'Implemented a GitHub Actions CI/CD pipeline integrating automated security scanning into the software delivery process.',
    technologies: [
      'GitHub Actions',
      'CodeQL',
      'Gitleaks',
      'Trivy',
      'Checkov',
      'Docker',
      'GHCR',
      'AWS IAM OIDC',
    ],
    highlightsLabel: 'Implementation highlights',
    highlights: [
      'GitHub Actions workflow automation.',
      'CodeQL for static application security analysis.',
      'Gitleaks for secret detection.',
      'Trivy for container and dependency vulnerability scanning.',
      'Checkov for Terraform infrastructure security scanning.',
      'AWS IAM OIDC authentication without long-lived AWS credentials.',
      'Docker image build and publishing to GHCR.',
      "GHCR authentication using GitHub's built-in GITHUB_TOKEN instead of a manually maintained PAT.",
    ],
    diagram: 'devsecops',
    diagramLabel:
      'Architecture: a GitHub repository triggers a GitHub Actions workflow containing CodeQL, Gitleaks, Checkov and Trivy scan stages, followed by Docker build, push to GHCR and deployment. The workflow also authenticates to AWS through IAM OIDC.',
    note:
      'Security scanners are configured as pipeline stages. They are not all wired as blocking deployment gates, so findings should be treated as reported results rather than a universal pass/fail barrier.',
  },
  {
    id: 'eks-gitops',
    index: '03',
    title: 'Kubernetes Container Orchestration with Amazon EKS and Argo CD',
    shortTitle: 'Amazon EKS & GitOps Deployment',
    status: 'In Progress',
    description:
      'Kubernetes and GitOps engineering work focused on container orchestration, automated application delivery and AWS-managed Kubernetes infrastructure. The cluster, managed node groups and application deployment are currently being implemented and tested.',
    technologies: [
      'Amazon EKS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Argo CD',
      'GitHub Actions',
      'GHCR',
      'AWS IAM',
    ],
    highlightsLabel: 'Implementation areas',
    highlights: [
      'EKS cluster provisioning using Terraform.',
      'Managed node groups.',
      'Kubernetes Deployments.',
      'Pods and ReplicaSets.',
      'Kubernetes Services.',
      'Container image deployment.',
      'Rolling updates and rollbacks.',
      'Argo CD GitOps workflow.',
      'IAM integration.',
      'Application deployment and management.',
    ],
    diagram: 'eks-gitops',
    diagramLabel:
      'Target architecture: a GitHub repository triggers GitHub Actions, which builds and pushes an image to GHCR. Amazon EKS pulls the image into Kubernetes Deployments, ReplicaSets and Pods exposed by a Service. Argo CD watches the Git repository and reconciles the deployment configuration.',
    note:
      'Status is In Progress. The EKS cluster, node groups and application deployment have not yet been fully implemented and tested, so this architecture is presented as work in progress — not completed evidence.',
  },
]
