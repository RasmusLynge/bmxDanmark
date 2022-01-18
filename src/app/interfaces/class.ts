export interface Video {
    name: string;
    desc: string;
    videoUrl?: string;
    riders?: string[];
    tags: string[];
    date: Date;
}

export interface Event {
    title: string;
    info: string;
    moreInfoUrl?: string;
    videos?: Video[]
}