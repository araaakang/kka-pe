'use client';

import { PlaceInfoType } from '@/app/types/map';

export default function InfoCard({ info }: { info: PlaceInfoType }) {
  return (
    <div className="fixed left-16 top-1/2 transform -translate-y-1/2 w-2/5 h-2/3 bg-gray-200 rounded text-black p-16">
      {JSON.stringify(info) === '{}' ? (
        <>請點擊咖啡廳以取得地點資訊</>
      ) : (
        <>
          <h2 className="text-xl font-bold">{info.name}</h2>
          <a
            className="text-blue-700 underline underline-offset-auto"
            href={info.website}
            target="_blank"
          >
            🔗 Link
          </a>
          <ul className="mt-6">
            {info.open_now ? <li>營業中</li> : <li>休息中</li>}
            <li>評分：{info.rating}</li>
            <li>地址：{info.formatted_address}</li>
            <li>電話：{info.formatted_phone_number}</li>
          </ul>
        </>
      )}
    </div>
  );
}
