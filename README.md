# Fekra Database Management System

A comprehensive database management system built with Next.js, Prisma, and MySQL for managing field training programs, students, mentors, and organizations.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm (comes with Node.js)
- MySQL (v8.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AbooSalh/fekra-db
cd fekra-db
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:

```
DATABASE_URL="mysql://username:password@localhost:3306/fekra_db"
JWT_SECRET="your secret"
```

4. Set up the database:

```bash
# This command will:
# - Create the database tables based on your schema
# - Create a migrations folder to track schema changes
# - Apply any pending migrations
npx prisma migrate dev
```

5. Generate Prisma Client:

```bash
# This creates the Prisma Client based on your schema
# The client is used to interact with your database
npx prisma generate
```

6. Seed the database with initial data:

```bash
# This populates your database with initial data
# including admin, mentor, and student accounts
npx prisma db seed
```

## Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Default Login Credentials

After seeding the database, you can use the following credentials to log in:

### Admin Account

- Email: admin@example.com
- Password: admin123

### Mentor Account

- Email: sarah.wilson@example.com
- Password: mentor123

### Student Account

- Email: alex.johnson@example.com
- Password: student123

## Features

- User Authentication and Authorization
- Student Management
- Mentor Management (Internal and External)
- Organization Management
- Field Training Course Management
- Evaluation System
- Enrollment Management
- CSV Template Support
  - Bulk data import via CSV files
  - Download CSV templates for data entry
  - Export data to CSV format

## CSV Templates

The application provides CSV templates for bulk data operations. These templates are located in the `public/templates` directory and include:

- Student data import template
- Course data import template
- Organization data import template
- Mentor data import template

To use the templates:

1. Download the appropriate template from the application
2. Fill in the data following the template format
3. Upload the filled CSV file through the application interface

## Project Structure

- `/prisma` - Database schema and migrations
- `/src` - Application source code
  - `/app` - Next.js app directory
  - `/components` - React components
  - `/lib` - Utility functions and shared code
- `/public` - Static assets
  - `/templates` - CSV templates for data import/export

## Development

- The application uses Next.js 14 with the App Router
- Prisma is used as the ORM
- MySQL is the database
- Tailwind CSS for styling

## API Documentation

API documentation is available in the `postman_collection.json` file. You can import this into Postman to test the API endpoints.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
