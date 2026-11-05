# ☸️ 36 - Kubernetes Deployment for Vibe-Coded Apps

> **AI can generate your application code, but it cannot take responsibility for running it in production.** Kubernetes gives you the orchestration to deploy, scale, and operate AI-built services reliably — if you configure it correctly.
> **This section covers containerizing AI-generated apps, deploying to Kubernetes, and operating them safely.**

**Difficulty:** 🔴 Advanced · **Reading time:** ~16 minutes

---

## 📖 Table of Contents

- [Why Kubernetes for AI-Built Apps](#-why-kubernetes-for-ai-built-apps)
- [Containerizing AI-Generated Code](#-containerizing-ai-generated-code)
- [Kubernetes Manifests for Vibe-Coded Apps](#-kubernetes-manifests-for-vibe-coded-apps)
- [Deploying to a Managed Kubernetes Service](#-deploying-to-a-managed-kubernetes-service)
- [Security Hardening for AI-Built Workloads](#-security-hardening-for-ai-built-workloads)
- [Scaling, Autoscaling, and Rollouts](#-scaling-autoscaling-and-rollouts)
- [Monitoring, Observability, and Rollback](#-monitoring-observability-and-rollback)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 Why Kubernetes for AI-Built Apps

AI-generated code ships fast but is often untested, unmonitored, and hard to roll back. Kubernetes gives you:

- **Declarative deployments** — define desired state in YAML, review it like code
- **Rollbacks** — `kubectl rollout undo` reverts a bad agent-generated release in seconds
- **Scaling** — handle traffic spikes without manual intervention
- **Self-healing** — restart failed containers automatically
- **Security boundaries** — namespaces, network policies, non-root containers

**When to use Kubernetes:** You have multiple services, need autoscaling, or require production-grade rollout control. For a single frontend, a simpler platform (Vercel, Railway, Fly) may be better — see section 12.

---

## 📦 Containerizing AI-Generated Code

### 1. Write a Dockerfile

AI agents can generate a Dockerfile, but you must review it. Never use an agent-generated Dockerfile without checking:

```dockerfile
# Example: Node.js + TypeScript app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

**Security review checklist for agent-generated Dockerfiles:**

- [ ] Uses a specific base image tag (not `:latest`)
- [ ] Runs as a non-root user (`USER` directive)
- [ ] Does not copy secrets or `.env` into the image
- [ ] Uses multi-stage build to exclude dev dependencies
- [ ] Sets `NODE_ENV=production` or equivalent

### 2. Build and push

```bash
# Build
docker build -t ghcr.io/yourusername/my-app:latest .

# Push to a registry
docker push ghcr.io/yourusername/my-app:latest
```

---

## ☸️ Kubernetes Manifests for Vibe-Coded Apps

Create these manifests and review them before applying:

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
    team: vibe-coding
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: ghcr.io/yourusername/my-app:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
        securityContext:
          runAsNonRoot: true
          runAsUser: 1001
          allowPrivilegeEscalation: false
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP
```

### HorizontalPodAutoscaler

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

---

## ☁️ Deploying to a Managed Kubernetes Service

| Provider | Service | Best For |
|----------|---------|----------|
| AWS | EKS | AWS ecosystem, enterprise |
| Google Cloud | GKE | GCP ecosystem, AI/ML workloads |
| Azure | AKS | Azure ecosystem, enterprise |
| DigitalOcean | DOKS | Small teams, simpler pricing |
| Linode | LKE | Cost-sensitive projects |

### Typical flow

```bash
# 1. Create cluster (via provider console or CLI)
# 2. Connect kubectl
aws eks update-kubeconfig --region us-east-1 --name my-cluster

# 3. Apply manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/hpa.yaml

# 4. Verify rollout
kubectl rollout status deployment/my-app

# 5. Check pods
kubectl get pods -l app=my-app
```

---

## 🔒 Security Hardening for AI-Built Workloads

AI-generated code is the highest-risk workload in your cluster. Harden it:

| Hardening step | Why it matters |
|----------------|----------------|
| **Non-root container** | Prevents container escape from compromised app |
| **Read-only root filesystem** | Stops attackers from writing malware |
| **Resource limits** | Prevents a runaway agent-generated process from starving the node |
| **Network policies** | Limits which pods can talk to your AI-built app |
| **Secret injection via Kubernetes Secrets** | Never hardcode DB passwords or API keys in YAML |
| **Pod Security Standards** | Enforce baseline/restricted policies per namespace |

### Example: restricted security context

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1001
  runAsGroup: 1001
  fsGroup: 1001
  seccompProfile:
    type: RuntimeDefault
  capabilities:
    drop:
    - ALL
```

---

## 📈 Scaling, Autoscaling, and Rollouts

### Canary deployment for AI-generated changes

AI-generated code should roll out gradually:

```bash
# 1. Deploy new version to 10% of traffic
kubectl set image deployment/my-app my-app=ghcr.io/yourusername/my-app:v2

# 2. Monitor error rate and latency
kubectl top pods -l app=my-app

# 3. If healthy, increase to 100%
# 4. If unhealthy, roll back immediately
kubectl rollout undo deployment/my-app
```

### HPA tuning for AI workloads

AI-generated code may have unpredictable CPU/memory patterns. Start conservative:

- `minReplicas: 2` (high availability)
- `maxReplicas: 10` (cost control)
- Target CPU at 70% — leave headroom for traffic spikes

---

## 📊 Monitoring, Observability, and Rollback

### Essential metrics

| Metric | Alert threshold |
|--------|---------------|
| Error rate (5xx) | > 1% for 5 minutes |
| Latency (p95) | > 2 seconds |
| Pod restarts | > 3 in 10 minutes |
| CPU/memory usage | > 80% of limit |

### Rollback procedure (test this before production)

```bash
# View rollout history
kubectl rollout history deployment/my-app

# Undo to previous revision
kubectl rollout undo deployment/my-app

# Undo to specific revision
kubectl rollout undo deployment/my-app --to-revision=3

# Verify rollback
kubectl rollout status deployment/my-app
```

**Rule:** If an AI-generated release causes an incident, roll back first, investigate second. Do not debug in production.

---

## ✅ Practical Checklist

- [ ] Dockerfile reviewed (non-root, no secrets, pinned base image)
- [ ] Kubernetes manifests reviewed by a human before `kubectl apply`
- [ ] Resource requests and limits set on all containers
- [ ] Liveness and readiness probes configured
- [ ] Secrets injected via Kubernetes Secrets, not env vars in YAML
- [ ] HorizontalPodAutoscaler configured with min/max replicas
- [ ] Canary rollout planned for AI-generated changes
- [ ] Rollback procedure tested in staging
- [ ] Monitoring and alerting configured (errors, latency, restarts)
- [ ] Network policies limit pod-to-pod communication

---

## 🔑 Key Takeaways

- **Kubernetes gives AI-built apps production-grade control** — rollouts, rollbacks, scaling, self-healing
- **Review agent-generated Dockerfiles and manifests** as carefully as application code
- **Run containers as non-root with resource limits** — AI-built code is higher risk
- **Roll out AI-generated changes via canary** — monitor, then expand or roll back
- **Roll back first, investigate second** — never debug a live incident in production

---

## 🚀 Next Steps

- **Read section [37 — Self-Assessment & Certification Track](./37-self-assessment/)** to validate your Kubernetes knowledge
- **Read section [32 — AI Agent Safety & Governance](./32-agent-safety-governance/)** for session-level agent controls before deploying agent-written code
- **Read section [11 — DevOps & Cloud](./11-devops-cloud/)** for CI/CD pipelines and cloud fundamentals

---

<center>

*Last updated: November 2026*

</center>