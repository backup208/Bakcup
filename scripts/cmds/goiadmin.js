module.exports = {
	config: {
		name: "goiadminv2",
		version: "1.0",
		author: "Cliff",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () {},
	onChat: async function ({ event, message, getLang, api }) {
		const msg = [
			"Mantion_দিস না _জিহাদ বস এর মন মন ভালো নেই আস্কে-!💔🥀", 
			"- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", 
			"আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣",
			"এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒",
			" Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨",
			"এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭",
			"জিহাদ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰",
			"এতো মিনশন নাহ দিয়া সিংগেল জিহাদ রে একটা গফ দে 😒 😏",
			"Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স",
			"মেনশন দিসনা পারলে একটা গফ দে",
			"Mantion_দিস না বাঁলপাঁক্না জিহাদ প্রচুর বিজি 🥵🥀🤐",
			"চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗",
			"আর পারলামনা bot bot করতে করতে এখন মেনশন দেয়া শুরু করছে 🙂",  
			"আছি আছি এতো মেনশন দিতে হবেনা😌", 
			" দারা তোদের একটা ব্যবস্হা নিতে হবে খালি ডাকে আর ডাকে 🥲", 
			"আবে সালা তোরা নেকামি করবি আর আমাকে মেনশন দিবি কেন 😾", 
			" তুই আর কতো জালাবি একটু বলবি🥵🥰😍😏"
		];

		const CliffRegex = /^(@Zihad Ahmed)$/i;
		if (event.body && CliffRegex.test(event.body)) {
			api.setMessageReaction("😍", event.messageID, (err) => {}, true);
			return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
		}
	},
};
