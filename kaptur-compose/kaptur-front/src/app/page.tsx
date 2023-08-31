'use client';
import { Inter } from 'next/font/google'
import listBucket from '@/lib/listBucket';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    listBucket('kaptur').then((data) => {
      setUrls(data || []);
    });
  }, [])

  return (
    <main>
      {urls.map(data => data.path.match('emptyFolderPlaceholder') ? <></> :  (
        <div key={data.path} className="shot" style={{ height: '75vh', display: 'inline-block' }} >
          <img src={data.signedUrl} alt={data.path} style={{ height: '100%' }}/>
          <p>{data.path}</p>
        </div>
      ))}
    </main>
  )
}
