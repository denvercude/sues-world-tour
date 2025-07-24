# Sue's World Tour

## About
Created by Denver Cude. Sue’s World Tour is an experiment in collaborative storytelling and modern web tech.

Sue is a plastic dinosaur found in the sands of Pismo Beach, California. She travels by mail with instructions and an upload password. Each recipient takes a photo of Sue at a local landmark, uploads it, and passes her along to someone new.

Follow Sue’s journey as she explores the world.

---

## Features
- **Gallery View:** Browse Sue’s latest travel photos, each with captions, locations, and upload dates.
- **Photo Upload:** Add your own Sue sighting! Upload a photo, caption, and location (password-protected for moderation).
- **Responsive Design:** Looks great on desktop and mobile.
- **Retro UI Components:** Custom Card, Button, and Text components for a unique look.
- **Supabase Backend:** Stores images and post data securely in the cloud.
- **Password-Protected Uploads:** Only users with the correct password can upload new photos.

---

## Tech Stack
- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Supabase (Database & Storage)
- **UI:** RetroUI library and custom components

---

## Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/sues-world-tour.git
cd sues-world-tour
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory with the following:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUE_UPLOAD_PASSWORD=your-upload-password
```
- Get your Supabase credentials from your [Supabase project dashboard](https://app.supabase.com/).
- Set a password for uploads (share only with trusted users).

### 4. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure
```
app/                # Next.js app directory (pages, layout, API routes)
  gallery/          # Gallery page
  upload/           # Upload page
  api/validate-upload/ # API route for password validation
components/         # UI components (Cards, Buttons, Gallery, UploadForm, etc.)
lib/                # Supabase client, upload logic, post fetching/adding
public/images/      # Static images (Sue's starter photos)
styles/             # Global styles (Tailwind CSS)
```

---

## How It Works
- **Gallery:** Fetches the latest 20 posts from Supabase and displays them as Polaroid-style cards.
- **Upload:** Users fill out a form (caption, location, image, password). The image is validated (type, size), uploaded to Supabase Storage, and a new post is added to the database.
- **Security:** Uploads require a password, checked via a secure API route. Only valid uploads are accepted.
- **Supabase:** Handles all data storage, image hosting, and public URL generation.
