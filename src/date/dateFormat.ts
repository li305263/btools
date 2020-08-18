/**
 * @description: 日期格式化
 */
export default function dateFormat(date: any, format: string = 'YYYY-MM-DD'): string {
  if (!date) date = '';

  const $date = new Date(date),
    year = $date.getFullYear(),
    month = $date.getMonth() + 1,
    day = $date.getDate(),
    hours = $date.getHours(),
    min = $date.getMinutes(),
    s = $date.getSeconds();

  return format.replace(/^YYYY|YY|MM|M|DD|D|HH|H|hh|h|a|A|mm|m|ss|s$/g, match => {
    switch (match) {
      case 'YY':
        return String(year).slice(-2);
      case 'YYYY':
        return String(year);
      case 'M':
        return String(month);
      case 'MM':
        return String(month).padStart(2, '0');
      case 'D':
        return String(day);
      case 'DD':
        return String(day).padStart(2, '0');
      case 'H':
        return String(hours);
      case 'HH':
        return String(hours).padStart(2, '0');
      case 'h':
      case 'hh':
        if (hours === 0) return '12';
        return String(hours < 13 ? hours : hours - 12).padStart(match === 'hh' ? 2 : 1, '0');
      case 'a':
        return hours < 12 ? 'am' : 'pm';
      case 'A':
        return hours < 12 ? 'AM' : 'PM';
      case 'm':
        return String(min);
      case 'mm':
        return String(min).padStart(2, '0');
      case 's':
        return String(s);
      case 'ss':
        return String(s).padStart(2, '0');
      default:
        return '';
    }
  });
}
