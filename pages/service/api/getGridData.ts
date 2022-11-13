import axios from 'axios';

const getGridData = async ({ queryKey }: any) => {
  const [_, params] = queryKey;
  console.log('parapm', params);

  const paramString = Object.entries(params).reduce((prev, cur) => {
    const [key, value] = cur;
    let result = value ? prev + `&${key}=${value}` : prev;
    return result;
  }, '?');
  const { data } = await axios.get(`/api/gridData${paramString === '?' ? '' : paramString}`);
  return data;
};

export default getGridData;
