# Job Search API Aggregator

## Overview
This project is a web application built using Next.js and TypeScript that aggregates job listings from multiple job search APIs. It provides a simple and intuitive interface for users to search for jobs based on title and location, implementing parallel API calls with a timeout mechanism to enhance performance.

![Job search aggregator](public/search-job-aggregator.gif)

## Features
- User-friendly search form with fields for job title and location.
- Aggregation of job listings from multiple job search APIs.
- Loading indicator displayed while API calls are in progress.
- Robust error handling for failed API requests.
- Mock APIs simulating job search responses.
- Caching mechanism to improve performance.
- Responsive design for both desktop and mobile devices.
- Theming feature to switch between light and dark modes.
- Pagination for job listings.
- Filtering options for job listings (Bonus).
- Feature to save favorite job listings (Bonus).

## Technical Requirements
- Built with Next.js and TypeScript for both frontend and backend.
- Strong typing implemented throughout the application.
- Utilizes modern React practices, including hooks and functional components.
- Styled using Tailwind CSS for a flexible and responsive design.
- Components built with shadcn/ui for a consistent and elegant UI.
- Clean, well-documented, and maintainable code.
- Basic unit tests for critical functions.

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KaroMourad/job-search-aggregator.git
   cd job-search-aggregator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### API Integration
The application includes mock APIs to simulate job search behavior. The mock APIs are set up at the following endpoints:
- `/api/jobs/api1`: Quick response within the timeout period.
- `/api/jobs/api2`: Delayed response exceeding the timeout period.
- `/api/jobs/api3`: Implement a third API endpoint similar to the above examples.
- `/api/jobs/search`: The search API allows users to fetch job listings based on their search criteria (job title and location). This API aggregates results from multiple sources and applies the necessary error handling and loading states.

### Mock Job Schema
```bash
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary?: string;
  postedDate: string;
  applicationUrl: string;
}
```

### Design Decisions
- Used mock APIs to simulate real-world job search API behavior.
- Implemented a timeout mechanism for API calls to enhance user experience.
- Styled the application using Tailwind CSS for a responsive design.
- Utilized shadcn/ui components to maintain a consistent look and feel.
- Implemented pagination for job listings to enhance the user experience for goal-oriented tasks like job searches.

## Bonus Features
The following bonus features can be implemented for additional points:
- Filtering: Allow users to filter job listings based on criteria.
- Favorite Listings: Allow users to save and view their favorite job listings.

## Deployment
This application is deployed to [Vercel](https://vercel.com/) (or another hosting service). You can view the live application [here](https://job-search-aggregator-taupe.vercel.app/).

## Assumptions and Limitations
- The application currently uses mock data; actual API integration would require a valid API key and proper handling of real API responses.
- Some features may not be fully implemented; please refer to the bonus features section for potential enhancements.

## Evaluation Criteria
The project will be evaluated based on:
- Functionality: Meeting specified requirements.
- Code Quality: Structure, cleanliness, and maintainability.
- TypeScript Usage: Effective use of TypeScript.
- Error Handling: Robustness in handling errors and edge cases.
- Performance: Efficiency in API calls and data processing.
- User Experience: Intuitive and responsive interface.
- Documentation: Clarity in setup instructions and code comments.

## License
This project is licensed under the MIT License.
