// Missions / Completed Field Operations Data

export const projectsData = [
  {
    id: 'mission-01',
    code: 'MISSION 01',
    name: 'MODZLAB',
    subtitle: 'BIKE ACCESSORIES E-COMMERCE STORE',
    type: 'FREELANCE WEB DEVELOPMENT',
    category: 'FREELANCE CLIENT PROJECT',
    role: 'FREELANCE WEB DEVELOPER',
    status: 'MISSION COMPLETED',
    statusType: 'completed',
    accentColor: 'orange',
    objective: 'E-COMMERCE DEVELOPMENT',
    description: 'ModzLab is a modern e-commerce website developed as a freelance project for a business selling motorcycle modification accessories such as exhausts, helmets, visors, lights and other bike accessories.',
    technologies: ['React', 'JavaScript', 'CSS', 'Supabase', 'Git', 'GitHub'],
    techBadges: ['REACT', 'JAVASCRIPT', 'SUPABASE', 'CSS', 'GIT', 'GITHUB'],
    projectBadges: ['FREELANCE', 'CLIENT PROJECT', 'COMPLETED'],
    features: [
      'Product catalog & category filtering',
      'Product details and accessory breakdowns',
      'Interactive shopping cart & checkout flow',
      'User authentication & profile access',
      'Admin product and order management',
      'Fully responsive UI across all screen sizes'
    ],
    responsibilities: [
      'Designed and developed the frontend using React and CSS',
      'Built modular reusable components and shopping cart state',
      'Integrated Supabase for backend data persistence and auth',
      'Managed source code using Git and GitHub'
    ],
    githubUrl: 'https://github.com/NagarkarParth/ModzLab-Bike-Accessories-Store',
    liveDemoUrl: null, // No fake live URL, will render as a disabled/not deployed button
    isLiveDemoDisabled: true,
  },
  {
    id: 'mission-02',
    code: 'MISSION 02',
    name: 'RAKTDAAN',
    subtitle: 'BLOOD DONATION AND DONOR MANAGEMENT APPLICATION',
    type: 'ANDROID APPLICATION',
    category: 'SOCIAL IMPACT',
    platform: 'ANDROID',
    role: 'ANDROID DEVELOPER',
    status: 'COMPLETED',
    deploymentStatus: 'NOT DEPLOYED',
    statusType: 'completed',
    accentColor: 'yellow', // Yellow/gold completed indicator as specified
    objective: 'MOBILE SOCIAL IMPACT PLATFORM',
    description: 'RaktDaan is an Android-based application designed to help connect blood donors with people searching for blood. The application provides a digital platform for donor registration, blood group discovery and managing blood-related requests.',
    technologies: ['Java', 'Android Studio', 'Firebase'],
    techBadges: ['JAVA', 'ANDROID STUDIO', 'FIREBASE'],
    projectBadges: ['ANDROID', 'SOCIAL IMPACT', 'COMPLETED', 'NOT DEPLOYED'],
    features: [
      'User registration and login authentication',
      'Donor registration & blood group discovery',
      'Search for compatible blood donors',
      'Donor information & direct blood request management',
      'Firebase Authentication & database integration',
      'Real-time data synchronization & responsive Android UI'
    ],
    githubUrl: 'https://github.com/NagarkarParth/Blood-Bank---Raktdaan-',
    liveDemoUrl: null, // No Live Demo button for RaktDaan
    isLiveDemoDisabled: false,
  },
  {
    id: 'mission-03',
    code: 'MISSION 03',
    name: 'CLASSIFIED PROJECT',
    subtitle: 'ENCRYPTED SUPPLY CACHE // NEXT OPERATION',
    type: 'UPCOMING DEPLOYMENT',
    category: 'TACTICAL RESEARCH',
    role: 'FULL-STACK DEVELOPER',
    status: 'COMING SOON',
    statusType: 'classified',
    accentColor: 'yellow',
    objective: 'NEXT OPERATION',
    description: 'Next mission currently under development. High-tech architecture and data intelligence systems are being calibrated.',
    technologies: ['React', 'Python', 'Django'],
    techBadges: ['CLASSIFIED', 'IN DEVELOPMENT'],
    projectBadges: ['ENCRYPTED', 'LOCKED CRATE'],
    features: [
      'Advanced software architecture',
      'Interactive visual interfaces',
      'Under active development'
    ],
    isLocked: true,
  }
];
