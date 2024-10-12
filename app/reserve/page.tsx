'use client';

import '@mantine/dates/styles.css';
import '@/styles/globals.css';

import 'dayjs/locale/fa';

import { DateInput, MonthPickerInput } from '@mantine/dates';
import { DatesProvider } from '@mantine/dates';

function ReservePage() {
  return (
    <section className='container mt-8 w-full'>
      <DatesProvider settings={{ locale: 'fa', timezone: 'UTC', firstDayOfWeek: 6, weekendDays: [4, 5] }}>
        <MonthPickerInput label='Pick month' placeholder='Pick month' />
        <DateInput label='Date input' placeholder='Date input' />
      </DatesProvider>
    </section>
  );
}

export default ReservePage;
