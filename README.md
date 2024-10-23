# Old Book House (Client)

This is a web application for buying and selling old books. Users can create accounts, list their old books for sale, and browse available books for purchase.

## Frontend Technology Stack

| # | Technology       |
| - | ---------------- |
| 1 | React JS         |
| 2 | React Router DOM |
| 3 | React Bootstrap  |
| 4 | Firebase         |
| 5 | Sweet Alert      |
| 6 | Swiper JS        |

## Features

- User authentication using Firebase (login, signup, logout).
- Browse books by category, author, or title.
- Search functionality for easy navigation.
- User profile management where users can see their listed books and past purchases.
- Responsive design using React Bootstrap for an optimized experience on all devices.
- Swiper JS integration for book carousels or featured listings.
- Sweet Alert integration for user-friendly popups (e.g., confirmation messages, errors).

## How to Start

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ikram-Akbar/old-book-house-client.git
   ```
2. Navigate to the project directory:

   ```bash
   cd old-book-house-client
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the App

To run the app in development mode, execute the following command:

```bash
npm start
```

or

```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build, use the following command:

```bash
npm run build
```

or

```bash
yarn build
```

This will create a `build` folder with your optimized application.

### Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Create a `.env` file at the root of your project and add the following Firebase credentials:
   ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```
3. Replace the placeholder values with the actual Firebase configuration values from your Firebase project settings.

### Important Scripts

- `npm run dev` or `yarn start`: Run the app in development mode.
- `npm run build` or `yarn build`: Build the app for production.
- `npm run lint` or `yarn lint`: Run linter for code quality checks.

### Contributing

Feel free to fork this repository and contribute by submitting a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

This `README.md` gives a clear overview of the project, including the technology stack, features, setup instructions, and how to get started. Feel free to adjust it as needed!
```
