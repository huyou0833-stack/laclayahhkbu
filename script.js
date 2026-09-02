const historyData = [
    {
        id: "tongva",
        era: "pre1950",
        year_en: "Prehistoric Era",
        year_zh: "史前時期",
        birthYear: 1000,
        demiseYear: 1800,
        title_en: "Yaanga Village & Indigenous Traditions",
        title_zh: "Yaanga 聚落與原住民雙靈傳統",
        landmark_en: "Downtown LA",
        landmark_zh: "洛杉磯市中心",
        coords: [34.0537, -118.2427],
        color: "#e07a7a",
        icon: "fa-campground",
        summary_en: "One of the largest pre-colonial Tongva villages near present-day LA City Hall, embodying indigenous Two-Spirit heritage.",
        summary_zh: "通瓦族建城前最大的村莊之一，舊址位於今日洛杉磯市政廳一帶，承載著尊貴的雙靈（Two-Spirit）原住民傳統。",
        details_en: "Tongva society practiced Two-Spirit traditions where gender-nonconforming individuals filled revered spiritual and social roles.",
        details_zh: "通瓦族相信性傾向與性別多元由命運決定，並在傳統社群中給予神聖的社會與精神地位。"
    },
    {
        id: "merced-house",
        era: "dtla",
        year_en: "1877 → 1898",
        year_zh: "1877 → 1898",
        birthYear: 1870,
        demiseYear: 2026,
        title_en: "420 N Main St | Merced House & Theatre",
        title_zh: "420 N Main St | Merced 劇院與公寓",
        landmark_en: "Merced House (420 N Main St)",
        landmark_zh: "Merced House (420 N Main St)",
        coords: [34.0564, -118.2393],
        color: "#e5985e",
        icon: "fa-theater-masks",
        summary_en: "Historic theater building that hosted masked balls and served as a lodging house for queer men at the turn of the century.",
        summary_zh: "歷史悠久的劇院建築，在 19 世紀末曾舉辦面具舞會，並作為酷兒男性的宿舍，提供相對安全的地下社交與居住空間。",
        details_en: "The theater hosted private masked balls where masks concealed identities, allowing professionals to express queer life safely. Later managed by Frederick Purssord as a covert lodging house.",
        details_zh: "面具讓當時面臨社會壓力的白領與商人得以隱藏真實身份。此處見證了早期洛杉磯酷兒隱秘而重要的社交生活。"
    },
    {
        id: "smittys",
        era: "dtla",
        year_en: "1940 → 1949",
        year_zh: "1940 → 1949",
        birthYear: 1940,
        demiseYear: 1955,
        title_en: "242 S Main St | Smitty's Bar",
        title_zh: "242 S Main St | Smitty's 酒吧",
        landmark_en: "Smitty's (242 S Main St)",
        landmark_zh: "Smitty's (242 S Main St)",
        coords: [34.0488, -118.2475],
        color: "#dcc265",
        icon: "fa-glass-martini-alt",
        summary_en: "An early downtown gay bar operating during the 1940s, providing a vibrant social hub.",
        summary_zh: "1940 年代活躍於市中心的最早期同志酒吧，為當時的社群提供了難得的聚會與交流據點。",
        details_en: "Smitty's served as a crucial sanctuary for community members amidst strict mid-century policing and social restrictions.",
        details_zh: "在警察臨檢頻繁與社會壓抑的中葉時期，Smitty's 扮演了凝聚社群的重要庇護所角色。"
    },
    {
        id: "pershing-square",
        era: "dtla",
        year_en: "1950s",
        year_zh: "1950年代",
        birthYear: 1900,
        demiseYear: 2026,
        title_en: "Pershing Square & The Run",
        title_zh: "Pershing Square 與「The Run」都市巡遊帶",
        landmark_en: "Pershing Square & Biltmore Hotel",
        landmark_zh: "Pershing Square 與 Biltmore 酒店",
        coords: [34.0480, -118.2530],
        color: "#76b08a",
        icon: "fa-route",
        summary_en: "An urban cruising and networking circuit before modern apps, later disrupted by the 1951 underground garage excavation.",
        summary_zh: "在現代交友軟體出現前，社群藉由 Pershing Square、Biltmore 酒店與圖書館形成的「The Run」網絡進行交友與連結。",
        details_en: "Known as 'gay Tinder and cruising all at once,' it was also a site of police entrapment. The 1951 park excavation physically altered this historic geography.",
        details_zh: "這個網絡既是社群聚集地，也充滿了警察釣魚執法的風險。1951 年的地下停車場工程更直接改變了公園的地貌結構。"
    },
    {
        id: "paramount-theater",
        era: "dtla",
        year_en: "1929 → 1960",
        year_zh: "1929 → 1960",
        birthYear: 1929,
        demiseYear: 1965,
        title_en: "536 S Hill St | Paramount Theater & Metro Bar",
        title_zh: "536 S Hill St | 派拉蒙劇院與地下 Metro 酒吧",
        landmark_en: "Paramount Theater (536 S Hill St)",
        landmark_zh: "派拉蒙劇院 / Metro 酒吧舊址",
        coords: [34.0456, -118.2523],
        color: "#7097e2",
        icon: "fa-music",
        summary_en: "Originally Grauman's Metropolitan Theatre. In the 1950s, a basement gay bar named 'Metro' operated here.",
        summary_zh: "原為 Grauman's Metropolitan 劇院。在 1950 年代，建築物地下一樓曾開設名為「Metro」的地下同志酒吧。",
        details_en: "The entrance to the bar was just east of the box office on 6th, reflecting how commercial buildings covertly housed underground nightlife.",
        details_zh: "酒吧入口位於 6 街售票處東側，體現了商業建築中暗藏地下夜生活的歷史。"
    },
    {
        id: "one-inc-archive",
        era: "dtla",
        year_en: "1953 → 1962",
        year_zh: "1953 → 1962",
        birthYear: 1953,
        demiseYear: 1970,
        title_en: "232 S Hill St | ONE, Inc. Office & Magazine",
        title_zh: "232 S Hill St | ONE, Inc. 辦公室與雜誌風波",
        landmark_en: "232 S Hill St Site",
        landmark_zh: "232 S Hill St 舊址",
        coords: [34.0515, -118.2486],
        color: "#a67ad8",
        icon: "fa-newspaper",
        summary_en: "First US LGBT organization with a physical office; site of 1954 postal obscenity seizures and the 1958 Supreme Court victory.",
        summary_zh: "全美第一個擁有實體辦公室的 LGBTQ 組織。1953 年在此設立辦公室，經歷郵政局查扣後於 1958 年獲最高法院勝訴。",
        details_en: "Timeline: 1953 office opened; 1954 seized by postal authorities; 1958 Supreme Court victory (ONE, Inc. v. Olesen). Now an empty parking lot.",
        details_zh: "1953 年設立辦公室並發行雜誌，隨後因「猥褻」指控纏訟至最高法院並於 1958 年勝訴保護言論自由。現址為停車場。"
    },
    {
        id: "civic-center",
        era: "dtla",
        year_en: "1959 / 1979",
        year_zh: "1959 / 1979",
        birthYear: 1950,
        demiseYear: 2026,
        title_en: "Civic Center | Nancy Valverde & Stephen Lachs",
        title_zh: "Civic Center | Nancy Valverde 與 Stephen Lachs",
        landmark_en: "Cooper Do-nuts / Nancy Valverde Square",
        landmark_zh: "Civic Center 與 Nancy Valverde Square",
        coords: [34.0536, -118.2450],
        color: "#e07a7a",
        icon: "fa-balance-scale",
        summary_en: "Nancy Valverde fought anti-masquerading arrests using 1950 law library precedents in 1959. 1979 saw America's first openly gay judge.",
        summary_zh: "Nancy Valverde 憑藉法律判例反抗警察對中性打扮的逮捕；1979 年誕生全美首位公開同性戀身份的法官 Stephen Lachs。",
        details_en: "Valverde successfully used court precedents to halt harassment. In 2023, the intersection was renamed Cooper Do-nuts / Nancy Valverde Square with an LAPD apology.",
        details_zh: "Valverde 成功利用法律先例遏制騷擾。2023 年，該十字路口被命名為 Cooper Do-nuts / Nancy Valverde Square，並獲 LAPD 公開道歉。"
    },
    {
        id: "black-cat",
        era: "1960s-70s",
        year_en: "1967",
        year_zh: "1967",
        birthYear: 1960,
        demiseYear: 2026,
        title_en: "Black Cat Tavern Raid & Protest",
        title_zh: "Black Cat Tavern 抗議",
        landmark_en: "Black Cat Tavern (3809 Sunset Blvd)",
        landmark_zh: "Black Cat Tavern (銀湖區)",
        coords: [34.0908, -118.2781],
        color: "#e5985e",
        icon: "fa-bullhorn",
        summary_en: "Raid sparked early protests against police brutality, preceding Stonewall.",
        summary_zh: "銀湖區酒吧臨檢引發全美最早的警民抗議之一，早於石牆運動。",
        details_en: "Now designated LA Historic-Cultural Monument No. 939.",
        details_zh: "現已被正式指定為洛杉磯第 939 號歷史文化地標。"
    },
    {
        id: "la-lgbt-center",
        era: "1960s-70s",
        year_en: "1969",
        year_zh: "1969",
        birthYear: 1969,
        demiseYear: 2026,
        title_en: "Founding of Los Angeles LGBT Center",
        title_zh: "Los Angeles LGBT Center 成立",
        landmark_en: "1125 N McCadden Pl / Hollywood",
        landmark_zh: "Anita May Rosenstein 園區",
        coords: [34.0912, -118.3385],
        color: "#76b08a",
        icon: "fa-heartbeat",
        summary_en: "The world's largest LGBTQ+ facility, providing health, housing, and social services.",
        summary_zh: "全球規模最大的 LGBTQ+ 服務機構，提供健康、住房與社會支援服務。",
        details_en: "Provides comprehensive healthcare, youth services, and community support across LA.",
        details_zh: "在洛杉磯各地提供全方位的健康醫療、青年收容與社群支援服務。"
    },
    {
        id: "biltmore-hotel-protest",
        era: "1960s-70s",
        year_en: "1970",
        year_zh: "1970",
        birthYear: 1923,
        demiseYear: 2026,
        title_en: "506 S Grand Ave | Biltmore Hotel Protest",
        title_zh: "506 S Grand Ave | Biltmore 酒店抗爭",
        landmark_en: "Biltmore Hotel",
        landmark_zh: "Biltmore 酒店",
        coords: [34.0495, -118.2539],
        color: "#dcc265",
        icon: "fa-hand-paper",
        summary_en: "Gay Liberation Front activists infiltrated a psychiatric conference screening a film on electroshock aversion therapy.",
        summary_zh: "同性戀解放陣線成員滲透 Biltmore 酒店的醫療行為矫正會議，抗議使用電擊厭惡療法改變同性戀傾向。",
        details_en: "Activists forced psychiatrists to listen, paving the way for the APA to remove homosexuality from its manual of mental disorders in 1973.",
        details_zh: "抗議行動迫使精神醫學界傾聽，並促成美國精神醫學會於 1973 年正式將同性戀從精神障礙手冊中移除。"
    },
    {
        id: "city-hall",
        era: "1980s-present",
        year_en: "1978 / 2008 / 2013",
        year_zh: "1978 / 2008 / 2013",
        birthYear: 1928,
        demiseYear: 2026,
        title_en: "200 N Spring St | Los Angeles City Hall",
        title_zh: "200 N Spring St | 洛杉磯市政廳與權利反覆",
        landmark_en: "Los Angeles City Hall",
        landmark_zh: "洛杉磯市政廳",
        coords: [34.0537, -118.2427],
        color: "#7097e2",
        icon: "fa-landmark",
        summary_en: "A symbol of the non-linearity of rights: site of Prop 6 defeat (1978), Prop 8 marriage protests (2008), and historic same-sex weddings (2013).",
        summary_zh: "見證權利非線性發展的地標：1978 年反對 6 號提案、2008 年同性婚姻抗議，以及 2013 年平權勝訴後首場市府婚禮。",
        details_en: "Illustrates that history moves forward and backward; plaintiffs Katami and Zarrillo were married here on June 28, 2013.",
        details_zh: "展現歷史推進與倒退交織的進程。2013 年 6 月 28 日，平權訴訟原告在此舉行婚禮。"
    },
    {
        id: "precinct",
        era: "1980s-present",
        year_en: "2015 → Present",
        year_zh: "2015 → 至今",
        birthYear: 2015,
        demiseYear: 2026,
        title_en: "357 S Broadway | Precinct Gay Bar",
        title_zh: "357 S Broadway | Precinct 搖滾同志酒吧",
        landmark_en: "Precinct (357 S Broadway)",
        landmark_zh: "Precinct 酒吧 (357 S Broadway)",
        coords: [34.0485, -118.2498],
        color: "#a67ad8",
        icon: "fa-cocktail",
        summary_en: "An 8,500 square foot Rock and Roll Gay Bar owned by Thor Stephens and Brian McIntire, anchoring contemporary downtown nightlife.",
        summary_zh: "由 Thor Stephens 與 Brian McIntire 創辦的 8,500 平方尺搖滾同志酒吧，成為當代市中心酷兒夜生活與文化活動的重要地標。",
        details_en: "Precinct represents the modern revival and open visibility of downtown LGBTQ+ culture, carrying forward the legacy of earlier underground spaces.",
        details_zh: "Precinct 代表了當代市中心 LGBTQ+ 文化的公開復興與能見度，繼承了早期地下空間的社群精神。"
    },
    {
        id: "pride-2026",
        era: "1980s-present",
        year_en: "2026",
        year_zh: "2026",
        birthYear: 2020,
        demiseYear: 2026,
        title_en: "56th Annual LA Pride Parade",
        title_zh: "第56屆 LA Pride Parade 游行路線",
        landmark_en: "Hollywood (Sunset & Highland to Cahuenga)",
        landmark_zh: "好莱塢 (Sunset Blvd & Highland 至 Cahuenga)",
        coords: [34.0980, -118.3380],
        color: "#e07a7a",
        icon: "fa-rainbow",
        summary_en: "🌟 The living continuation of LA queer history—from underground cruising to open parade.",
        summary_zh: "🌟 時間線的收尾與活着的歷史——從地下巡遊到公開大游行的歷史對照點。",
        details_en: "<b>Route:</b> Sunset Blvd & Highland Ave to Cahuenga Blvd.",
        details_zh: "<b>遊行路線：</b> Sunset Blvd & Highland Ave 至 Cahuenga Blvd。"
    }
];

let currentLang = 'en';
let selectedYear = 2026;

const paradeRouteCoords = [[34.0980, -118.3380], [34.1016, -118.3380], [34.1016, -118.3295], [34.0980, -118.3295]];
const map = L.map('map', { center: [34.053, -118.248], zoom: 13, zoomControl: false });
L.control.zoom({ position: 'topright' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

const paradePolyline = L.polyline(paradeRouteCoords, { color: '#a67ad8', weight: 6, opacity: 0.9, dashArray: '8, 8' }).addTo(map);
const markers = {};

// 頁面滾動監聽： Header 折疊 + 3個目錄按鈕跟隨高亮 (Scrollspy)
window.addEventListener('scroll', () => {
    const mainHeader = document.getElementById('mainHeader');
    if (mainHeader) {
        if (window.scrollY > 30) {
            mainHeader.classList.add('collapsed');
        } else {
            mainHeader.classList.remove('collapsed');
        }
    }

    // Scrollspy 邏輯：判定目前滾動到的區塊并高亮對應按鈕
    const sections = [
        { id: 'interactive-map-section', navId: 'nav-timeline' },
        { id: 'video-section', navId: 'nav-video' },
        { id: 'editorial-section', navId: 'nav-stories' }
    ];

    const scrollPosition = window.scrollY + 220; // 偏移量以匹配 sticky header 高度

    sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        const navEl = document.getElementById(sec.navId);
        if (el && navEl) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                document.querySelectorAll('.category-nav .nav-item').forEach(n => n.classList.remove('active'));
                navEl.classList.add('active');
            }
        }
    });
});

const sidebar = document.getElementById('controlSidebar');
document.getElementById('sidebarToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('closeSidebar').addEventListener('click', () => sidebar.classList.remove('open'));

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-lang-zh').classList.toggle('active', lang === 'zh');
    
    // 更新年份滑塊標注
    const presentSuffix = lang === 'zh' ? ' (現在)' : ' (Present)';
    document.getElementById('warpYearDisplay').textContent = selectedYear + (selectedYear === 2026 ? presentSuffix : '');

    if (lang === 'zh') {
        document.getElementById('txt-sidebar-title').textContent = "設定與語言";
        document.getElementById('txt-lang-label').innerHTML = '<i class="fas fa-globe"></i> 語言 / Language';

        document.getElementById('txt-main-title').textContent = "The Invisible Gay City: Los Angeles LGBTQ History Is Disappearing";
        document.getElementById('txt-sub-title').textContent = "串連市中心地標、消逝的建築與自豪的活體歷史";
        
        document.getElementById('txt-header-lead').textContent = "洛杉磯承載著豐富的 LGBTQ+ 歷史，然而許多奠基性的歷史空間如今已悄然消逝或未留標記。通過這張互動地圖與時間線，你可以穿梭時空，探索洛杉磯市中心消逝的建築遺跡，感受歷史足跡如何連結至今日的自豪游行。";

        document.getElementById('txt-nav-timeline').textContent = "互動地圖與時間線";
        document.getElementById('txt-nav-video').textContent = "2026 游行與影音";
        document.getElementById('txt-nav-stories').textContent = "專題報道";
        
        document.getElementById('txt-warp-label').innerHTML = '<i class="fas fa-hourglass-half"></i> 城市建築存在年份：';
        document.getElementById('txt-media-title').textContent = "2026 LA Pride Parade：現場視頻與照片牆";
        document.getElementById('txt-media-subtitle').textContent = "來自好莱塢第56屆年度游行的實況報道、現場視頻與精選照片集";
        
        document.getElementById('filter-all').textContent = "全部時期";
        document.getElementById('filter-dtla').textContent = "🏛️ LA 市中心地標合集";
        document.getElementById('filter-pre1950').textContent = "史前 – 1940年代";
        document.getElementById('filter-1950s').textContent = "1950年代";
        document.getElementById('filter-1960s-70s').textContent = "1960s-70s";
        document.getElementById('filter-1980s-present').textContent = "1980s – 至今";
        document.getElementById('siteCredit').innerHTML = `
            <p><strong>文章與網頁製作：</strong> WEI Yanfangru (Clayah) / Hong Kong Baptist University</p>
            <p><strong>指導老師：</strong> LUQIU, Luwei Rose</p>
            <p><strong>圖片來源：</strong> 網絡、Jo、Jerish LIU、Francis KO</p>
        `;
    } else {
        document.getElementById('txt-sidebar-title').textContent = "Settings & Language";
        document.getElementById('txt-lang-label').innerHTML = '<i class="fas fa-globe"></i> Language';

        document.getElementById('txt-main-title').textContent = "The Invisible Gay City: Los Angeles LGBTQ History Is Disappearing";
        document.getElementById('txt-sub-title').textContent = "Linking Downtown Landmarks, Vanished Architecture, and the Living History of Pride";
        
        document.getElementById('txt-header-lead').textContent = "Los Angeles holds a rich LGBTQ+ history, yet many of its foundational spaces have vanished or remain unmarked in today's urban landscape. Explore this interactive map and timeline to trace historical landmarks, uncover lost architectural heritage across Downtown LA, and connect past struggles to today's living history.";

        document.getElementById('txt-nav-timeline').textContent = "Interactive Map & Timeline";
        document.getElementById('txt-nav-video').textContent = "2026 Parade & Media";
        document.getElementById('txt-nav-stories').textContent = "Featured Stories";
        
        document.getElementById('txt-warp-label').innerHTML = '<i class="fas fa-hourglass-half"></i> Year Filter:';
        document.getElementById('txt-media-title').textContent = "2026 LA Pride Parade: Live Video & Photo Wall";
        document.getElementById('txt-media-subtitle').textContent = "Live Coverage, On-site Video, and Photo Gallery from the 56th Annual Parade in Hollywood";

        document.getElementById('filter-all').textContent = "All Eras";
        document.getElementById('filter-dtla').textContent = "🏛️ LA Downtown Landmarks";
        document.getElementById('filter-pre1950').textContent = "Pre-1950s";
        document.getElementById('filter-1950s').textContent = "1950s";
        document.getElementById('filter-1960s-70s').textContent = "1960s-70s";
        document.getElementById('filter-1980s-present').textContent = "1980s-Present";
        document.getElementById('siteCredit').innerHTML = `
            <p><strong>Article and Website by:</strong> WEI Yanfangru (Clayah) / Hong Kong Baptist University</p>
            <p><strong>Reporting Advisor:</strong> LUQIU, Luwei Rose</p>
            <p><strong>Pictures:</strong> Internet Sources, Jo, Jerish LIU, Francis KO</p>
        `;
    }
    
    renderContent(historyData);
}

function handleTimeWarp(val) {
    selectedYear = parseInt(val);
    const presentSuffix = currentLang === 'zh' ? ' (現在)' : ' (Present)';
    document.getElementById('warpYearDisplay').textContent = selectedYear + (selectedYear === 2026 ? presentSuffix : '');
    renderContent(historyData);
}

function renderContent(data) {
    const container = document.getElementById('timelineList');
    container.innerHTML = '';

    data.forEach((item) => {
        const isExistingInYear = selectedYear >= item.birthYear && selectedYear <= item.demiseYear;

        if (!isExistingInYear) {
            if (markers[item.id]) {
                map.removeLayer(markers[item.id]);
                delete markers[item.id];
            }
            return;
        }

        const title = currentLang === 'zh' ? item.title_zh : item.title_en;
        const landmark = currentLang === 'zh' ? item.landmark_zh : item.landmark_en;
        const summary = currentLang === 'zh' ? item.summary_zh : item.summary_en;
        const details = currentLang === 'zh' ? item.details_zh : item.details_en;
        const displayYear = currentLang === 'zh' ? item.year_zh : item.year_en;

        const card = document.createElement('div');
        card.className = `timeline-card ${item.id === 'pride-2026' ? 'parade-highlight' : ''}`;
        card.id = `card-${item.id}`;
        
        card.style.setProperty('--dot-color', item.color);
        card.style.setProperty('--accent-color', item.color);
        card.style.setProperty('--card-color', item.color);
        card.style.setProperty('--card-glow', item.color + '50');

        card.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="card-header">
                <span class="year-badge">${displayYear}</span>
                <span class="landmark-tag"><i class="fas fa-map-marker-alt" style="color:${item.color}"></i> ${landmark}</span>
            </div>
            <div class="card-title">${title}</div>
            <div class="card-summary">${summary}</div>
            <div class="card-details">${details}</div>
            <div class="expand-btn" onclick="toggleExpand(event, '${item.id}')">
                <span class="btn-text">${currentLang === 'zh' ? '展開細節' : 'Show Details'}</span> <i class="fas fa-chevron-down"></i>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.expand-btn')) selectLocation(item.id);
        });

        container.appendChild(card);

        if (!markers[item.id]) {
            const customIcon = L.divIcon({
                className: `custom-marker marker-${item.id}`,
                html: `<div class="marker-pin" style="background-color: ${item.color};"><i class="fas ${item.icon}"></i></div>`,
                iconSize: [26, 36], iconAnchor: [13, 36]
            });

            const marker = L.marker(item.coords, { icon: customIcon }).addTo(map);

            marker.bindPopup(`
                <div class="popup-container">
                    <h3>${title}</h3>
                    <p><strong>${displayYear}</strong><br>${landmark}</p>
                    <a class="popup-btn" onclick="scrollToCard('${item.id}')">${currentLang === 'zh' ? '查看' : 'View'}</a>
                </div>
            `);

            marker.on('click', () => { selectLocation(item.id, false); expandCard(item.id); });
            markers[item.id] = marker;
        }
    });
}

function toggleExpand(e, id) {
    e.stopPropagation();
    const card = document.getElementById(`card-${id}`);
    const btnText = card.querySelector('.btn-text');
    const icon = card.querySelector('.expand-btn i');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        btnText.textContent = currentLang === 'zh' ? '收起' : 'Hide Details';
        icon.className = 'fas fa-chevron-up';
    } else {
        btnText.textContent = currentLang === 'zh' ? '展開細節' : 'Show Details';
        icon.className = 'fas fa-chevron-down';
    }
}

function expandCard(id) {
    const card = document.getElementById(`card-${id}`);
    if (card && !card.classList.contains('expanded')) {
        card.classList.add('expanded');
        card.querySelector('.btn-text').textContent = currentLang === 'zh' ? '收起' : 'Hide Details';
        card.querySelector('.expand-btn i').className = 'fas fa-chevron-up';
    }
}

function selectLocation(id, panMap = true) {
    const item = historyData.find(d => d.id === id);
    if (!item) return;

    document.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.custom-marker').forEach(m => m.classList.remove('active'));

    const activeCard = document.getElementById(`card-${id}`);
    if (activeCard) {
        activeCard.classList.add('active');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const marker = markers[id];
    if (marker) {
        marker.getElement().classList.add('active');
        marker.openPopup();
        if (panMap) map.flyTo(item.coords, 14, { duration: 1.2 });
    }
}

function scrollToCard(id) { selectLocation(id, false); expandCard(id); }

function filterEra(era) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    const filteredData = era === 'all' ? historyData : historyData.filter(d => d.era === era);
    renderContent(filteredData);

    if (filteredData.length > 0) {
        const bounds = L.latLngBounds(filteredData.map(d => d.coords));
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// 默認初始化為全英文模式
setLanguage('en');