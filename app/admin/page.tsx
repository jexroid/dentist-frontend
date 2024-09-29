'use client';

import { Card, CardBody } from '@nextui-org/react';

import Jadval from '@/components/table';
export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-1 md:py-5'>
      <Card className='w-full'>
        <CardBody className='w-full'>
          <Jadval />
        </CardBody>
      </Card>
      <Card className='w-full py-4'>
        <CardBody className='grid md:grid-cols-4 md:grid-rows-1 gap-4 grid-cols-2 grid-rows-2'>
          <div className='flex justify-center items-center w-full shadow-sm shadow-black py-4 px-2 rounded-md'>
            <div className='w-full'>
              <p className='flex justify-end items-center'>تعداد دکترها</p>
              <h3 className='flex justify-center items-center'>10</h3>
            </div>
          </div>
          <div className='flex justify-end items-center w-full shadow-sm shadow-black py-4 px-2 rounded-md'>2</div>
          <div className='flex justify-end items-center w-full shadow-sm shadow-black py-4 px-2 rounded-md'>3</div>
          <div className='flex justify-end items-center w-full shadow-sm shadow-black py-4 px-2 rounded-md'>4</div>
        </CardBody>
      </Card>
    </section>
  );
}
