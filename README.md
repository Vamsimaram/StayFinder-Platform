Certainly! Here's a structured README file based on the information you've provided:

```markdown
# Hotel Booking Application

## Introduction
The Hotel Booking Application is a user-friendly platform that allows users to search for hotels with detailed information, including prices, locations on maps, and reviews. Users can also add their own hotels, with the ability to edit or delete only their listings. Any registered user can leave reviews, helping others make informed decisions. The application features secure login and signup pages to ensure a safe and personalized experience for all users.

## Features
- View detailed information about hotels including prices, locations, and reviews.
- Users can add, edit, and delete their own hotel listings.
- Secure user authentication with login and signup pages.
- Image storage and rendering using Cloudinary.
- Integration with Mapbox for location mapping.

## Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- MongoDB

### Dependencies
Ensure you have Node.js installed. Then, install the following dependencies using npm:
```bash
npm install @mapbox/mapbox-sdk cloudinary connect-flash connect-mongo dotenv ejs ejs-mate express express-session joi method-override mongoose multer multer-storage-cloudinary passport passport-local passport-local-mongoose
```

### Node Version
This project requires Node.js version 14.0.0 or higher. Ensure your environment meets this requirement by using the appropriate Node version manager.
```json
"engines": {
  "node": "14.0.0"
}
```

## Usage

1. **Initialization:**
   - Navigate to the `init` folder and run the following command to initialize the database:
     ```bash
     node index.js
     ```

2. **Running the Application:**
   - Return to the main project folder and start the application using:
     ```bash
     node app.js
     ```

3. **Image Storage and Rendering:**
   - The application uses Cloudinary to store and render images. Ensure you have configured Cloudinary credentials appropriately in your environment variables (using `.env` file or environment variables).

4. **Accessing the Application:**
   - Open your web browser and navigate to `http://localhost:your-port-number/` to access the Hotel Booking Application.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Mapbox SDK](https://github.com/mapbox/mapbox-sdk-js)
- [Cloudinary](https://github.com/cloudinary/cloudinary_npm)
- [Express.js](https://github.com/expressjs/express)
- [MongoDB](https://github.com/mongodb/node-mongodb-native)

```

Feel free to adjust any details or add additional acknowledgments as needed before pasting it into your GitHub repository. Let me know if there's anything else you'd like to modify or include!
