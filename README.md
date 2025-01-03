# ISDB - Internet Shows Database

Welcome to the ISDB- Internet Shows Database, an application designed for discovering and tracking TV shows. This README provides a detailed overview of the project, its features, and instructions for installing and running the application. The app is built with a Django backend and a React frontend.

## Project Overview

The ISDB- Internet Shows Database is a full-stack application that allows users to explore a rich catalog of TV shows and create personalized watchlists.

### Features

1. **Discover TV Shows:** Browse a wide selection of TV shows with detailed information including genre, air date and ratings.
2. **Personalized Watchlists:** Add shows to your watchlist and track your favorite shows.
5. **Responsive UI:** A sleek, mobile-friendly interface for seamless browsing.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:
- Python (>=3.8)
- Node.js (>=16.0)
- npm or Yarn
- Git
- Virtualenv (optional, for Python virtual environments)

### Backend (Django)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-name/isdb-tv-show-app.git
   cd isdb-tv-show-app/backend
   ```

2. **Set Up Virtual Environment** (Optional but recommended)
   ```bash
   python3 -m venv env
   source env/bin/activate # On Windows: env\Scripts\activate
   ```

3. **Install Backend Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up the Database** (Optional)
   Run migrations to set up the database:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a Superuser** (Optional, for accessing the admin panel)
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the Backend Server**
   ```bash
   python manage.py runserver
   ```
   The server will be available at `http://127.0.0.1:8000/`.

---

### Frontend (React)

1. **Navigate to the Frontend Directory**
   ```bash
   cd ../frontend
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Start the Frontend Server**
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000/`.

---

## Running the Application

1. Start the Django backend server (`python manage.py runserver`).
2. Start the React frontend server (`npm start`).
3. Open your browser and navigate to `http://localhost:3000` to use the app.

---

## Development Notes

### Backend Structure
The Django backend follows a modular structure:
- `views/`: Contains logic for handling requests.
- `urls.py`: Configures backend API routes.

### Frontend Structure
The React frontend is organized into the following key directories:
- `src/components/`: Reusable React components.
- `src/pages/`: Page-level components.
- `src/utils/`: Handles API requests using Axios.
- `src/context/`: Manages global state.

---

## Frontend Dependencies

The project uses the following key dependencies:
- **React Router:** For navigation.
- **Material-UI:** For UI components and styling.
- **Axios:** For API requests.
- **React Context API:** For state management.

Install all dependencies with:
```bash
npm install
```

---

## Backend Dependencies

The `requirements.txt` includes:
- **Django:** Core backend framework.
- **Django Rest Framework (DRF):** For building RESTful APIs.
- **djangorestframework-simplejwt:** For JWT-based authentication.
- **PostgreSQL (optional):** Recommended database.

Install dependencies with:
```bash
pip install -r requirements.txt
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or support, contact me at:
- **Email:** evyatarhermesh@gmail.com
- **GitHub Issues:** [GitHub Issues](https://github.com/evya8/isdb-internet-shows-database/issues)

---

Enjoy exploring and tracking your favorite TV shows with ISDB - Internet Shows Database!

