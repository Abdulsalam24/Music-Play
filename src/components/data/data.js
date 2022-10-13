import chartImg1 from '../../assets/img/chartImg1.svg'
import chartImg2 from '../../assets/img/chartImg2.svg'
import chartImg3 from '../../assets/img/chartImg3.svg'

import releaseImg1 from '../../assets/img/releaseImg1.svg'
import releaseImg2 from '../../assets/img/releaseImg2.svg'
import releaseImg3 from '../../assets/img/releaseImg3.svg'
import releaseImg4 from '../../assets/img/releaseImg4.svg'

import releaseImg5 from '../../assets/img/releaseImg5.svg'

import releaseImg6 from '../../assets/img/releaseImg6.svg'

import collectionImg1 from '../../assets/img/collectionImg1.svg'
import collectionImg2 from '../../assets/img/collectionImg2.svg'
import collectionImg3 from '../../assets/img/collectionImg3.svg'





const topChart = [
    {
        id: '1',
        img: chartImg1,
        desc: "Golden age of 80s",
        artist: "Sean swadder",
        duration: "2:34:45",
        songs: [
            {
                id: '1',
                img: chartImg2,
                info: "Watin man go do ~ Burna",
                type: "Single",
                duration: "2:30",
            },
            {
                id: '2',
                img: chartImg2,
                info: "Watin man go do ~ Burna",
                type: "Single",
                duration: "2:30",
            },
        ]
    },
    {
        id: '2',
        img: chartImg2,
        desc: "Reggae “n” blues",
        artist: "Dj YK mule",
        duration: "1:02:42",
        songs: [
            {
                id: '1',
                img: chartImg2,
                info: "Watin man go do ~ Burna",
                type: "Single",
                duration: "2:30",
            },
        ]
    },
    {
        id: '3',
        img: chartImg3,
        desc: "Tomorrow’s tunes",
        artist: "Obi Datti",

        duration: "2:01:25",
        songs: [
            {
                id: '1',
                img: chartImg2,
                info: "Watin man go do ~ Burna",
                type: "Single",
                duration: "2:30",
            },
        ]
    }
]



const chartInfo = [
    {
        id: '1',
        img: chartImg3,
        info: "Let me love you ~ Krisx",
        type: "Single",
        duration: "4:17",
    },
    {
        id: '2',
        img: chartImg2,
        info: "Watin man go do ~ Burna",
        type: "Single",
        duration: "2:30",
    },
    {
        id: '3',
        img: chartImg2,
        info: "Stand strong ~ Davido",
        type: "Single",
        duration: "2:30",
    },
    {
        id: '4',
        img: chartImg3,
        info: "Closa ~ Ybee",
        type: "Single",
        duration: "2:30",
    },

]


const release = [
    {
        id: '1',
        img: releaseImg1,
    },
    {
        id: '2',
        img: releaseImg2,
    },
    {
        id: '3',
        img: releaseImg3,
    },
    {
        id: '4',
        img: releaseImg4,
    },
    ,
    {
        id: '5',
        img: releaseImg5,
    },
    ,
    {
        id: '6',
        img: releaseImg6,
    },
    {
        id: '7',
        img: releaseImg6,
    },
    {
        id: '8',
        img: releaseImg6,
    }
]


const collectionsData = [
    {
        id: '1',
        img: collectionImg1,
        info: "Limits",
        artist: "John watts",
        likes: "23m likes",
    },
    {
        id: '2',
        img: collectionImg2,
        info: "Limits",
        artist: "John watts",
        likes: "23m likes",
    },
    {
        id: '3',
        img: collectionImg3,
        info: "Limits",
        artist: "John watts",
        likes: "23m likes",
    },
    {
        id: '4',
        img: chartImg3,
        info: "Limits",
        artist: "John watts",
        likes: "23m likes",
    },

]


const datas = {
    topChart,
    release,
    chartInfo,
    collectionsData
}

export default datas