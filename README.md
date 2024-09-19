# React Library App - Front-End

The React Library App is a full-stack application developed using **React** and **TypeScript** on the front end, with a **Spring Boot** back-end service and MySQl/PostgreSQL in developement and production respectively. The app provides a responsive and user-friendly interface for interacting with a library system, enabling users to view, search, manage, and loan books. It also includes advanced features such as book reviews, user authentication, payment processing, and admin functionalities. The app is styled using **Bootstrap** to ensure a responsive and modern design.

## Key Features

- **Book Management**: 
  - Users can browse, search, and view books in the library.
  - Search functionality includes filtering by category or keyword.
  
- **Loan and Return Books**: 
  - Users can borrow and return books seamlessly.
  
- **Review System**: 
  - Users can leave reviews and ratings for each book.
  - View the full review history for any book.

- **User Loan and Review History**: 
  - Users can check their loan history and view their reviews from their profile page.
  
- **Authentication and Authorization**: 
  - Includes a secure authentication system powered by **Okta**.
  - Supports both regular and admin user roles.
  
- **Admin Features**: 
  - Admins can add new books, modify book details (such as quantities), and manage book availability.
  - Admins can also respond to user questions submitted through the platform.

- **User Support**: 
  - Users can ask questions directly within the app, which admins can respond to.

- **Payment Integration**: 
  - Integrated with **Stripe** for secure payment processing of book-related fees (e.g., late fees).

## Front-End Technologies

- **React**: Component-based UI development for dynamic and responsive user experiences.
- **TypeScript**: Ensures type safety and improves code maintainability.
- **Bootstrap**: Provides a responsive design for a seamless experience across different devices.
- **Okta Authentication**: Manages user authentication and role-based access control.
- **Stripe**: Secure, integrated payment system for handling transactions.

## Back-End Features

The **Spring Boot** back-end handles:
- Book data and inventory management
- Loan and return processing
- Authentication and authorization via Okta
- Payment processing using Stripe
- User questions and admin responses

A detailed README for the back-end service, including API specifications, database structure, and security configurations, will be provided in the back-end project repository.


## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Bootstrap**: A framework for developing responsive and mobile-first websites.
- **CSS**: For custom styling and layout.
- **Fetch API**: For making HTTP requests to the back-end.
- **Netlify**: For hosting and deploying the front-end application.


## How to Run the Project Locally

To set up and run the React Library App on your local machine, follow these steps: 

1. Clone the Repository: git clone https://github.com/crentzos/Library-App-Frontend.git` and `cd react-library-app`.

2. Install Dependencies: Ensure you have Node.js installed. Then, run `npm install` to install the project’s dependencies.

3. Start the Development Server: Run `npm start` to start the development server. The application will be available at http://localhost:3000.

## Login Credentials

For testing purposes, you can use the following credentials:

- **User Login**
  - Username: `oktauser@email.com`
  - Password: `okta1234`

- **Admin Login**
  - Username: `adminuser@email.com`
  - Password: `1920rockjazz`
 

## Deployment

The front-end application is deployed on Netlify. You can view the live application at [React Library App](https://my-react-library-app.netlify.app).

## Additional Information

The front-end is connected to a Spring Boot back-end service, which is deployed on Render. Ensure that the back-end service is up and running to fetch data correctly. If you prefer, you can also run the server locally by following the instructions in the README file available at [Library App Backend](https://github.com/crentzos/Library-App-Backend.git). When running locally, the back-end service will be accessible at http://localhost:8080/api. 
