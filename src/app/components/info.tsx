'use client';

export default function Info() {
  return (
    <div className="fixed left-16 top-1/2 transform -translate-y-1/2 w-2/5 h-2/3 bg-gray-200 rounded text-black p-16">
      <h2 className="text-xl font-bold">店家名稱</h2>
      <a className="text-blue-700 underline underline-offset-auto" href="#">
        網站連結
      </a>
      <ul className="mt-6">
        <li>是否營業中：</li>
        <li>評分：</li>
        <li>地址：</li>
        <li>電話：</li>
      </ul>
    </div>
  );
}
