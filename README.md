# CheckInn

A full-stack hotel booking prototype with CRUD operations, auth, and data visualization.


![App Screenshot](/frontend/public/chackinn-app.gif)

## Tech Stack
- **Frontend**: Vue 3, Vite, Pinia, Vue Router, SCSS, axios
- **Backend**: Node.js, Express.js, Mongoose, JWT, bcryptjs
- **Database**: MongoDB (Atlas / local)
- **Testing**: Vitest

## Repository Structure
- `/frontend`: SPA UI, routes, store, components, styles
- `/server`: REST API routes, controllers, middleware, models

## Quick Start
1. `npm install` (root)
2. `cd frontend && npm install`
3. `cd server && npm install`

### Backend config (`server/.env`)
```env
MONGO_URI="mongodb+srv://<USER>:<PASS>@cluster0.xxxxxx.mongodb.net/CheckInn"
PORT=8000
JWT_SECRET=your_jwt_secret
```

### Run
- API: `cd server && npm start`
- UI: `cd frontend && npm run dev`

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/hotels/getHotels` | List hotels |
| GET | `/api/hotels/getHotel/:id` | Get single hotel |
| POST | `/api/hotels/seed` | Seed demo data |
| POST | `/api/hotels/createHotel` | Create hotel (admin) |
| PUT | `/api/hotels/updateHotel/:id` | Update hotel (admin) |
| DELETE | `/api/hotels/deleteHotel/:id` | Delete hotel (admin) |

## Usage
1. Start backend, confirm `Database connected` log.
2. Seed: `POST /api/hotels/seed`
3. Open frontend at `http://localhost:5173`