import type { NextApiRequest, NextApiResponse } from 'next';
import gridData from '../mock/fakeGridData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  let filteredData = gridData;

  if (Object.keys(query).length) {
    filteredData = gridData.filter((item: any) => {
      let result = false;
      Object.entries(query).forEach(([key, value]) => {
        if (value) {
          if (item[key] === value) result = true;
        }
      });
      return result;
    });
  }

  res.status(200).json(filteredData);
}
