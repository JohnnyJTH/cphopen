export const ALL_RESULTS = {
    mpo: [
        {
            name: 'Jesse Nieminen',
            origin: { full: 'Kuopio, FI', country: 'FI' },
            image: 'https://pdga.com/files/styles/large/public/pictures/picture-910811-1693425623.jpg',
            score: { r1: -8, r2: -13, r3: -9, total: -30 },
            place: '1',
            earnings: 7600
        },
        {
            name: 'Eetu Tuominen',
            origin: { full: 'Lempäälä, FI', country: 'FI' },
            image: 'https://pdga.com/files/styles/large/public/pictures/picture-1352356-1715444608.jpg',
            score: { r1: -7, r2: -11, r3: -10, total: -28 },
            place: 'T2',
            earnings: 3580
        },
        {
            name: 'Niklas Anttila',
            origin: { full: 'Kuopio, FI', country: 'FI' },
            image: 'https://pdga.com/files/styles/large/public/pictures/picture-332551-1620317153.jpg',
            score: { r1: -8, r2: -10, r3: -10, total: -28 },
            place: 'T2',
            earnings: 3580
        },
        {
            name: 'Samuel Hänninen',
            origin: { full: 'Jyväskylä, FI', country: 'FI' },
            image: 'https://pdga.com/files/styles/large/public/pictures/picture-349836-1715180553.jpg',
            score: { r1: -6, r2: -9, r3: -12, total: -27 },
            place: 'T3',
            earnings: 1933
        },
        {
            name: 'Roland Kõur',
            origin: { full: 'Tartu Linn / Tartumaa, EE', country: 'EE' },
            image: 'https://pdga.com/files/styles/large/public/pictures/picture-2716496-1673386059.jpg',
            score: { r1: -8, r2: -9, r3: -10, total: -27 },
            place: 'T3',
            earnings: 1933
        }
    ],
    fpo: [
        {
            name: "Eveliina Salonen",
            origin: {
                full: "Pirkkala, FI",
                country: "FI",
            },
            image: "https://pdga.com/files/styles/large/public/pictures/EveliinaSalonen.jpg",
            score: {
                r1: -1,
                r2: -10,
                r3: -5,
                total: -16,
            },
            place: "1",
            earnings: 3550,
        }, {
            name: "Kaidi Allsalu",
            origin: {
                full: "Keila / Harjumaa, EE",
                country: "EE",
            },
            image: "https://pdga.com/files/styles/large/public/pictures/picture-695336-1715340936.jpg",
            score: {
                r1: -8,
                r2: -7,
                r3: -1,
                total: -16,
            },
            place: "2",
            earnings: 1950,
        }, {
            name: "Silva Saarinen",
            origin: {
                full: "Oitti, FI",
                country: "FI",
            },
            image: "https://pdga.com/files/styles/large/public/pictures/picture-874511-1693426745.jpg",
            score: {
                r1: -5,
                r2: -3,
                r3: -1,
                total: -9,
            },
            place: "3",
            earnings: 1375,
        }, {
            name: "Heidi Laine",
            origin: {
                full: "Hämeenlinna, FI",
                country: "FI",
            },
            image: "https://pdga.com/files/styles/large/public/pictures/picture-345281-1693426373.jpg",
            score: {
                r1: -1,
                r2: 1,
                r3: -8,
                total: -8,
            },
            place: "4",
            earnings: 1075,
        }
    ]
};

// const FPO_PAR = 66;
// fetch('https://www.pdga.com/apps/tournament/live-api/live_results_fetch_event_top_players?TournID=78193&Round=3').then(
//     (res) => res.json().then(
//         (data) => console.log(data.data.DivisionStandings[1].scores.map((result) => {
//             const rounds = result.Rounds.split(',');
//             return {
//                 name: result.Name,
//                 origin: { full: result.FullLocation, country: result.Country },
//                 image: `https://pdga.com${result.AvatarURL}`,
//                 score: {
//                     r1: +rounds[0] - FPO_PAR,
//                     r2: +rounds[1] - FPO_PAR,
//                     r3: +rounds[2] - FPO_PAR,
//                     total: +rounds[0] + +rounds[1] + +rounds[2] - FPO_PAR * 3
//                 },
//                 place: `${result.Tied ? 'T' : ''}${result.RunningPlace}`,
//                 earnings: +result.Prize.split(";")[1].replace(/,/g, '')
//             }
//         }))
//     )
// ) 