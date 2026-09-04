# StoreIt - Cloud Storage Management Platform

> **🚧 Status: Work in Progress**
> Currently finalizing the Appwrite backend storage integration and file upload pipeline. 

StoreIt is a modern, full-stack cloud storage management solution engineered to handle secure file uploads, organization, and sharing. Built with the latest Next.js 16 and Appwrite Node SDK, it features a highly responsive UI and robust session-based authentication.

## ⚙️ Tech Stack
* **Framework:** Next.js 16 (React, Server Actions)
* **Backend as a Service:** Appwrite (Auth, Storage Buckets, Databases)
* **Styling:** Tailwind CSS, Shadcn UI
* **Language:** TypeScript

## 🔋 Core Features (Implemented & Upcoming)
* **Secure Authentication:** OTP-based session management using Appwrite.
* **File Upload Pipeline:** Strictly typed file handling with size validation (up to 50MB) and real-time upload UI.
* **Modern Dashboard:** Dynamic insights into storage consumption and recent uploads.
* **Responsive Design:** A minimal, mobile-first aesthetic built with Tailwind CSS.

## 🚀 Local Development
To run this project locally:

1. Clone the repository: `git clone https://github.com/ullasshetty64/storage_management_solution.git`
2. Install dependencies: `npm install`
3. Setup your `.env.local` with your Appwrite credentials.
4. Run the development server: `npm run dev`