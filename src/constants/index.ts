import {twitter, discord, bluesky, mastadon, barq} from "../assets"
import { orion, reggie, shuttleu, snipsel, toob, xeechu, placeholder, sky, noodle, daisy, socks, merlin } from "../assets/staff";
export const staff = [
    {
        id: "xeechu",
        img: xeechu,
        name: "Xeechu",
        title: "Mumma Wolf",
        type: "admin"
    },
    {
        id: "shuttleu",
        img: shuttleu,
        name: "Shuttleu",
        title: "Chief Tech Admin",
        type: "admin"
    },
    {
        id: "snipsel",
        img: snipsel,
        name: "Snipsel",
        title: "Boss Ott",
        type: "admin"
    },
    {
        id: "sky",
        img: sky,
        name: "Sky",
        title: "The Funnier One",
        type: "admin"
    },
    {
        id: "noodle",
        img: noodle,
        name: "Noodle",
        title: "Ooooodly Noodly",
        type: "admin"
    }, 
]
export const staffPets = [
    {
        id: "orion",
        img: orion,
        name: "Orion",
        title: "Thicc Lad",
        type: "pet"
    },
    {
        id: "reggie",
        img: reggie,
        name: "Reggie",
        title: "Baby Boi",
        type: "pet"
    },
    {
        id: "toob",
        img: toob,
        name: "Toob",
        title: "Some Otts",
        type: "pet"
    },
    {
        id: "daisy",
        img: daisy,
        name: "Daisy",
        title: "She so old!",
        type: "pet"
    },
    {
        id: "socks",
        img: socks,
        name: "Socks",
        title: "Be Cat, Do Crimes",
        type: "pet"
    },
    {
        id: "merlin",
        img: merlin,
        name: "Merlin",
        title: "He just blblblb",
        type: "pet"
    },
]
export const socials = [
    {
        id: "discord",
        name: "Discord",
        link: "https://discord.cambfurs.co.uk/",
        image: discord,
    },
    {
        id: "bluesky",
        name: "Bluesky",
        link: "https://bluesky.cambfurs.co.uk/",
        image: bluesky,
    },
    {
        id: "x",
        name: "X",
        link: "https://twitter.cambfurs.co.uk/",
        image: twitter,
    },
    {
        id: "mastadon",
        name: "Mastadon",
        link: "https://mastadon.cambfurs.co.uk/",
        image: mastadon,
    },
    {
        id: "barq",
        name: "Barq",
        link: "https://barq.cambfurs.co.uk/",
        image: barq,
    }
]

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "socials",
        title: "Socials",
    },
    {
        id: "rules",
        title: "Rules",
    },
    {
        id: "staff",
        title: "Staff",
    },
    {
        id: "dates",
        title: "Dates",
    },
    {
        id: "faq",
        title: "FAQ",
    }
]

export const dates = [
    {
        date: '25-01-2025',
        location: 'on Discord',
        specialNotes: ''
    },
    {
        date: '15-02-2025',
        location: 'In Person',
        specialNotes: ''
    },
    {
        date: '22-03-2025',
        location: 'In Person',
        specialNotes: ''
    },
    {
        date: '12-04-2025',
        location: 'In Person',
        specialNotes: 'Shepreth Meet'
    },
    {
        date: '10-05-2025',
        location: 'In Person',
        specialNotes: 'Picnic Meet'
    },
    {
        date: '14-06-2025',
        location: 'In Person',
        specialNotes: 'Cambridge Pride Meet'
    },
    {
        date: '12-07-2025',
        location: 'In Person',
        specialNotes: 'Picnic Meet'
    },
    {
        date: '23-08-2025',
        location: 'In Person',
        specialNotes: 'Picnic Meet'
    },
    {
        date: '27-09-2025',
        location: 'In Person',
        specialNotes: ''
    },
    {
        date: '18-10-2025',
        location: 'In Person',
        specialNotes: ''
    },
    {
        date: '15-11-2025',
        location: 'In Person',
        specialNotes: ''
    },
    {
        date: '13-12-2025',
        location: 'on Discord',
        specialNotes: ''
    }
]

export const rules = [
    { key: 1, rule: "Safe for work content only. This means no NSFW discussion or images.", reason: "The Cambridge Furs is a safe for work chat. This is for several reasons:", subreasons: ["A number of people can be made very uncomfortable by not safe for work images or chat. This should be a comfortable environment for people to socialise and relax.", "Apple devices only display safe for work chat groups in Telegram. Ones flagged as not safe for work will not be displayed and as such would not allow a number of our group members to see the room."] },
    { key: 2, rule: "No discussion or images of illegal content or activities. This includes drugs.", reason: "It should be obvious that we don't condone illegal activities of any kind. Drugs have been particularly highlighted as discussions of the use of either illegal drugs, or the misuse of drugs, have a tendency to spiral out of control." },
    { key: 3, rule: "No “heavy” or “extreme” kinks in images or discussion. This includes vore and gore.", reason: "Discussion of “heavy” or “extreme” kinks can easily make those not interested in them uncomfortable. This can occur even if the kinks are not explicitly sexual in nature. We want this to be somewhere people can feel comfortable engaging in social chat." },
    { key: 4, rule: "Over 16s only in chat. If you indicate you are under 16 you are liable to be removed.", reason: "Over 16s only. Whilst the chat is safe for work, and should be suitable for all ages, as this is a public chat we cannot guarantee this." },
    { key: 5, rule: "No discriminatory content. This includes anything related to disability, sex, gender identity, sexuality, or race.", reason: "Discrimination on the grounds of any protected characteristic is not something we will tollerate. This includes any racism, sexisim, homophobia, or transphobia. If you want to understand more about protected characteristics the UK government and Citizens Advice have more information on protected characteristics here: ", subreasons: [{link: "https://www.gov.uk/discrimination-your-rights/types-of-discrimination", title: "UK Government"}, {link: "https://www.citizensadvice.org.uk/law-and-courts/discrimination/what-are-the-different-types-of-discrimination/", title: "Citizens Advice"}] },
    { key: 6, rule: "Don't harass or bully group members, either through direct messages or in chat.", reason: "Harassment of group members, either in the chat or in DM, will not be tolerated. It's more complex than this, but if someone asks you to stop messaging them or that you're making them uncomfortable, just stop." },
    { key: 7, rule: "No politics in group chat.", reason: "Whilst politics is an important subject it's one where people often have strong opinions and tend to devolve very quickly into toxic and unpleasant chat. To avoid this we're not allowing discussion of politics. Encouragement of people to vote is fine, but not with discussion around specific parties or policies." },
    { key: 8, rule: "Don't argue with the admins in chat. If an admin asks you to stop, stop. If you disagree, take it to a direct message.", reason: "The admins are here to keep the chat safe and enjoyable for everyone. If they ask you to stop doing something, please do so. If you feel an admin is being unfair, contact another admin."},
    { key: 9, rule: "Do not use the chat to cruise or hit on other members.", reason: "Cambridge Furs is a social space and not a dating group. We want to keep the group safe, friendly, and enjoyable for everyone (both online and at meets). Please do not take anything anyone says as an invitation to hit on them. Anyone reported as cruising (specifically looking for dates) will be asked to leave the group and may not be invited back." },
    { key: 10, rule: "No Generative AI", reason:"Generative AI and 'creative' works produced by it is not permitted within any of the Cambridge Furs groups.", subreasons: ["This includes (but is not limited to) images generated by MidiJourney, Dall-e, Stable Diffusion, stories generated through ChatGPT and others.", "The furry community is one which has a long history with creative people, and the Cambridge furs group is no different. Generative AI which has been trained on users works without their consent, renumeration, or any respect for copyright is not something that we support or wish to allow."] }
];

export const faq = [
    { 
        key: 1,
        question: "What meets can I fursuit at?", 
        answer: "Any meet that is being held as an outdoor meet/picnic meet, which usually take place from late spring to early autumn. Sadly we don’t have a venue for indoor suiting yet!" 
    },
    { 
        key: 2,
        question: "What is your minimum age for attending?", 
        answer: "Our minimum age is 16, this is due to child safety laws.",
    },
]
