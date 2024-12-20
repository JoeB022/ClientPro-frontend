# LINKS



1. # Video loom links
    https://www.loom.com/share/be263882192447b2802426b24a85c920?sid=abafc0d6-ab65-44da-aa0d-3c29c50132ee

    https://www.loom.com/share/1dba32681edb4a82855d67f209505e11?sid=f9fef693-c17c-41b7-8778-536dd81c6d4d

2. # Google slide link
   https://docs.google.com/presentation/d/1s9CaimifbuRrW492ByiLlYwEKmLn0BQ9grSEgsH2kfI/edit#slide=id.g320b6b531da_0_1358

3. # Deployment link
     client-pro-frontend-git-main-joe-brians-projects.vercel.app






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

### Backend Setup
1. Clone the repository:

   git clone https://github.com/username/ClientPro-CRM.git
   cd ClientPro-CRM/backend
   ```
2. Create and activate a virtual environment:
   pipenv shell
   
3. Install dependencies:

   pipenv install -r requirements.txt
   ```
4. Apply database migrations:

   alembic upgrade head
   ```
5. Run the backend server:

   uvicorn app.main:app --host 0.0.0.0
   ```

### Frontend Setup
1. Navigate to the frontend directory:

   cd ../frontend/ClientPro-CRM

2. Install dependencies:

   npm install
   
3. Start the development server:

   npm run dev
   

## Future Enhancements
1. Add authentication and authorization.
2. Implement advanced analytics for client and project metrics.
3. Enable email notifications for project updates.
4. Integrate third-party APIs (e.g., Google Calendar for scheduling).

## Contributing
Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).


## Contact
For any inquiries or support, please contact:
- **Email**: joebrian998@gmail.com
- **Website**: [ClientPro CRM](client-pro-frontend-git-main-joe-brians-projects.vercel.app)

