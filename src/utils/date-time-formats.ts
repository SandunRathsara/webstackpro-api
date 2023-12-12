import { DateTime } from 'luxon';

export function formatDateTime(date: Date): string {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_SHORT);
}
