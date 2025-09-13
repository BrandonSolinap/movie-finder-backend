Movie Finder API
A secure Express.js backend server that proxies requests to The Movie Database (TMDB) API. This server protects sensitive API keys and enables CORS for frontend communication.

Features
API Key Protection: TMDB API keys stored securely using environment variables.

CORS Configuration: Properly configured for cross-origin requests from the frontend.

Proxy Architecture: All external API requests are routed through this server.

Error Handling: Basic input validation and error handling.

API Endpoints
GET /api/test - Health check endpoint

GET /api/movies/popular - Fetch currently popular movies

GET /api/movies/search - Search movies by title (requires q query parameter)

Tech Stack
Runtime: Node.js

Framework: Express.js

HTTP Client: Axios

Security: CORS middleware

Environment Management: dotenv

Package Manager: npm

Installation and Setup
Clone the repository:

bash
git clone https://github.com/BrandonSolinap/movie-finder-backend.git
cd movie-app-backend
Install dependencies:

bash
npm install
Environment Configuration:

Create a .env file in the root directory

Add your TMDB API key: TMDB_API_KEY=your_api_key_here

Add your port configuration: PORT=3001

Start the development server:

bash
npm run dev
The server will run on http://localhost:3001.

Project Structure
text
movie-app-backend/
├── server.js          # Main server file and route definitions
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (not tracked in git)
└── README.md         # Project documentation
Frontend Integration
This backend is designed to work with the Movie Finder frontend application. The frontend repository can be found here: movie-finder-frontend.

Deployment
This API is designed for deployment on platforms like Render or Railway. Environment variables should be configured in your deployment platform's dashboard.

License
This project is licensed under the MIT License.
