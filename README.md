Project Report
PrepWise – An AI Voice Agent Interview Platform
1. Introduction

Interview preparation is a crucial part of career development, yet most candidates lack access to realistic practice environments. PrepWise is a modern web application designed to bridge this gap by simulating AI-powered voice interviews. The platform conducts mock interviews, evaluates user responses, and generates actionable feedback to help learners improve their communication, technical, and problem-solving skills.

2. Project Objectives

To provide users with a realistic AI voice interview simulation.

To generate instant, structured feedback on performance.

To maintain secure authentication and personalized interview history.

To build a scalable, cloud-hosted application using modern web technologies.

To assist students and professionals in preparing effectively for job interviews.

3. Key Features

AI Voice Interview Agent

Conducts interviews using AI-driven voice interaction.

Adapts questions based on role, technology, and experience level.

Interview Generation

Users select role, tech stack, and difficulty.

Custom interview sessions are generated dynamically.

Feedback Generation

Google Gemini AI analyzes conversations.

Provides scores, strengths, and improvement areas.

User Authentication

Secure login, signup, password reset, and logout.

Managed using Firebase Authentication.

Interview History

Stores past interviews and feedback.

Enables continuous learning and progress tracking.

4. Technical Stack
Frontend

Next.js (App Router, Server & Client Components)

React

Tailwind CSS

TypeScript

Backend & Services

Firebase Firestore (database)

Firebase Auth (authentication)

Google Gemini AI (feedback generation)

Vapi (AI voice agent and call workflow)

Other Tools

Zod → Schema validation

Sonner → Toast notifications

dotenv → Environment configuration

5. System Architecture

Authentication Layer

Firebase Auth for user sessions.

Interview Flow

page.tsx → Generates interviews.

Agent.tsx → Manages AI agent logic & feedback submission.

Feedback Module

page.tsx → Displays structured feedback.

Feedback stored in Firestore under feedback collection.

Database Layer

Firestore collections: users, interviews, feedback.

Utilities & Actions

Server actions for auth, interview management, feedback saving.

6. Workflow

User signs up or logs in.

User selects interview preferences (role, technology, difficulty).

AI agent conducts the interview via voice.

Gemini AI generates performance feedback.

Feedback stored in Firestore → User can review later.

7. Security & Best Practices

All credentials stored in .env.local.

AI outputs validated with Zod schemas.

Error handling for stable execution.

User data secured using Firebase Auth.

8. Possible Enhancements

User profile editing.

Support for multi-language & accent recognition.

Analytics dashboard for performance tracking.

Admin panel for question management.

Integration with resume analyzers for tailored interviews.

9. Conclusion

PrepWise delivers a realistic, AI-driven interview preparation platform. By combining Next.js, Firebase, and AI services, the project offers learners an engaging way to practice and refine their skills. Its modular design ensures scalability, while AI-based feedback makes interview practice more personalized, data-driven, and effective.
