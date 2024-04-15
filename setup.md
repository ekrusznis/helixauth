# Project Setup Documentation

## DockerHub Repository Creation

We need to create DockerHub repositories to store Docker images that are built from our source code. These repositories provide a centralized, version-controlled storage for our Docker images, allowing for reliable deployments and easy rollback to previous versions if needed.

### Repositories:
- **helixauth-backend**: This repository will store the Docker image for the backend service of the helixauth project.
- **helixauth-frontend**: This repository will store the Docker image for the frontend service of the helixauth project.

### Steps to Create Access Token on DockerHub:
1. Click on your user avatar on the right.
2. Navigate to "My Account" > "Security" > "Access Tokens".
3. Click "Create Access Token".
4. Give it a name and select "Read & Write" permissions.
5. Click "Create".
6. Copy the token and save it somewhere safe.

## SSH Key Creation on the VPS

Creating an SSH key on the VPS allows secure, passwordless authentication which is necessary for automated scripts such as those used in CI/CD pipelines. This setup facilitates secure connections from GitHub Actions to the VPS for deployment tasks.

### Steps to Create SSH Key:
```bash
ssh-keygen  # Generate a new SSH key
# Press enter to save the key in the default location
cat ~/.ssh/id_rsa.pub  # Display the public key
vi ~/.ssh/authorized_keys  # Open the authorized_keys file
# Paste the content of the id_rsa.pub file at the end of the authorized_keys file
cat ~/.ssh/id_rsa  # Display the private key and save it securely
```

## GitHub Secrets Configuration

GitHub Secrets store sensitive data, like access tokens and SSH keys, needed for your GitHub Actions workflows. These secrets ensure that sensitive data is not exposed in your repository while being available to your CI/CD workflows.

### Required Secrets:
- **DOCKERHUB_USERNAME**: Your DockerHub account username.
- **DOCKERHUB_TOKEN**: The access token generated previously.
- **DEV_HOST**: The IP address of your VPS.
- **DEV_USER**: The user for SSH connections, e.g., `root`.
- **DEV_SSH_PRIVATE_KEY**: The content of your SSH private key.

### Steps to Create GitHub Secrets:
1. Navigate to your repository settings.
2. Go to "Secrets and Variables" > "Actions".
3. Click "New repository secret".
4. Add each of the secrets listed above.
5. 
## Workflow Explanation

This workflow is designed to support both development and production environments through automation. It is structured to build Docker images from your source code, push these images to DockerHub, and deploy them to your VPS via SSH. The workflow is triggered by specific GitHub events, configured to differentiate between development and production deployments.

### Development Workflow
- **Trigger**: Every push to the `master` branch.
- **Process**:
  1. **Build Docker Images**: Automatically build Docker images for both the backend and frontend services using the latest commit from the `master` branch.
  2. **Push to DockerHub**: Tag these images as `dev` and push them to DockerHub under the `dev` tag (e.g., `yourusername/helixauth-backend:dev`, `yourusername/helixauth-frontend:dev`).
  3. **Deploy**: Deploy these `dev` tagged images to the development server using SSH. This involves pulling the latest `dev` images on the server and restarting the services via Docker Compose.

### Production Workflow
- **Trigger**: Creation of new tags in the repository, which are used to signify production releases.
- **Process**:
  1. **Build Docker Images**: Build Docker images for both the backend and frontend services using the codebase as specified by the tag.
  2. **Push to DockerHub**: Tag these images with the git tag (e.g., `yourusername/helixauth-backend:v1.0`, `yourusername/helixauth-frontend:v1.0`) and push them to DockerHub.
  3. **Deploy**: Deploy these tagged images to the production server. This step involves pulling the tagged images from DockerHub and using Docker Compose on the production server to update the running containers to the new versions.

### Key Automation Features
- **Automated Builds**: Ensures that both backend and frontend Docker images are built automatically when triggered by GitHub events.
- **Tag Management**: Utilizes Docker tags to manage different environments, ensuring that development and production environments are separate and that deployments are traceable.
- **Reduced Human Error**: Minimizes deployment errors associated with manual processes.
- **Quick Rollback**: Easy rollback to previous versions if a new release introduces bugs, by redeploying the previous tag.

This CI/CD setup not only enhances operational efficiency but also maintains high standards of reliability and stability in software deployment processes.