# Life Experiences Dashboard

A personal dashboard to track and showcase life experiences, goals, and time remaining.

## Features

- **Life Dashboard**: Visual representation of time remaining and life statistics
- **Experience Tracking**: Add, edit, and view life experiences with ratings and categories
- **Bucket List**: Manage personal goals and track completion
- **Real-time Stats**: Live time calculations and progress tracking
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
expriencesofsameer/
├── index.html              # Main dashboard page
├── pages/                  # HTML pages
│   ├── add-experience.html # Add/edit experiences
│   ├── bucket-list.html    # Bucket list management
│   ├── experiences.html    # Experience analytics
│   ├── login-modal.html    # Login modal component
│   └── test-crud.html      # Database testing page
├── js/                     # JavaScript files
│   ├── config.js           # Database configuration (gitignored)
│   ├── config.example.js   # Example configuration
│   ├── db.js               # Database operations
│   ├── auth.js             # Authentication logic
│   └── simple-auth.js      # Simple auth implementation
├── css/                    # Stylesheets (empty)
├── sql/                    # SQL files
│   └── setup.sql           # Database setup script
└── README.md               # This file
```

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expriencesofsameer
   ```

2. **Configure Database**
   - Copy `js/config.example.js` to `js/config.js`
   - Update the Supabase URL and API key in `js/config.js`

3. **Database Setup**
   - Run the SQL commands in `sql/setup.sql` in your Supabase SQL editor
   - Or use the test page at `pages/test-crud.html` to test database connectivity

4. **Open the Application**
   - Open `index.html` in a web browser
   - Or serve the files using a local web server

## Database Schema

### LifeExperiences Table
- `id`: Primary key
- `title`: Experience title
- `date`: Date of experience
- `category`: Experience category
- `description`: Detailed description
- `rating`: Rating (1-10)
- `image_url`: Optional image URL
- `target_date`: Optional target date
- `created_at`: Timestamp

### Bucket_List Table
- `id`: Primary key
- `title`: Goal title
- `category`: Goal category
- `priority`: Priority level
- `completed`: Completion status
- `completed_date`: Completion date
- `created_date`: Creation timestamp

## Security

- Database credentials are stored in `js/config.js` (gitignored)
- Use the example config file as a template
- Never commit actual credentials to version control

## Development

- Test database operations using `pages/test-crud.html`
- All JavaScript modules are in the `js/` directory
- HTML pages are organized in the `pages/` directory
- SQL scripts are in the `sql/` directory

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Supabase for backend database
- Responsive design with CSS Grid and Flexbox
- Real-time updates and calculations

## License

Personal project - All rights reserved.