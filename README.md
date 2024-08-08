# Introduction

Hello, thank you for showing your interest in Bits of Good! This semester, we are focusing our recruitment on the practical skills of developers through this assessment! We hope you enjoy the task and if you have any questions or if any part is ambiguous, please send us an email at gt.engineering@hack4impact.org or file an issue on GitHub.

To submit your project, please commit your code to Github (preferred) or another version control platform and share a link to your repository in our application.

# Story/Task

_Capybaras Among Us_, a fictional non-profit in the greater Atlanta area has asked Bits of Good to develop an admin dashboard for managing their operations, which include managing capybaras in their care and tracking their food inventory.

You have been placed on the team as a developer and assigned the tickets found under `tickets/`. **Each ticket is required to completed.**

Good luck hacking!

# Getting Started

To get started, we recommend you have Node >18 and SQLite installed.

Install all the dependencies for this project, run the following command from the root of this project

```
npm install
```

Initialize the database

```
npx prisma db push
```

Seed the database

```
npm run db:seed
```

Finally you can run the project like any other NextJS application

```
npm run dev
```
