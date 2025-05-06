# CI/CD with GitHub Actions and Docker

## 🔰 Project Overview

This project demonstrates a full CI/CD pipeline setup using GitHub Actions and Docker for a React frontend and Node.js backend. The frontend is deployed to GitHub Pages, and both frontend and backend Docker images are pushed to Docker Hub.

## 🔗 Live Links

- **Frontend Live on GitHub Pages**: [https://maharshi08.github.io/ci-cd-github-actions-docker](https://maharshi86.github.io/ci-cd-github-actions-docker)
- **Docker Hub (Frontend Image)**: [https://hub.docker.com/r/maharshi86/ci-cd-github-actions-docker](https://hub.docker.com/r/maharshi86/ci-cd-github-actions-docker)

---

## 🛠 Tools Used

- **Frontend**: React.js
- **Backend**: Node.js
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages & Docker Hub

---

## 🚧 Folder Structure
│
├── .github/workflows/ # GitHub Actions Workflow YAML
├── frontend/ # React Frontend (Deployed to GitHub Pages)
├── Dockerfile # Backend Dockerfile (in root)
├── package.json # Backend dependencies
├── README.md # Project documentation


---

## 📝 Steps Involved in Building the Project

1. **Frontend Development**:
   - Created using React.js inside the `frontend/` directory.
   - Configured `homepage` in `package.json`.
   - Deployment set up using `gh-pages` package.
   - Dockerized using a multistage Dockerfile (optional for Docker Hub).

2. **Backend Development**:
   - Node.js server in the root directory (no `backend/` folder).
   - Dockerfile set to expose `port 3000`.

3. **Docker Setup**:
   - Dockerfiles created for both frontend and backend.
   - Pushed final images to Docker Hub:
     - `maharshi86/ci-cd-github-actions-docker`

4. **CI/CD Pipeline with GitHub Actions**:
   - Automated build and push of Docker images on push to `main`.
   - Secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`) used for Docker login.
   - GitHub Actions script handles caching, build, and push.

5. **GitHub Pages Deployment**:
   - Frontend deployed using:
     ```bash
     npm run deploy
     ```
   - `homepage` field and deployment scripts added in `frontend/package.json`.
   - Pages source set to `gh-pages` branch in GitHub settings.

---

## 🌐 Live Website Link
You can view the live website at the following link:  
[Live Website](https://maharshi08.github.io/ci-cd-github-actions-docker/)

## 🖼 Screenshot
![Website Screenshot](https://github.com/Maharshi08/my-static-website/raw/main/screenshot.png)
