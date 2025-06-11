# Pricing Component

A modern, responsive pricing component built with TypeScript, React 19, and Tailwind CSS v4. This component provides a clean and customizable way to display pricing plans with features, badges, and call-to-action buttons.

## Features

- ✨ **Fully Customizable**: Configure plans, features, pricing, and styling via props
- 🎨 **Modern Design**: Dark theme support with gradient effects and shadows
- 📱 **Responsive**: Mobile-first design that works on all screen sizes
- ♿ **Accessible**: Semantic HTML with proper ARIA attributes
- 🔥 **Premium Effects**: Gradient blur effects for popular plans
- 🎯 **TypeScript**: Full type safety with comprehensive interfaces
- 🚀 **Performance**: Optimized React Server Component support
- 🎭 **Flexible**: Support for both button clicks and navigation

## Installation

The component uses the following dependencies that should already be available in your Next.js 15 project:

```bash
# Required peer dependencies
npm install lucide-react @radix-ui/react-slot class-variance-authority
```

## Usage

### Basic Usage

```tsx
import { Pricing } from '@/components/pricing';
import type { PricingPlan } from '@/components/pricing';

const plans: PricingPlan[] = [
    {
        name: 'Basic',
        price: 9,
        currency: '$',
        period: 'month',
        trialText: '7-day free trial',
        features: [
            { text: 'Up to 5 projects', included: true },
            { text: 'Basic support', included: true },
            { text: 'Advanced features', included: false }
        ],
        buttonText: 'Get Started',
        onButtonClick: () => console.log('Basic plan selected'),
        isPopular: false,
        buttonVariant: 'default'
    },
    {
        name: 'Pro',
        price: 29,
        currency: '$',
        period: 'month',
        trialText: '14-day free trial',
        features: [
            { text: 'Unlimited projects', included: true },
            { text: 'Priority support', included: true },
            { text: 'Advanced features', included: true }
        ],
        buttonText: 'Go Pro',
        buttonHref: '/checkout?plan=pro',
        isPopular: true,
        buttonVariant: 'premium'
    }
];

export default function PricingPage() {
    return <Pricing plans={plans} title='Choose Your Plan' subtitle='Select the perfect plan for your needs' />;
}
```

### Advanced Customization

```tsx
<Pricing
    plans={plans}
    title='Flexible Pricing'
    subtitle='Pay only for what you use'
    className='my-8'
    centeredLayout={false}
/>
```

## Component Props

### PricingProps

| Prop             | Type            | Default                        | Description                       |
| ---------------- | --------------- | ------------------------------ | --------------------------------- |
| `plans`          | `PricingPlan[]` | **Required**                   | Array of pricing plans to display |
| `title`          | `string`        | `"Pricing"`                    | Main heading text                 |
| `subtitle`       | `string`        | `"Choose the perfect plan..."` | Subtitle text                     |
| `className`      | `string`        | `""`                           | Additional CSS classes            |
| `centeredLayout` | `boolean`       | `true`                         | Whether to center the header text |

### PricingPlan

| Prop            | Type                     | Default      | Description                      |
| --------------- | ------------------------ | ------------ | -------------------------------- |
| `name`          | `string`                 | **Required** | Plan name (e.g., "Basic", "Pro") |
| `price`         | `number`                 | **Required** | Plan price (numeric value)       |
| `currency`      | `string`                 | `"$"`        | Currency symbol                  |
| `period`        | `string`                 | `"month"`    | Billing period                   |
| `trialText`     | `string`                 | `undefined`  | Trial period text                |
| `features`      | `PricingFeature[]`       | **Required** | Array of plan features           |
| `buttonText`    | `string`                 | **Required** | CTA button text                  |
| `buttonHref`    | `string`                 | `undefined`  | Navigation URL for button        |
| `onButtonClick` | `() => void`             | `undefined`  | Click handler function           |
| `isPopular`     | `boolean`                | `false`      | Show "Most Popular" badge        |
| `buttonVariant` | `'default' \| 'premium'` | `'default'`  | Button styling variant           |

### PricingFeature

| Prop       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `text`     | `string`  | Feature description                 |
| `included` | `boolean` | Whether feature is included in plan |

## Styling

The component uses Tailwind CSS with semantic color tokens for theming:

- `bg-background/20` - Card backgrounds
- `text-foreground` - Primary text
- `text-foreground/80` - Secondary text
- `text-primary` - Accent color (checkmarks, buttons)
- `bg-muted` - Popular badge background

### Custom Shadow Classes

The component expects these shadow utility classes to be available:

```css
.shadow-elevation-light {
    /* Light theme shadows */
}
.shadow-elevation-dark {
    /* Dark theme shadows */
}
.shadow-elevation-dark-three {
    /* Enhanced dark shadows */
}
```

## Premium Features

### Gradient Blur Effect

Popular plans with `buttonVariant: "premium"` automatically get a stunning conic gradient blur effect behind their CTA button:

```tsx
{
  name: "Premium",
  isPopular: true,
  buttonVariant: "premium", // Enables gradient blur
  // ... other props
}
```

### Popular Badge

Plans marked with `isPopular: true` display a "Most Popular" badge with a sparkles icon.

## Accessibility

The component includes:

- Semantic HTML structure (`ul`, `li` for features)
- Proper heading hierarchy (`h2` for plan names)
- ARIA-friendly icons from Lucide React
- Keyboard navigation support
- Screen reader compatible content

## Examples

See `src/components/examples/pricing-demo.tsx` for comprehensive usage examples including:

- Original design recreation
- 3-tier pricing layout
- Custom titles and layouts
- Different button configurations

## Dependencies

- `react` - React 19+
- `lucide-react` - Icons
- `@radix-ui/react-slot` - Polymorphic components
- `class-variance-authority` - Button variants
- Custom utilities: `@/lib/utils` (cn function)
- UI components: `@/components/ui/button`, `@/components/ui/gradient-heading`

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## License

This component is part of your Next.js project and follows your project's license.
