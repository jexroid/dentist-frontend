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

import InfoIcon from './icon/info';

import { useGraph } from '@/lib/graphRequest';

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
  const graphqlR: any = data;

  useEffect(() => {
    settableLoading(isLoading);
    if (!isLoading && graphqlR?.data?.Reserves) {
      setTableData(graphqlR.data.Reserves);
    }
  }, [isLoading, data]);

  return (
    <div className='overflow-x-auto'>
      {tableLoading ? (
        <div className='flex justify-center items-center'>
          <span className='loading loading-dots loading-lg' />
        </div>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th className='text-black dark:text-white'>ایدی</th>
              <th className='text-black dark:text-white'>شماره</th>
              <th className='text-black dark:text-white'>نام و نام خانوادگی</th>
              <th className='text-black dark:text-white'>سرویس</th>
              <th className='text-black dark:text-white'>تاریخ رزور</th>
              <th className='text-black dark:text-white'>اقدام</th>
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
                  <td>{`${new Intl.DateTimeFormat('fa-IR-u-nu-latn', { dateStyle: 'full', timeStyle: 'medium' }).format(new Date(user.entryDate))}`}</td>
                  <td>
                    <a href={`/admin/${user.reserveId}`}>
                      <InfoIcon />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
