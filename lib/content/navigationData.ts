// Navigation structure for the workshop
export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Day 1: Intro to Git",
    path: "/day1",
    icon: "Terminal",
    children: [
      { title: "Importance of Version Control", path: "/day1/version-control" },
      { title: "MNCs & Open Source", path: "/day1/mnc-usage" },
      { title: "Installing Git", path: "/day1/installation" },
      { title: "First Commands", path: "/day1/first-commands" },
      { title: "Local vs Remote", path: "/day1/local-repository" },
      { title: "GitHub Setup & SSH", path: "/day1/github-setup" },

    ],
  },
  {
    title: "Day 2: Git Basics",
    path: "/day2",
    icon: "Code",
    children: [

      { title: "GitHub Interface", path: "/day2/github-intro" },
      { title: "Branching & Forking", path: "/day2/branching" },
      { title: "Pull Requests", path: "/day2/pull-requests" },
      { title: "Merge Conflicts", path: "/day2/merge-conflicts" },
      { title: "Issues & Projects", path: "/day2/github-issues" },
      { title: "Developer Profile", path: "/day2/developer-profile" },
    ],
  },
  {
    title: "Day 3: Open Source & Career",
    path: "/day3",
    icon: "Rocket",
    children: [
      { title: "What is Open Source?", path: "/day3/intro" },
      { title: "Industry Usage", path: "/day3/industry-usage" },
      { title: "Finding Projects", path: "/day3/finding-projects" },
      { title: "Contribution Flow", path: "/day3/contribution-flow" },
      { title: "Maintaining Repos", path: "/day3/maintaining" },
      { title: "Building Your Brand", path: "/day3/branding" },
      { title: "Markdown Guide", path: "/day3/markdown-guide" },
      { title: "Community Etiquette", path: "/day3/etiquette" },
      { title: "Next Steps", path: "/day3/next-steps" },
    ],
  },
];

export const utilityPages: NavItem[] = [
  { title: "Command Cheat Sheet", path: "/cheat-sheet", icon: "BookOpen" },
  { title: "Glossary", path: "/glossary", icon: "Book" },
  { title: "Resources", path: "/resources", icon: "ExternalLink" },
  { title: "About", path: "/about", icon: "Info" },
];

// Helper function to flatten navigation for previous/next navigation
export function getAllPaths(): string[] {
  const paths: string[] = ["/"];
  
  navigationData.forEach((day) => {
    paths.push(day.path);
    day.children?.forEach((topic) => {
      paths.push(topic.path);
    });
  });
  
  return paths;
}

// Get previous and next page for navigation
export function getNavigationContext(currentPath: string): {
  previous: string | null;
  next: string | null;
} {
  const allPaths = getAllPaths();
  const currentIndex = allPaths.indexOf(currentPath);
  
  return {
    previous: currentIndex > 0 ? allPaths[currentIndex - 1] : null,
    next: currentIndex < allPaths.length - 1 ? allPaths[currentIndex + 1] : null,
  };
}
