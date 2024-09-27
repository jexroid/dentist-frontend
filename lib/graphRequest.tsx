import useFetch from 'react-fetch-hook';

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

export function useGraph(body: any) {
  return useFetch('http://localhost:4500/graphql', {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow',
  });
}
