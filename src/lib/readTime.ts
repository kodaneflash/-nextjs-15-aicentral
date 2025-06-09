import { PortableTextBlock } from 'sanity'

// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200

export function calculateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / WORDS_PER_MINUTE)
  return minutes
}

export function formatReadTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read'
  }
  return `${minutes} min read`
}

// Convert Portable Text to plain text for read time calculation
export function portableTextToPlainText(blocks: PortableTextBlock[]): string {
  if (!blocks) return ''
  
  return blocks
    .map(block => {
      // Handle non-text blocks
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // Extract text from all children
      return (block.children as any[]).map((child: any) => child.text || '').join('')
    })
    .join('\n')
}

// Calculate read time from Portable Text blocks
export function calculateReadTimeFromPortableText(blocks: PortableTextBlock[]): number {
  const plainText = portableTextToPlainText(blocks)
  return calculateReadTime(plainText)
} 