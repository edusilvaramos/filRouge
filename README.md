# FilRouge Project

This is a Symfony 7.2 application used for managing projects, tasks, teams and notifications. It relies on Doctrine ORM and provides a front-end build powered by Webpack Encore.

## Requirements

- PHP 8.2 or higher with extensions `ctype` and `iconv` enabled
- Composer
- Node.js and npm
- A database server (PostgreSQL is configured in `compose.yaml`)

## Installation

1. Clone the repository and install PHP dependencies:

   ```bash
   composer install
   ```

2. Install JavaScript dependencies:

   ```bash
   npm install
   ```

3. Copy `.env` to `.env.local` and update the `DATABASE_URL` with your database credentials. A Docker compose file is provided to start a PostgreSQL service:

   ```bash
   docker compose up -d
   ```

4. Run database migrations:

   ```bash
   php bin/console doctrine:migrations:migrate
   ```

## Development

Start the Symfony local server and build assets in watch mode:

```bash
symfony server:start -d
npm run dev --watch
```

## Running Tests

Execute the test suite with PHPUnit:

```bash
php bin/phpunit
```

Tests require a working database connection as defined in `.env.test`.

## Building for Production

To generate optimized assets, run:

```bash
npm run build
```

## License

This project is proprietary and distributed without a specific license.

