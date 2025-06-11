# CourseCards Component

A highly customizable and accessible React component for displaying course cards with video backgrounds, built with TypeScript, Tailwind CSS v4, and following Next.js 15 best practices.

## Features

- 🎯 **Fully Responsive**: Mobile-first design that adapts beautifully across all screen sizes
- 🎨 **Modern Dark Theme**: Stylish dark UI with gradient overlays and smooth animations
- ♿ **Accessibility First**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- 🔧 **Highly Customizable**: Accept props for content, styling, and behavior customization
- 📱 **Touch Optimized**: Works seamlessly on mobile devices with proper touch interactions
- 🎥 **Video Integration**: Supports autoplay videos with elegant gradient overlays
- ⚡ **Performance Optimized**: Lightweight and optimized for Core Web Vitals

## Installation

The component uses `lucide-react` for icons, which is already included in this project.

## Basic Usage

```tsx
import { type CourseCard, CourseCards } from '@/components/CourseCards';

const courses: CourseCard[] = [
    {
        id: 'course-1',
        title: 'AI coding<br />Beyond basics',
        description: 'The ultimate Vibe Coding Guideline<br />to bring ideas to production',
        buttonText: 'Enroll now',
        videoUrl: 'https://example.com/video1.mp4',
        buttonHref: '/enroll/course-1'
    },
    {
        id: 'course-2',
        title: 'Build<br />Production<br />Agent',
        description: 'No framework, just build from scratch',
        buttonText: 'Get Started',
        videoUrl: 'https://example.com/video2.mp4',
        onButtonClick: () => console.log('Custom handler')
    }
];

export default function CoursePage() {
    return <CourseCards courses={courses} />;
}
```

## Props

### CourseCardsProps

| Prop        | Type           | Default  | Description                              |
| ----------- | -------------- | -------- | ---------------------------------------- |
| `courses`   | `CourseCard[]` | Required | Array of course data objects             |
| `className` | `string`       | `''`     | Additional CSS classes for the container |

### CourseCard

| Property        | Type         | Required | Description                                       |
| --------------- | ------------ | -------- | ------------------------------------------------- |
| `id`            | `string`     | Yes      | Unique identifier for the course                  |
| `title`         | `string`     | Yes      | Course title (supports HTML for line breaks)      |
| `description`   | `string`     | Yes      | Course description (supports HTML)                |
| `buttonText`    | `string`     | Yes      | Text for the call-to-action button                |
| `videoUrl`      | `string`     | Yes      | URL to the background video                       |
| `buttonHref`    | `string`     | No       | URL to navigate when button is clicked            |
| `onButtonClick` | `() => void` | No       | Custom click handler (takes precedence over href) |

## Advanced Usage

### With Custom Click Handlers

```tsx
const handleEnrollment = () => {
    // Custom enrollment logic
    analytics.track('course_enrollment_started');
    router.push('/checkout');
};

const courses: CourseCard[] = [
    {
        id: 'premium-course',
        title: 'Premium Course',
        description: 'Advanced training materials',
        buttonText: 'Enroll Now',
        videoUrl: '/videos/premium.mp4',
        onButtonClick: handleEnrollment
    }
];
```

### With Custom Styling

```tsx
<CourseCards courses={courses} className='my-custom-spacing bg-gradient-to-b from-gray-900 to-black' />
```

### Individual Course Card

You can also use individual course cards:

```tsx
import { type CourseCard, CourseCardItem } from '@/components/CourseCards';

const singleCourse: CourseCard = {
    id: 'single',
    title: 'Single Course',
    description: 'Individual course card',
    buttonText: 'Learn More',
    videoUrl: '/video.mp4',
    buttonHref: '/course/single'
};

<CourseCardItem course={singleCourse} />;
```

## Styling Customization

The component uses Tailwind CSS classes and can be customized in several ways:

### Theme Colors

- Background: `bg-neutral-900` with `border-gray-800`
- Text: `text-white` with `text-white/70` for descriptions
- Button: `bg-white` with `text-black`

### Responsive Breakpoints

- Mobile: Single column layout
- Large screens (`lg`): Two-column grid layout
- Content padding adjusts from `p-8` to `md:p-12`

### Custom CSS Variables

You can override colors using CSS variables:

```css
.custom-course-cards {
    --course-bg: theme('colors.slate.800');
    --course-border: theme('colors.slate.700');
    --course-text: theme('colors.gray.100');
}
```

## Accessibility Features

- **Semantic HTML**: Uses proper heading hierarchy and semantic elements
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Keyboard Navigation**: Full keyboard support with visible focus states
- **Focus Management**: Proper focus indicators and tab order
- **Video Accessibility**: Proper video labeling and fallbacks
- **Screen Reader Support**: Content is properly announced

## Performance Considerations

- **Video Optimization**: Videos are set to `autoPlay`, `loop`, and `muted` for optimal performance
- **Lazy Loading**: Consider adding `loading="lazy"` for videos below the fold
- **Image Fallbacks**: Videos include fallback content for unsupported browsers
- **Responsive Images**: Use appropriate video formats and sizes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Video format support depends on browser capabilities

## TypeScript Support

Full TypeScript support with exported interfaces:

```tsx
import type { CourseCard, CourseCardsProps } from '@/components/CourseCards';
```

## Examples

Check `src/components/examples/CourseCardsDemo.tsx` for complete usage examples.

## Contributing

When contributing to this component:

1. Maintain TypeScript strict mode compliance
2. Follow accessibility best practices
3. Test across different screen sizes
4. Ensure video performance remains optimal
5. Add appropriate ARIA labels for new features
