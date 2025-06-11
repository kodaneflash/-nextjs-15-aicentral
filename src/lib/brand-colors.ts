/**
 * Brand Colors Utility
 *
 * Reusable color classes for consistent brand styling across the application.
 * These colors are defined in globals.css as CSS custom properties.
 */

export const brandColors = {
    engineer: {
        text: 'text-brand-engineer',
        bg: 'bg-brand-engineer',
        border: 'border-brand-engineer',
        description: 'Light red color used for software engineer references'
    },
    entrepreneur: {
        text: 'text-brand-entrepreneur',
        bg: 'bg-brand-entrepreneur',
        border: 'border-brand-entrepreneur',
        description: 'Light green color used for entrepreneur references'
    }
} as const;

/**
 * Type definitions for brand color variants
 */
export type BrandColorVariant = keyof typeof brandColors;

/**
 * Helper function to get brand color classes
 */
export const getBrandColor = (variant: BrandColorVariant, type: 'text' | 'bg' | 'border' = 'text') => {
    return brandColors[variant][type];
};

/**
 * Usage examples:
 *
 * // Text colors
 * <span className={brandColors.engineer.text}>Software Engineers</span>
 * <span className={brandColors.entrepreneur.text}>Entrepreneurs</span>
 *
 * // Background colors
 * <div className={brandColors.engineer.bg}>Engineer content</div>
 *
 * // Using helper function
 * <span className={getBrandColor('engineer', 'text')}>Engineers</span>
 * <div className={getBrandColor('entrepreneur', 'bg')}>Entrepreneur content</div>
 */
