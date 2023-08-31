# Kaptur

## Objectives

Kaptur is an Android app against cyberbullying.
It simplifies the communication of victims with their lawyers and optimizes the management of files.

## Technical stack

### Architecture

Multi-repository project with Docker and Docker Compose.

### Technologies

kaptur-front : Next.js with Typescript

kaptur-back : Express server with Typescript
The backend is a proxy for Supabase which stores the images.
