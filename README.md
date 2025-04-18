# CI/CD Platform with Zero-Downtime Deployments on AWS

## 🔧 ## 🔧 Tech Stack (Terraform / GitHub / EKS / ArgoCD / App Mesh / CloudWatch / Prometheus / Secrets Manager)


| Function                 | AWS Service / Tool                                    |
|--------------------------|-------------------------------------------------------|
| Infrastructure as Code   | Terraform                                             |
| GitOps CD                | ArgoCD on Amazon EKS                                  |
| Container Orchestration  | Amazon EKS (Elastic Kubernetes Service)               |
| Deploy Strategy          | Blue-Green or Canary via AWS App Mesh or Istio on EKS|
| Secrets Management       | AWS Secrets Manager (or HashiCorp Vault on EKS)       |
| Monitoring               | Amazon CloudWatch + Prometheus & Grafana on EKS       |
| Logging                  | CloudWatch Logs or EFK stack (Elasticsearch, Fluent Bit, Kibana) |
| Cost Optimization        | Spot Instances with EKS Node Groups + Cluster Autoscaler |

## 🧱 Architecture Overview

### 1. Code Commit & CI/CD
- Store application code and Kubernetes manifests in GitHub (or AWS CodeCommit).
- Install and configure ArgoCD on EKS.
- ArgoCD automatically watches the Git repository and deploys changes to EKS.

### 2. Infrastructure Setup with Terraform
- Provision VPC, subnets, EKS cluster, IAM roles, and managed node groups.
- Include Spot Instances and configure Cluster Autoscaler for cost savings.
- Enable IRSA (IAM Roles for Service Accounts) for secure service-to-service communication.

### 3. Container Deployment
- Package the application using Docker.
- Push Docker images to Amazon ECR.
- Use Kubernetes manifests (or optionally Helm charts) stored in Git.
- ArgoCD deploys containers to EKS from manifests.

### 4. Zero-Downtime Strategy
- Set up AWS App Mesh or Istio on EKS for service mesh capability.
- Use weighted traffic routing for Blue-Green or Canary deployments.
- Achieve seamless rollouts and rollbacks with minimal impact to users.

### 5. Secrets Management
- Use AWS Secrets Manager to store sensitive data.
- Inject secrets into pods securely using Kubernetes Secrets + IRSA.

### 6. Monitoring & Logging
- Deploy Prometheus and Grafana to EKS for metrics collection and visualization.
- Use CloudWatch Logs or the EFK stack for centralized logging.
