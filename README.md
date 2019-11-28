# demoApp

## App setup

### 1. Clone repo and cd into demoApp folder

### 2. Install node modules

```
npm install
```

### 3. build vue app

```
npm run dev
```

### 4. Create `.env` file (just copy and paste `.env.example`)

### 5. Install docker container (this may take a few minutes)

```
docker-compose up
```

### 6. Open new terminal window and ssh into docker container

```
docker exec -it demoApp_web bash
```

### 7. While ssh'd into docker install composer dependencies

```
composer install
```

### 8. While ssh'd into docker run migrations and seeders (this command does both)

```
composer test
```

### 9. Go to http://localhost:9000/

## How to run tests

### 1. For backend tests in root directory run this command

```
composer test
```

### 2. For frontend tests in root directory run this command

```
npm run test
```
