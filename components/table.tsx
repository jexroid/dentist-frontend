const users = [
  {
    reserveId: '',
    entryDate: '',
    Service: [
      {
        serviceId: '',
        profession: '',
      },
    ],
    Patient: {
      firstname: '',
      lastname: '',
      phone: 0,
    },
  },
];

import React, { useEffect, useState } from 'react';
import jalaali from 'jalaali-js';

import { useGraph } from '@/lib/graphRequest';
import InfoIcon from './icon/info';

const GET_SERVICE = `
  query Reserves {
    Reserves {
        reserveId
        entryDate
        Service {
            serviceId
            profession
        }
        Patient {
            firstname
            lastname
            phone
        }
    }
}
`;

interface ReserveQuery {
  reserveId: string;
  entryDate: string;
  Service: { serviceId: string; profession: string }[];
  Patient: { firstname: string; lastname: string; phone: number };
}
[];

export default function App() {
  const [tableLoading, settableLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  const raw = JSON.stringify({
    query: GET_SERVICE,
    operationName: 'Reserves',
  });
  const { isLoading, data } = useGraph(raw);

  useEffect(() => {
    settableLoading(isLoading);
    if (!isLoading && data?.data?.Reserves) {
      setTableData(data.data.Reserves);
    }
  }, [isLoading, data]);

  return (
    <div className='overflow-x-auto'>
      {tableLoading ? (
        <span className='loading loading-dots loading-lg'></span>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th className='text-black dark:text-white'>
                <p>ایدی</p>
              </th>
              <th className='text-black dark:text-white'>
                <p>شماره</p>
              </th>
              <th className='text-black dark:text-white'>
                <p>نام و نام خانوادگی</p>
              </th>
              <th className='text-black dark:text-white'>
                <p>سرویس</p>
              </th>
              <th className='text-black dark:text-white'>
                <p>تاریخ رزور</p>
              </th>
              <th className='text-black dark:text-white'>
                <p>اقدام</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((user: ReserveQuery) => (
                <tr key={user.reserveId}>
                  <td>{user.reserveId}</td>
                  <td>
                    <a href={`tel:${user.Patient.phone.toString()}`}>{user.Patient.phone.toString()}</a>
                  </td>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div>
                        <div className='font-bold'>
                          {user.Patient.firstname} {user.Patient.lastname}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.Service[0].profession}</td>
                  <td>{`${new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(user.entryDate))}`}</td>
                  <td>
                    <a href={`/${user.reserveId}`}>
                      <InfoIcon />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4'>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
