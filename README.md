# Vivek Artline - Custom Portrait Artist Website

A premium Next.js 16.2.9 website for Vivek Artline, a custom portrait artist specializing in hand-drawn pencil portraits for couples, families, pets, and loved ones.

## Features

- **Modern Tech Stack**: Built with Next.js 16.2.9, React 19.2.4, and TypeScript
- **Strict TypeScript Configuration**: Enforced strict mode with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- **SEO Optimized**: Proper metadata, Open Graph tags, JSON-LD structured data, sitemap, and robots.txt
- **Performance Optimized**: Image optimization with `next/image`, lazy loading, Web Vitals monitoring
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Responsive Design**: Mobile-first approach with beautiful animations and transitions
- **Custom Components**: Reusable UI components with proper TypeScript typing
- **Form Handling**: Contact form with validation and success/error states
- **Image Gallery**: Filterable gallery with lightbox functionality
- **Customer Testimonials**: Showcase of client feedback and reactions
- **Service Showcase**: Detailed presentation of portrait services offered
- **About Section**: Personal story, artistic process, and value proposition
- **Footer Navigation**: Comprehensive footer with quick links and social media
- **Error Handling**: Custom error pages (404, 500) and global error boundary
- **Loading States**: Skeleton loaders and page transition animations
- **Environment Validation**: Required environment variables with clear documentation

## Project Structure

```
vivekartline-code/
├── app/
│   ├── layout.tsx              # Root layout with metadata and providers
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── gallery/
│   │   └── page.tsx            # Gallery page with filtering
│   ├── error.tsx               # Global error boundary
│   ├── global-error.tsx        # Next.js error boundary
│   ├── not-found.tsx           # 404 page
│   ├── opengraph-image.tsx     # Dynamic OG image generator
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.ts              # Dynamic sitemap generator
│   └── manifest.ts             # Site metadata and icons
├── components/
│   ├── About.tsx               # About section component
│   ├── Contact.tsx             # Contact form component
│   ├── CustomerReactions.tsx   # Customer testimonials grid
│   ├── Emotion.tsx             # Emotion/gift occasions section
│   ├── FeaturedArtworks.tsx    # Featured artwork grid
│   ├── Footer.tsx              # Footer with mobile accordion
│   ├── Gallery.tsx             # Gallery with filtering and lightbox
│   ├── Hero.tsx                # Hero section with polaroid stack
│   ├── Instagram.tsx           # Instagram feed imitation
│   ├── Lightbox.tsx            # Image lightbox component
│   ├── Navigation.tsx          # Navigation with hamburger menu
│   ├── Services.tsx            # Services section with cards
│   ├── Testimonials.tsx        # Testimonials section
│   ├── Toast.tsx               # Toast notification system
│   ├── WebVitals.tsx           # Web vitals monitoring
│   └── common/
│       ├── Button.tsx          # Reusable button with variants
│       ├── Container.tsx       # Responsive container
│       ├── InstagramButton.tsx # Floating Instagram button
│       ├── Loading.tsx         # Page loading spinner
│       ├── PageLoader.tsx      # Page transition loader
│       ├── SectionHeader.tsx   # Section heading component
│       └── ImagePlaceholder.tsx# Shimmer placeholder with watermark
├── data/
│   ├── aboutData.ts            # About page content
│   ├── contactData.ts          # Contact information
│   ├── customerReactionsData.ts# Testimonials data
│   ├── emotionData.ts          # Emotion/occasion data
│   ├── featuredArtworksData.ts # Featured artwork data
│   ├── servicesData.ts         # Services offered data
│   └── testimonialsData.ts     # Client testimonials data
├── lib/
│   ├── constants.ts            # Site constants and configuration
│   ├── useScrollReveal.ts      # Custom hook for scroll animations
│   ├── useLightbox.ts          # Custom hook for lightbox functionality
│   ├── useToast.ts             # Custom hook for toast notifications
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # Centralized TypeScript type definitions
├── public/
│   ├── favicon.ico             # Site favicon
│   ├── favicon-32x32.png       # 32x32 favicon
│   ├── favicon-16x16.png       # 16x16 favicon
│   ├── apple-touch-icon.png    # Apple touch icon
│   └── images/                 # Optimized image assets
├── styles/
│   ├── globals.css             # Global CSS styles
│   └── Home.module.css         # Home page specific styles
├── .env.example               # Environment variables template
├── .eslintrc.mjs              # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher (or yarn/pnpm)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vivekartline-code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` to fill in your actual values:
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Your Google Maps API key
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: Your Mapbox access token
   - `NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN`: Your Instagram access token (for API features)
   - Optional: Database, Stripe, and Analytics keys for production features

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

### Environment Variables

See `.env.example` for all required and optional environment variables. The following are required for core functionality:

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - For maps integration
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` - For alternative mapping options
- `NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN` - For Instagram feed features

Additional production variables (optional):
- Database connection strings
- Stripe API keys for payments
- Google Analytics measurement ID

## Development Guidelines

### Code Organization

This project follows a specific file processing order to ensure proper dependencies:
1. **types/** - Centralized TypeScript interfaces and types
2. **lib/** - Utilities, constants, and custom hooks
3. **components/common/** - Shared, reusable components
4. **components/** - Page-specific and complex components
5. **app/** - Next.js pages and route handlers

### TypeScript Rules

- `strict`: true - Enable all strict type-checking options
- `noUncheckedIndexedAccess`: true - Add `undefined` to index signatures
- `exactOptionalPropertyTypes`: true - Enable strict optional property handling
- `noEmit`: true - During development (Next.js handles compilation)
- Path aliases: `@/*` maps to `/*` for clean imports

### Component Guidelines

1. **Props Typing**: All components must have explicitly typed props
2. **Image Optimization**: Use `next/image` for all images with fallback to `ImagePlaceholder`
3. **Accessibility**: Include proper ARIA labels, roles, and keyboard navigation
4. **Error Handling**: Use try/catch in async operations, provide user feedback
5. **Loading States**: Show skeletons or spinners during data fetching
6. **SEO**: Use semantic HTML, proper heading hierarchy, and descriptive alt text

### Styling

- Uses CSS Modules for component-scoped styles
- Global styles in `styles/globals.css`
- Design tokens (colors, spacing, typography) in CSS variables
- Responsive design with mobile-first breakpoints
- Smooth transitions and animations using CSS

### Performance Optimizations

1. **Image Optimization**:
   - Automatic format selection (AVIF/WebP with fallback)
   - Responsive images with appropriate sizes
   - Priority loading for above-the-fold images
   - Placeholder blur-up effect

2. **Code Splitting**:
   - Dynamic imports for non-critical components
   - Route-based code splitting (Next.js automatic)
   - Client component boundaries with `"use client"` directive

3. **Lazy Loading**:
   - Images load as they enter viewport
   - Non-critical components load on interaction
   - Third-party scripts load asynchronously

4. **Caching**:
   - Static assets cached with aggressive TTL
   - SWR (stale-while-revalidate) for data fetching
   - Service worker considerations for PWA features

## Key Features Explained

### SEO Implementation

- **Metadata**: Dynamic titles and descriptions based on page content
- **Open Graph**: Generated images for social sharing (`opengraph-image.tsx`)
- **Structured Data**: JSON-LD for LocalBusiness, Person, and CreativeWork
- **Sitemap**: Auto-generated `sitemap.xml` with all routes
- **Robots.txt**: Configured for search engine crawlers
- **Canonical URLs**: Properly set to avoid duplicate content

### Image Handling

All images use Next.js Image component with:
- Custom loader for optimization
- Blurred placeholders (`ImagePlaceholder` component)
- Proper sizing for different device breakpoints
- WebP/AVIF format support with fallback
- Responsive width attributes

### Custom Hooks

- `useScrollReveal`: IntersectionObserver-based animations
- `useLightbox`: Gallery lightbox with keyboard navigation
- `useToast`: Toast notification system with auto-dismiss
- Utility functions for formatting, validation, and helpers

### Error Boundaries

- `error.tsx`: Route-level error boundaries
- `global-error.tsx`: Application-wide error boundary
- Graceful degradation with user-friendly messages
- Development mode shows detailed error information

### Accessibility Features

- Semantic HTML elements (header, nav, main, section, footer)
- ARIA labels and roles for interactive elements
- Keyboard navigable menus and dialogs
- Focus management in modals and menus
- Sufficient color contrast (WCAG AA compliant)
- Skip navigation links
- Descriptive alt text for all meaningful images

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Configure environment variables in Vercel settings
4. Deploy!

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional Node.js servers

## Testing

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Android

### Performance Testing
- Lighthouse scores > 90 for Performance, Accessibility, Best Practices, SEO
- Web Vitals monitoring via `WebVitals` component
- Bundle analysis with `next-bundle-analyzer`

## Maintenance

### Updating Dependencies
```bash
npm update
npm audit fix
```

### Adding New Content
1. Update appropriate data file in `/data/`
2. Create/update component in `/components/` if needed
3. Add page in `/app/` if creating new route
4. Ensure proper TypeScript types in `/types/`
5. Add any new images to `/public/images/`

### Image Optimization Guidelines
- Source images should be high quality (minimum 1200px width)
- Use descriptive filenames
- Import and optimize through Next.js Image component
- Provide alternative text for accessibility
- Consider WebP/AVIF sources for best compression

## Troubleshooting

### Common Issues

1. **Image Loading Problems**:
   - Verify image URLs are correct
   - Check that external domains are allowed in `next.config.ts`
   - Ensure images are properly optimized

2. **Environment Variables Not Loading**:
   - Confirm `.env` file is in root directory
   - Check variable names match exactly
   - Restart development server after changes

3. **TypeScript Errors**:
   - Run `npm run type-check` for detailed output
   - Ensure all props are properly typed
   - Check for missing imports in type definitions
   - Verify data files have the correct in data files

4. **Build Failures**:
   - Check console for specific error messages
   - Verify all dependencies are installed
   - Look for syntax errors in newly added files
   - Ensure pages directory structure is correct

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards

- Follow existing code style and patterns
- Write descriptive commit messages
- Add JSDoc comments for complex functions
- Keep components focused and reusable
- Test changes across multiple browsers
- Update documentation when adding features

## License

This project is proprietary and confidential. All rights reserved.

## Contact

Vivek Artline
- Website: https://www.vivekartline.com
- Email: contact@vivekartline.com
- Phone: +91XXXXXXXXXX
- Instagram: @vivekartline

## Acknowledgments

- Next.js team for the excellent framework
- React team for the UI library
- Various open-source packages used in this project
- Clients who have trusted Vivek Artline with their precious memories