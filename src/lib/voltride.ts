import kinglong from '@/assets/kinglong.png.asset.json';
import yutong from '@/assets/yutong-logo.jpg.asset.json';
import zhongtong from '@/assets/zhongtong.png.asset.json';
export const manufacturers = [
 { slug:'king-long', name:'King Long', logo:kinglong.url, description:'Explore intercity coach options from King Long, with fleet suitability assessed against your operational requirements.' },
 { slug:'yutong', name:'Yutong', logo:yutong.url, description:'Consider Yutong coach options as part of a coordinated review of vehicles, batteries and route requirements.' },
 { slug:'zhongtong', name:'Zhongtong', logo:zhongtong.url, description:'Discuss Zhongtong coach options and evaluate the right configuration for your intercity operations.' },
];
export function pageHead(title:string, description:string) { return { meta:[{title:`${title} | VoltRide Mobility`},{name:'description',content:description},{property:'og:title',content:`${title} | VoltRide Mobility`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }; }
