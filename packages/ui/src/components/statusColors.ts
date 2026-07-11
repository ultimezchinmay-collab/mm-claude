import type { darkColors, lightColors } from '../tokens';

export type TagStatus = 'neutral' | 'info' | 'success' | 'warning' | 'error';

const STATUS_FAMILY = {
  neutral: 'neutral',
  info: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

/** Shared by Badge and Label — both are the same "Tags" pattern in Figma, just soft vs solid emphasis. */
export function getStatusFamily(status: TagStatus, colors: typeof lightColors | typeof darkColors) {
  return colors[STATUS_FAMILY[status]];
}
