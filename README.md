# GitHub & Open Source Workshop - Interactive Teaching Website

An interactive teaching platform for GitHub and Open Source development workshop at SCRIET, Meerut. This website replaces traditional PowerPoint presentations with an engaging, hands-on learning experience.

## Features

-  **Interactive Terminal Emulator** - Practice Git commands in a browser-based terminal with realistic output
- **Code Display with Copy Buttons** - All code examples have one-click copy functionality
- **Keyboard Navigation** - Navigate smoothly during teaching with arrow keys and shortcuts  
- **Projector-Friendly Design** - Large text (24px+ body) and high contrast for visibility from back of room
- **Offline-Capable** - PWA configuration for workshop sessions without internet
- **4-Day Curriculum** - Complete workshop content from Git basics to open source contribution
- **GitHub-Inspired Theme** - Modern dark theme matching GitHub's aesthetic

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **xterm.js** - Terminal emulation
- **Lucide Icons** - Beautiful icon library
- **PWA** - Progressive Web App capabilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

Open [http://localhost:3000](http://localhost:3000) to view the website.

The following keyboard shortcuts are available:

- `→` or `Space` - Next section
- `←` - Previous section
- `F` - Fullscreen mode
- `ESC` - Exit fullscreen
- `/` - Search (coming soon)
- `Home` - Return to homepage

## Project Structure

```
workshop/
├── app/                    # Next.js App Router pages
│   ├── day1/              # Day 1: Git Basics
│   ├── day2/              # Day 2: GitHub Workflows
│   ├── day3/              # Day 3: Open Source
│   ├── day4/              # Day 4: Community Building
│   ├── cheat-sheet/       # Git command reference
│   ├── glossary/          # Terminology
│   ├── resources/         # External resources
│   └── about/             # Workshop information
├── components/            # React components
│   ├── Navigation/        # Sidebar, keyboard nav
│   ├── Terminal/          # Terminal emulator
│   ├── CodeBlock/         # Code display
│   ├── Teaching/          # Teaching components
│   └── Layout/            # Layout components
├── lib/                   # Utilities and data
│   ├── GitSimulator.ts    # Git command simulation
│   └── content/           # Navigation data
├── public/                # Static assets
└── next.config.js         # Next.js configuration
```

## Workshop Content

### Day 1: Git Basics
- Version Control concepts
- Installing Git
- First commands (init, add, commit, status, log)
- Local vs remote repositories
- Practice exercises with interactive terminal

### Day 2: GitHub (Placeholder)
- GitHub interface
- Remote repositories
- Branching and merging
- Pull requests
- Merge conflicts

### Day 3: Open Source (Placeholder)
- Open source philosophy
- Finding projects
- Making contributions
- Writing good PRs

### Day 4: Community (Placeholder)
- Collaboration workflows
- Best practices
- SCRIET GitHub organization
- Next steps

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
```

The built files will be in the `.next` directory, ready to deploy to any static hosting provider.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Workshop Usage

1. **Before Workshop**
   - Deploy the website to a URL
   - Test on projector/screen setup
   - Verify offline functionality

2. **During Workshop**
   - Use keyboard navigation for smooth teaching
   - Demonstrate terminal commands live
   - Encourage students to follow along on their devices

3. **After Workshop**
   - Share URL for student reference
   - Students can practice offline

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  'gh-bg-primary': '#0d1117',
  'gh-accent-blue': '#58a6ff',
  // ...
}
```

### Font Sizes

Modify projector font sizes in globals.css:

```css
'projector-base': '1.5rem',  /* 24px - body text */
```

## Contributing

This project was created for SCRIET Meerut workshop. Feel free to adapt it for your own workshops!

## Organizers

- **Lakshya Pandey** - B.Tech IT
- **Jayesh Gaur** - B.Tech CS
- **Utsav Dubey** - B.Tech IT


SCRIET, Meerut

## License

MIT License - Feel free to use this for educational purposes.

---

**Keep coding, keep contributing!** 🚀
