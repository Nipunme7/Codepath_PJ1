const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const tips = [
  {
    id: "funding", 
    title: "Startup Funding Strategies", 
    category: "Finance", 
    difficulty: "Advanced", 
    time: "2-3 months", 
    desc: "Master the art of securing capital through venture capital, angel investors, and crowdfunding platforms.", 
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "marketing", 
    title: "Digital Marketing Mastery", 
    category: "Marketing", 
    difficulty: "Intermediate", 
    time: "4-6 weeks", 
    desc: "Learn SEO, social media, email campaigns, and paid advertising to grow your business online.", 
    author: "Mike Rodriguez",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "team", 
    title: "Building High-Performance Teams", 
    category: "Leadership", 
    difficulty: "Advanced", 
    time: "6-8 weeks", 
    desc: "Recruit, onboard, and manage teams that drive business growth and innovation.", 
    author: "Emily Watson",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "validation", 
    title: "Customer Validation Techniques", 
    category: "Research", 
    difficulty: "Intermediate", 
    time: "3-4 weeks", 
    desc: "Validate your business idea with real customers before investing heavily in development.", 
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "finance", 
    title: "Financial Planning for Entrepreneurs", 
    category: "Finance", 
    difficulty: "Intermediate", 
    time: "2-4 weeks", 
    desc: "Understand cash flow management, budgeting, and financial forecasting for business success.", 
    author: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "product", 
    title: "Agile Product Development", 
    category: "Product", 
    difficulty: "Intermediate", 
    time: "4-6 weeks", 
    desc: "Implement agile methodologies to develop products faster while maintaining quality.", 
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "sales", 
    title: "Sales Funnel Optimization", 
    category: "Sales", 
    difficulty: "Advanced", 
    time: "3-5 weeks", 
    desc: "Build and optimize sales funnels that convert prospects into paying customers.", 
    author: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center"
  }
];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.get("/tips/:id", (req, res) => res.sendFile(path.join(__dirname, "views", "detail.html")));
app.get("/api/tips", (req, res) => res.json(tips));
app.get("/api/tips/:id", (req, res) => res.json(tips.find(t => t.id === req.params.id) || {error: "Not found"}));
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));

app.listen(PORT, () => console.log(`🚀 Business Tips Listicle running on http://localhost:${PORT}`));
