import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree, Info, Train, User, Sun, Moon } from 'lucide-react';

export const itineraryData = [
    {
        day: 1,
        date: '5/1 (週四)',
        title: 'TRX 探索與亞羅街美食',
        summary: '抵達吉隆坡，探索最新的 TRX 商場並享受道地街頭美食。',
        activities: [
            {
                time: '14:30',
                title: '金普頓納魯利亞 Check-in',
                desc: '入住 Kimpton Naluria，享受精品飯店氛圍。',
                icon: Hotel,
                type: 'stay'
            },
            {
                time: '15:30',
                title: 'The Exchange TRX 逛街',
                desc: '全馬首間 Apple Store (圓頂光影極佳) & Seibu 西武百貨。',
                icon: ShoppingBag,
                type: 'shopping',
                camera: {
                    mode: 'C1 (Airy Blue)',
                    desc: 'Apple Store 圓頂',
                    settings: '廣角拍攝建築線條'
                }
            },
            {
                time: '16:30',
                title: 'TRX City Park (商場頂樓)',
                desc: '親子時間：戲水區與遊樂場。拍攝夕陽下的 106 交易塔天際線。',
                icon: Palmtree,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C2 (Teal & Orange)',
                    desc: '夕陽天際線',
                    settings: '逆光拍攝剪影'
                }
            },
            {
                time: '18:30',
                title: '亞羅街 (Jalan Alor) - 黃亞華小食店',
                desc: '必點燒雞翼與沙爹。吉隆坡最道地的熱鬧風味。',
                icon: Utensils,
                type: 'dining'
            }
        ],
        notes: []
    },
    {
        day: 2,
        date: '5/2 (週五)',
        title: '百貨美學與水族館探險',
        summary: '早午餐享受與市中心百貨巡禮，下午前往孩子最愛的水族館。',
        activities: [
            {
                time: '09:30',
                title: 'Grumpy Bagels (Imbi)',
                desc: '鮮黃色百年老宅貝果店，室內採光極美。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C4 (Astia)',
                    desc: '老宅鮮黃外觀',
                    settings: '鮮豔色彩模式'
                }
            },
            {
                time: '11:00',
                title: '阿喜肉骨茶 (Ah Hei Bak Kut Teh)',
                desc: '米其林必比登推薦，湯頭甘甜肉質軟嫩，適合小孩。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '13:00',
                title: '升禧廣場 (The Starhill) / 誠品生活',
                desc: '欣賞木質階梯與拱門設計的建築美學。',
                icon: ShoppingBag,
                type: 'shopping',
                camera: {
                    mode: 'C3 (Nostalgic)',
                    desc: '誠品書店光影',
                    settings: '低對比懷舊感'
                }
            },
            {
                time: '15:00',
                title: '柏威年廣場 (Pavilion KL)',
                desc: '拍攝門口大噴泉，快閃逛街。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '16:00',
                title: '前往 KLCC',
                desc: '步行冷氣天橋，舒適散步 15 分鐘。',
                icon: User,
                type: 'transit'
            },
            {
                time: '16:30',
                title: 'Aquaria KLCC (水族館)',
                desc: '海底隧道看鯊魚，4 歲小孩的最愛。',
                icon: Star,
                type: 'activity',
                highlight: true
            },
            {
                time: '19:00',
                title: "Madam Kwan's (Suria KLCC)",
                desc: '吉隆坡必吃椰漿飯 (Nasi Lemak) 與三色飯。',
                icon: Utensils,
                type: 'dining'
            }
        ],
        notes: [
            {
                icon: Info,
                text: '避暑提醒：利用冷氣天橋移動，舒適度加分。'
            }
        ]
    },
    {
        day: 3,
        date: '5/3 (週六)',
        title: '奢華咖啡、老城區與生命之河',
        summary: '從摩洛哥咖啡廳到懷舊鬼仔巷，夜晚享受河畔與精緻馬來料理。',
        activities: [
            {
                time: '10:00',
                title: 'Bacha Coffee (TRX)',
                desc: '全馬最華麗摩洛哥式咖啡廳，金碧輝煌的攝影熱點。',
                icon: Coffee,
                type: 'dining',
                camera: {
                    mode: 'C3 (Nostalgic)',
                    desc: '金碧輝煌室內',
                    settings: '暖色調氛圍'
                }
            },
            {
                time: '11:30',
                title: '鬼仔巷 / 茨廠街',
                desc: '拍攝懷舊壁畫與南洋老宅。',
                icon: Camera,
                type: 'activity',
                camera: {
                    mode: 'C3 (Classic Neg)',
                    desc: '斑駁牆面與壁畫',
                    settings: '高對比街頭感'
                }
            },
            {
                time: '13:30',
                title: '麗豐喇喇米粉',
                desc: '老牌名店，鮮甜海鮮湯頭。',
                icon: Utensils,
                type: 'dining'
            },
            {
                time: '15:30',
                title: 'LaLaport BBCC',
                desc: '日系極簡百貨，頂樓花園適合拍照，育兒設施完善。',
                icon: ShoppingBag,
                type: 'shopping'
            },
            {
                time: '18:30',
                title: '生命之河 (River of Life)',
                desc: '藍色水霧與燈光下的歷史建築。',
                icon: MapPin,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: 'C2 (Teal & Orange)',
                    desc: '藍色水霧與建築',
                    settings: '建議使用廣角鏡頭'
                }
            },
            {
                time: '19:30',
                title: 'Manja (Old Malaya)',
                desc: '摩登殖民風格餐廳，精緻現代馬來料理。',
                icon: Utensils,
                type: 'dining',
                highlight: true,
                camera: {
                    mode: 'C4 (Astia)',
                    desc: '殖民老房光影',
                    settings: '建議使用大光圈定焦鏡'
                }
            }
        ],
        notes: [
            {
                icon: Info,
                text: 'Manja 餐廳強烈建議提前網路訂位。'
            }
        ]
    },
    {
        day: 4,
        date: '5/4 (週日)',
        title: '飯店早餐與返程',
        summary: '悠閒早餐後直奔機場，帶著美好回憶返家。',
        activities: [
            {
                time: '09:00',
                title: '飯店早餐',
                desc: '在 Kimpton 內享用悠閒早餐。',
                icon: Coffee,
                type: 'dining'
            },
            {
                time: '10:30',
                title: 'Check-out 前往機場',
                desc: '大廳搭乘 Grab 直達 KLIA。',
                icon: Hotel,
                type: 'transit'
            },
            {
                time: '13:05',
                title: '搭機 TG416',
                desc: '返回溫暖的家。',
                icon: Plane,
                type: 'transit'
            }
        ],
        notes: []
    }
];
