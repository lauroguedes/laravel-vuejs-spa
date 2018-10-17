## Requirements

- PHP >= 7.1.3
- NodeJs >= 8+ and NPM

## Features

- Laravel 5.7
- Vue + VueRouter + Vuex
- [Element Desktop UI Library](https://element.eleme.io)

## Installation

Dependencies Laravel
```
composer install
```

Dependecies FrontEnd
```
npm install
```

Rename file `.env.example` to `.env` and set your database connection details

Generate App Key
```
php artisan key:generate
```

Database Create
```
php artisan migrate
```

Start local server
```
php artisan server
```

## Usage

### Development Mode

Build and watch
```
npm run watch
```

Serve with hot reloading
```
npm run hot
```

### Production Mode

```
npm run production
```
