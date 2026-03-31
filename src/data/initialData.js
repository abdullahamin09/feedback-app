export const initialSuggestions = [
  {
    id: 1,
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    upvotes: 112,
    comments: 2,
    category: "Enhancement",
    upvoted: true,
    status: "suggestion"
  },
  {
    id: 2,
    title: "Add a dark theme option",
    description: "It would help people with light sensitivities and who prefer dark mode.",
    upvotes: 99,
    comments: 4,
    category: "Feature",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 3,
    title: "Q&A sections are confusing",
    description: "The current layout makes it hard to distinguish between questions and answers.",
    upvotes: 52,
    comments: 0,
    category: "UX",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 4,
    title: "Allow image uploads in feedback",
    description: "Images would help to explain bugs or UI suggestions much better.",
    upvotes: 41,
    comments: 1,
    category: "Enhancement",
    upvoted: true,
    status: "planned"
  },
  {
    id: 5,
    title: "Ability to follow specific feedback",
    description: "Stay updated on comments and status changes for specific items.",
    upvotes: 35,
    comments: 3,
    category: "Feature",
    upvoted: false,
    status: "in-progress"
  },
  {
    id: 6,
    title: "Fix mobile navigation layout",
    description: "The hamburger menu is overlapping with the logo on smaller screens.",
    upvotes: 28,
    comments: 5,
    category: "Bug",
    upvoted: false,
    status: "live"
  },
  {
    id: 7,
    title: "One-click delete for notifications",
    description: "Clearing out individual notifications takes too long.",
    upvotes: 18,
    comments: 2,
    category: "UX",
    upvoted: true,
    status: "suggestion"
  },
  {
    id: 8,
    title: "Filter by most commented",
    description: "I want to see what people are talking about the most.",
    upvotes: 12,
    comments: 8,
    category: "Enhancement",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 9,
    title: "Add a search bar",
    description: "Quickly find relevant feedback without scrolling through pages.",
    upvotes: 105,
    comments: 12,
    category: "Feature",
    upvoted: false,
    status: "planned"
  },
  {
    id: 10,
    title: "Email notifications for replies",
    description: "I miss a lot of feedback because I'm not always on the site.",
    upvotes: 67,
    comments: 0,
    category: "Enhancement",
    upvoted: true,
    status: "suggestion"
  },
  {
    id: 11,
    title: "Preview images on hover",
    description: "Save time by seeing images without clicking into the feedback.",
    upvotes: 9,
    comments: 1,
    category: "UX",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 12,
    title: "Pagination for the main list",
    description: "The page takes too long to load with hundreds of items.",
    upvotes: 15,
    comments: 4,
    category: "Enhancement",
    upvoted: false,
    status: "in-progress"
  },
  {
    id: 13,
    title: "Fix broken links in footer",
    description: "Several links in the resources section go to 404 pages.",
    upvotes: 22,
    comments: 2,
    category: "Bug",
    upvoted: false,
    status: "live"
  },
  {
    id: 14,
    title: "Animated transitions between pages",
    description: "Make the site feel more like a modern web application.",
    upvotes: 5,
    comments: 0,
    category: "UI",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 15,
    title: "Export feedback to CSV",
    description: "Admins should be able to download the data for external analysis.",
    upvotes: 31,
    comments: 2,
    category: "Feature",
    upvoted: true,
    status: "planned"
  },
  {
    id: 16,
    title: "Drag and drop to reorder roadmap",
    description: "Allow admins to manually prioritize the roadmap order.",
    upvotes: 14,
    comments: 3,
    category: "UX",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 17,
    title: "User avatars on comments",
    description: "Adding personality to the comments section would be nice.",
    upvotes: 44,
    comments: 15,
    category: "UI",
    upvoted: true,
    status: "in-progress"
  },
  {
    id: 18,
    title: "Slow loading of upvote count",
    description: "There is a noticeable lag when clicking the upvote button.",
    upvotes: 25,
    comments: 6,
    category: "Bug",
    upvoted: false,
    status: "live"
  },
  {
    id: 19,
    title: "Social media sharing links",
    description: "Let users share their feedback on Twitter or LinkedIn.",
    upvotes: 7,
    comments: 1,
    category: "Feature",
    upvoted: false,
    status: "suggestion"
  },
  {
    id: 20,
    title: "Custom tag colors",
    description: "Allow admins to color-code different categories for better visibility.",
    upvotes: 11,
    comments: 0,
    category: "UI",
    upvoted: false,
    status: "suggestion"
  }
];

export const initialComments = [
  {
    suggestionId: 1,
    comments: [
      {
        id: 1,
        user: {
          image: "https://i.pravatar.cc/150?img=1",
          name: "Ali Khan",
          username: "alikhan"
        },
        content: "This would make filtering solutions much easier 👍",
        createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000
      },
      {
        id: 2,
        user: {
          image: "https://i.pravatar.cc/150?img=2",
          name: "Sara Ahmed",
          username: "saraahmed"
        },
        content: "Tags are a must-have feature for scalability.",
        createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
  {
    suggestionId: 2,
    comments: [
      {
        id: 1,
        user: {
          image: "https://i.pravatar.cc/150?img=3",
          name: "Usman Tariq",
          username: "usmant"
        },
        content: "Dark mode is essential nowadays.",
        createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000
      },
      {
        id: 2,
        user: {
          image: "https://i.pravatar.cc/150?img=4",
          name: "Ayesha Noor",
          username: "ayeshanoor"
        },
        content: "My eyes would really appreciate this 😅",
        createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000
      },
      {
        id: 3,
        user: {
          image: "https://i.pravatar.cc/150?img=5",
          name: "Hamza Ali",
          username: "hamzaali"
        },
        content: "Please add scheduling for dark mode too.",
        createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000
      },
      {
        id: 4,
        user: {
          image: "https://i.pravatar.cc/150?img=6",
          name: "Bilal Ahmed",
          username: "bilalahmed"
        },
        content: "System-based theme switching would be great.",
        createdAt: Date.now() - 12 * 60 * 60 * 1000
      }
    ]
  },
  {
    suggestionId: 3,
    comments: []
  },
  {
    suggestionId: 4,
    comments: [
      {
        id: 1,
        user: {
          image: "https://i.pravatar.cc/150?img=7",
          name: "Zain Malik",
          username: "zainmalik"
        },
        content: "Images will help explain issues clearly.",
        createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000
      }
    ]
  },
  {
    suggestionId: 5,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=8", name: "Hassan", username: "hassan" }, content: "Following feature is much needed.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=9", name: "Fatima", username: "fatima" }, content: "Notifications will help engagement.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=10", name: "Ahmed", username: "ahmed" }, content: "Yes, I miss updates often.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 6,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=11", name: "Saad", username: "saad" }, content: "Mobile UI is broken.", createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=12", name: "Iqra", username: "iqra" }, content: "Hamburger overlaps logo.", createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=13", name: "Daniyal", username: "daniyal" }, content: "Needs urgent fix.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { id: 4, user: { image: "https://i.pravatar.cc/150?img=14", name: "Maryam", username: "maryam" }, content: "Facing same issue.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 5, user: { image: "https://i.pravatar.cc/150?img=15", name: "Taha", username: "taha" }, content: "Affects usability badly.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 7,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=16", name: "Adeel", username: "adeel" }, content: "One-click delete would save time.", createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=17", name: "Noor", username: "noor" }, content: "Managing notifications is painful.", createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 8,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=18", name: "Sameer", username: "sameer" }, content: "Sorting by comments is useful.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=19", name: "Hina", username: "hina" }, content: "Helps identify hot topics.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=20", name: "Faraz", username: "faraz" }, content: "Nice idea.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 4, user: { image: "https://i.pravatar.cc/150?img=21", name: "Laiba", username: "laiba" }, content: "Should be default filter.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { id: 5, user: { image: "https://i.pravatar.cc/150?img=22", name: "Zeeshan", username: "zeeshan" }, content: "Agree 👍", createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },
      { id: 6, user: { image: "https://i.pravatar.cc/150?img=23", name: "Kiran", username: "kiran" }, content: "Helpful feature.", createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 },
      { id: 7, user: { image: "https://i.pravatar.cc/150?img=24", name: "Umer", username: "umer" }, content: "Makes sense.", createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000 },
      { id: 8, user: { image: "https://i.pravatar.cc/150?img=25", name: "Sana", username: "sana" }, content: "I would use this.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 9,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=26", name: "Ali", username: "ali" }, content: "Search is badly needed.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=27", name: "Sara", username: "sara" }, content: "Scrolling is annoying.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=28", name: "Bilal", username: "bilal" }, content: "Improve UX.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 4, user: { image: "https://i.pravatar.cc/150?img=29", name: "Zara", username: "zara" }, content: "Agree with this.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { id: 5, user: { image: "https://i.pravatar.cc/150?img=30", name: "Hassan", username: "hassan2" }, content: "Must have.", createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },
      { id: 6, user: { image: "https://i.pravatar.cc/150?img=31", name: "Areeba", username: "areeba" }, content: "Very useful.", createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 },
      { id: 7, user: { image: "https://i.pravatar.cc/150?img=32", name: "Saif", username: "saif" }, content: "Yes please.", createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000 },
      { id: 8, user: { image: "https://i.pravatar.cc/150?img=33", name: "Muneeb", username: "muneeb" }, content: "Agree 👍", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 9, user: { image: "https://i.pravatar.cc/150?img=34", name: "Tariq", username: "tariq" }, content: "Essential feature.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { id: 10, user: { image: "https://i.pravatar.cc/150?img=35", name: "Huma", username: "huma" }, content: "Much needed.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 11, user: { image: "https://i.pravatar.cc/150?img=36", name: "Raza", username: "raza" }, content: "Yes.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { id: 12, user: { image: "https://i.pravatar.cc/150?img=37", name: "Nida", username: "nida" }, content: "Agreed.", createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 10,
    comments: []
  },
  {
    suggestionId: 11,
    comments: [
      {
        id: 1,
        user: {
          image: "https://i.pravatar.cc/150?img=38",
          name: "Ali",
          username: "ali2"
        },
        content: "Hover preview is cool.",
        createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000
      }
    ]
  },
  {
    suggestionId: 12,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=39", name: "Sara", username: "sara2" }, content: "Pagination needed.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=40", name: "Bilal", username: "bilal2" }, content: "Performance issue.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=41", name: "Hassan", username: "hassan3" }, content: "Agree.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { id: 4, user: { image: "https://i.pravatar.cc/150?img=42", name: "Ayesha", username: "ayesha2" }, content: "Fix ASAP.", createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 13,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=43", name: "Zain", username: "zain2" }, content: "Links are broken.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=44", name: "Noor", username: "noor2" }, content: "Needs fixing.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 14,
    comments: []
  },
  {
    suggestionId: 15,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=45", name: "Ahmed", username: "ahmed2" }, content: "CSV export is useful.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=46", name: "Fatima", username: "fatima2" }, content: "Admins need this.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 }
    ]
  },
  {
    suggestionId: 16,
    comments: [
      { id: 1, user: { image: "https://i.pravatar.cc/150?img=47", name: "Saad", username: "saad2" }, content: "Drag-drop is helpful.", createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { id: 2, user: { image: "https://i.pravatar.cc/150?img=48", name: "Hina", username: "hina2" }, content: "Improve UX.", createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { id: 3, user: { image: "https://i.pravatar.cc/150?img=49", name: "Ali", username: "ali3" }, content: "Nice feature.", createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 }
    ]
  },

  {
    suggestionId: 17,
    comments: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      user: {
        image: `https://i.pravatar.cc/150?img=${30 + i}`,
        name: `User ${i + 1}`,
        username: `user${i + 1}`
      },
      content: "Avatars would make comments more engaging.",
      createdAt: Date.now() - (i * 3600000)
    }))
  },
  {
    suggestionId: 18,
    comments: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      user: {
        image: `https://i.pravatar.cc/150?img=${60 + i}`,
        name: `User ${i + 1}`,
        username: `user${i + 20}`
      },
      content: "Upvote lag is noticeable.",
      createdAt: Date.now() - (i * 3600000)
    }))
  }
];