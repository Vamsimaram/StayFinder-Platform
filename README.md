# Hotel Booking Application

## Introduction

The Hotel Booking Application is a user-friendly platform that simplifies the process of booking hotels. It provides users with detailed information about hotels, including prices, locations displayed on maps, and user reviews. Registered users can add hotels, edit their own listings, and leave reviews, enhancing the overall user experience. Secure login and signup pages ensure privacy and personalization for all users.

## Features

- **Detailed Hotel Information**: Users can view comprehensive details about hotels, such as prices, locations, and reviews.
  
- **User Hotel Management**: Registered users have the capability to add new hotels, edit their own listings, and delete them if necessary.
  
- **Secure Authentication**: The application employs secure login and signup functionalities to protect user accounts and data.
  
- **Image Storage and Rendering**: Utilizes Cloudinary for efficient storage and rendering of images associated with hotels.
  
- **Integration with Mapbox**: Integration with Mapbox enhances the user experience by displaying hotel locations on interactive maps.

## Installation

### Prerequisites

Ensure the following prerequisites are met before installing:

- **Node.js**: Version 14.0.0 or higher
- **MongoDB**: Installed and running on your system

### Dependencies

1. Install Node.js dependencies using npm:

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
   - Navigate to the `init` folder and initialize the database:
     ```bash
     node index.js
     ```

2. **Running the Application:**
   - Return to the main project folder and start the application:
     ```bash
     node app.js
     ```

3. **Image Storage and Rendering:**
   - Configure Cloudinary credentials in your environment variables (e.g., `.env` file) for image storage and rendering.

4. **Accessing the Application:**
   - Open your web browser and go to `http://localhost:your-port-number/` to access the Hotel Booking Application.


## Acknowledgements

- [Mapbox SDK](https://github.com/mapbox/mapbox-sdk-js)
- [Cloudinary](https://github.com/cloudinary/cloudinary_npm)
- [Express.js](https://github.com/expressjs/express)
- [MongoDB](https://github.com/mongodb/node-mongodb-native)
