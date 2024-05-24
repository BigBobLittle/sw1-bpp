# Technical Challenge

## Application Overview

This simple [Next.js](https://nextjs.org/) application allows a user to Register a Student onto a Course.

The Courses and Registrations are persisted in a SQLite database managed by [Prisma](https://www.prisma.io/), which is an open source ORM.

The Registration-Form component uses react-hook-form package, and tests are written using Jest.

## Getting Setup

### Install Packages

Firstly, install the Node Packages

```bash
npm install
# or
yarn
```

### Development Server

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prisma Studio

You can use Prisma Studio to view and modify the database directly, by running:

```bash
npx prisma studio
# or
yarn prisma studio
```

Then, open [http://localhost:5555](http://localhost:5555) with your browser launch Prisma Studio.

### Tests

You can run tests via Jest by:

```bash
yarn jest
```