# Dashboard UI

A modern, responsive dashboard interface built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Sidebar Navigation**: Clean sidebar with logo, navigation menu items (Dashboard, Team, Usage), and user profile
- **Header**: Displays credit balance with notification bell and help icons
- **Dashboard Stats**: Visual metrics showing project count and credit usage with circular progress indicators
- **Project Grid**: Responsive 3-column grid displaying all projects with hover effects
- **Interactive Project Cards**: Cards with context menus for actions (View, Edit, Duplicate, Delete)
- **Create DMN Button**: Quick action button in sidebar for creating new DMN entries

## Component Structure

```
app/dashboard/
├── components/
│   ├── Sidebar.tsx           # Left sidebar with navigation
│   ├── Header.tsx            # Top header with credits and actions
│   ├── DashboardStats.tsx    # Stats cards with metrics
│   ├── ProjectCard.tsx       # Individual project card
│   ├── ProjectGrid.tsx       # Grid layout for projects
│   ├── UserProfile.tsx       # User profile in sidebar
│   ├── CreateDMNButton.tsx   # Create DMN action button
│   └── index.ts              # Component exports
├── page.tsx                  # Main dashboard page
└── README.md                 # This file
```

## Technologies Used

- **Next.js 16** - React framework with Turbopack
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **@mynaui/icons-react** - Icon library
- **Satoshi Font** - Custom font family

## Usage

Navigate to `/dashboard` to view the dashboard interface.

```tsx
// Access the dashboard
http://localhost:3000/dashboard
```

## Customization

### Update User Information
Edit the `userName` prop in `app/dashboard/page.tsx`:

```tsx
<Sidebar userName="Your Name" />
```

### Modify Credits
Update the credit values in `app/dashboard/page.tsx`:

```tsx
<Header credits={972} totalCredits={1000} />
<DashboardStats creditsLeft={972} totalCredits={1000} />
```

### Add/Remove Projects
Edit the `projects` array in `app/dashboard/page.tsx`:

```tsx
const projects = [
  { id: '1', title: 'Your Project', date: '01-01-2025' },
  // Add more projects...
];
```

## Styling

The dashboard uses a clean, modern design with:
- Light gray backgrounds (#F9FAFB)
- Subtle borders and shadows
- Smooth transitions and hover effects
- Rounded corners (2xl radius)
- Blue accent color for active states

## Components API

### Sidebar
```tsx
<Sidebar userName="Emaillia Cailin" className="custom-class" />
```

### Header
```tsx
<Header credits={972} totalCredits={1000} />
```

### DashboardStats
```tsx
<DashboardStats
  projectCount={12757}
  creditsLeft={972}
  totalCredits={1000}
/>
```

### ProjectGrid
```tsx
<ProjectGrid projects={projectsArray} />
```

## Development

The dashboard is fully functional with:
- Interactive navigation menu
- Hover states on all interactive elements
- Context menus on project cards
- Responsive layout
- Smooth animations

## Browser Support

Modern browsers with support for:
- CSS Grid
- Flexbox
- CSS Custom Properties
- ES6+
