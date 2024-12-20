# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ClientPro CRM (Client Professional Customer Relationship Management)

## Project Overview
ClientPro CRM is a full-stack Customer Relationship Management system designed to help businesses effectively manage their client relationships. It streamlines the process of tracking projects, managing client data, and organizing company resources. The system leverages modern technologies to deliver an efficient, responsive, and user-friendly experience.

---

## Features
1. **Client Management**: 
   - Add, view, update, and delete client details such as name, email, phone, and company.

2. **Project Management**:
   - Track project information, including title, description, status, and client association.

3. **User-Friendly Interface**: 
   - Intuitive and responsive frontend built with React.

4. **Backend Functionality**:
   - Robust backend for data storage and retrieval using FastAPI and SQLAlchemy.

5. **Data Persistence**:
   - Store and manage data using an SQLite database with Alembic migrations.

---

## Technologies Used
### Backend:
- **FastAPI**: For building a robust and fast API backend.
- **SQLAlchemy**: ORM for database operations.
- **Alembic**: For database migrations.
- **Uvicorn**: ASGI server for running the backend.

### Frontend:
- **React**: For creating a dynamic and responsive user interface.
- **Vite**: Build tool for faster React development.
- **CSS**: For styling components.

---

## Installation and Setup
### Prerequisites
- Python 3.9 or above
- Node.js (LTS version)
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/username/ClientPro-CRM.git
   cd ClientPro-CRM/backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   pipenv shell  # Linux
   
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:
   ```bash
   alembic upgrade head
   ```
5. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage
1. Access the frontend interface by navigating to `http://localhost:3000` in your browser.
2. Use the dashboard to:
   - Add, view, edit, or delete clients and projects.
   - Monitor the status of ongoing projects.
3. Backend API is available at `http://localhost:8000/docs` for testing endpoints using Swagger UI.

---

## File Structure
```
ClientPro-CRM/
├── backend/
│   ├── alembic/         # Migration files
│   ├── app/             # Application source code
│   ├── main.py          # Entry point for the backend
│   └── requirements.txt # Backend dependencies
├── frontend/
│   ├── public/          # Static assets
│   ├── src/             # React source code
│   └── package.json     # Frontend dependencies
├── db.json              # Sample database for testing
└── README.md            # Documentation
```

---

## Future Enhancements
1. Add authentication and authorization.
2. Implement advanced analytics for client and project metrics.
3. Enable email notifications for project updates.
4. Integrate third-party APIs (e.g., Google Calendar for scheduling).

---

## Contributing
Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or support, please contact:
- **Email**: support@clientprocrm.com
- **Website**: [ClientPro CRM](https://www.clientprocrm.com)

