# Personal Website Template - Project Plan

## Project Overview
- **Goal**: Create user-friendly personal website template
- **Tech Stack**: Astro, Keystatic, Tailwind CSS, Daisy UI
- **Target Audience**: Non-technical users
- **Content Management**: All pages controlled by Keystatic for simplicity

## Page Structure
- `/` - Resume/Portfolio (main landing page)
- `/blog` - Blog listing page with all posts
- `/blog/[slug]` - Individual blog post page
- `/articles` - Research/work showcase page
- `/keystatic` - Admin interface for content management

## Phase 1: Foundation Setup (High Priority)

### 1. Setup Tailwind CSS and Daisy UI integration
- Install Tailwind CSS and Daisy UI dependencies
- Configure Tailwind with Astro
- Setup Daisy UI themes and components
- Update existing styles to use Tailwind

### 2. Create comprehensive Keystatic schema
- Design schema for resume/portfolio content
- Create blog posts collection schema
- Design articles collection schema
- Configure proper field types and validation

### 3. Design responsive layout components
- Create base layout components with Daisy UI
- Build reusable UI components
- Setup responsive design system
- Create component library structure

### 4. Build index route as resume/portfolio page
- Design hero section for personal branding
- Create experience/timeline section
- Add skills section
- Include contact information
- Make content editable via Keystatic

## Phase 2: Content Pages (Medium Priority)

### 5. Create blog list page
- Display all blog posts in grid/list view
- Add pagination or filtering
- Include post metadata (date, tags)
- Style with Daisy UI components

### 6. Build single blog page
- Individual blog post layout
- Navigation between posts
- Comment section placeholder
- Social sharing buttons
- Related posts section

### 7. Create articles page
- Research work showcase layout
- Professional content display
- Categorization/filtering
- PDF or external link support
- Publication metadata

### 8. Add navigation component
- Responsive header with mobile menu
- Active page highlighting
- Smooth scroll navigation
- Accessibility features

## Phase 3: Enhancement & Polish (Low Priority)

### 9. Implement footer component
- Social media links
- Contact information
- Copyright notice
- Quick navigation links

### 10. Add SEO optimization
- Meta tags for all pages
- Open graph support
- Structured data markup
- Sitemap generation
- Performance optimization

### 11. Create comprehensive documentation
- User guide for template usage
- Keystatic admin instructions
- Customization guide
- Deployment instructions
- Troubleshooting section

## Keystatic Schema Design

### Resume/Portfolio Collection
```typescript
{
  personalInfo: {
    name: string,
    title: string,
    bio: text,
    email: string,
    phone: string,
    location: string,
    avatar: image
  },
  experience: array of {
    company: string,
    position: string,
    duration: string,
    description: text
  },
  education: array of {
    institution: string,
    degree: string,
    duration: string,
    description: text
  },
  skills: array of {
    name: string,
    level: string,
    category: string
  }
}
```

### Blog Posts Collection
```typescript
{
  title: string,
  slug: string,
  content: markdown,
  excerpt: text,
  publishedDate: date,
  tags: array of strings,
  featuredImage: image,
  author: string
}
```

### Articles Collection
```typescript
{
  title: string,
  slug: string,
  content: markdown,
  publishedDate: date,
  category: string,
  externalUrl: string,
  pdfUrl: string,
  coAuthors: array of strings,
  abstract: text
}
```

## Progress Tracking

### Phase 1: Foundation Setup
- [ ] 1. Setup Tailwind CSS and Daisy UI integration
- [ ] 2. Create comprehensive Keystatic schema
- [ ] 3. Design responsive layout components
- [ ] 4. Build index route as resume/portfolio page

### Phase 2: Content Pages
- [ ] 5. Create blog list page
- [ ] 6. Build single blog page
- [ ] 7. Create articles page
- [ ] 8. Add navigation component

### Phase 3: Enhancement & Polish
- [ ] 9. Implement footer component
- [ ] 10. Add SEO optimization
- [ ] 11. Create comprehensive documentation

## Technical Notes

### Dependencies to Install
- `tailwindcss`
- `@tailwindcss/typography`
- `daisyui`
- `@astrojs/tailwind`

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── resume/
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   └── Skills.astro
│   └── blog/
│       ├── BlogList.astro
│       └── BlogCard.astro
├── pages/
│   ├── index.astro (resume/portfolio)
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── articles.astro
├── content/
│   ├── resume/
│   ├── blog/
│   └── articles/
└── styles/
    └── global.css
```

## Success Criteria
- ✅ All content manageable through Keystatic
- ✅ Responsive design on all devices
- ✅ Simple enough for non-technical users
- ✅ Clean, professional design
- ✅ Fast loading performance
- ✅ SEO optimized
- ✅ Comprehensive documentation