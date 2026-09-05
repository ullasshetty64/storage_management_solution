<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

<h3 align="center">StoreIt - Secure Cloud Storage and File Sharing Platform</h3>
</div>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Core Features](#features)
4. [Quick Start & Local Setup](#quick-start)
5. [Environment Variables](#environment-variables)

---

## 🤖 Introduction

**StoreIt** is a full-stack, secure cloud storage management and file-sharing platform engineered to handle robust file uploads, dynamic organization, and multi-user collaboration. Built using the modern **Next.js** App Router and the **Appwrite** backend-as-a-service ecosystem, it provides a seamless user experience resembling enterprise-grade cloud drives.

---

## ⚙️ Tech Stack

* **Frontend:** Next.js (React, Server Actions, App Router)
* **Backend / BaaS:** Appwrite (Authentication, Database, Storage Buckets)
* **Styling:** Tailwind CSS, Shadcn UI, Radix UI Primitives
* **Data Visualization:** Recharts
* **Language:** TypeScript

---

## 🔋 Core Features

* **🔐 Secure OTP Authentication:** Passwordless, session-based authentication flow managed securely via Appwrite.
* **📂 Advanced File Uploads & Management:** Seamlessly upload documents, images, videos, and audio files. Users can view files in a dedicated viewer, rename them, or delete them safely.
* **👥 Multi-User File Sharing:** Built-in database relationship mapping allowing users to share uploaded files with others for seamless collaboration.
* **📊 Interactive Storage Dashboard:** Real-time analytics tracking total and consumed storage capacity, recent file uploads, and a visual breakdown of files grouped by type using custom charts.
* **🔍 Global Search Engine:** Instantly search and locate files across the entire platform with a robust global search bar.
* **⚡ Flexible Sorting Options:** Efficiently sort files by creation date (newest/oldest), name (A-Z, Z-A), or size (highest/lowest).
* **📱 Modern Responsive Design:** A clean, minimalist, mobile-first interface crafted for optimal accessibility across all screen sizes.

---

## 🤸 Quick Start & Local Setup

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
Ensure you have the following installed:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone [https://github.com/ullasshetty64/storage_management_solution.git](https://github.com/ullasshetty64/storage_management_solution.git)
cd storage_management_solution
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.