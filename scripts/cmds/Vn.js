module.exports = {
  config: {
    name: "vn",
    version: "1.0",
    author: "ChatGPT",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: 'মজার VIP প্রোফাইল'
    },
    longDescription: {
      en: 'একটা মজার ভুয়া VIP প্রোফাইল তৈরি করে'
    },
    category: "fun",
    guide: {
      en: '{pn} নাম\nউদাহরণ: {pn} MIM'
    }
  },

  onStart: async function({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("দয়া করে একজনের নাম দাও। উদাহরণ: vip জিহাদ", event.threadID, event.messageID);

    const titles = [
      "অলসতার চেয়ারম্যান",
      "ঘুমের মন্ত্রী",
      "মিমের রাজা",
      "ভুলে যাওয়ার ওস্তাদ",
      "সকালের এলার্মের শত্রু",
      "বড় কথা বলা এক্সপার্ট",
      "সিন করেই উধাও মাস্টার",
      "মেসেঞ্জার প্রোফেশনাল ঘুমকাতুরে",
      "মোবাইল অন রেখে অফ থাকা যাদুকর",
      "গ্রুপে আসা-যাওয়ার সচিব"
    ];

    const knownFor = [
      "মেসেজ সিন করে গায়েব হওয়া",
      "‘আছি’ বলেই অফলাইন হয়ে যাওয়া",
      "নিজের জোকসে নিজেই হাসা",
      "সকাল সকাল উঠার নামে শুয়ে থাকা",
      "গুজব জানে, কিন্তু বলে ‘আমি কিছু জানি না’",
      "সব সময় ব্যস্ত থাকা, কাজ ছাড়াই",
      "ফোনে ডেটা থাকলেও রিপ্লাই না দেওয়া",
      "নিজেকে গোপন রাখা এক্সপার্ট",
      "বিছানা থেকে অফিস চালানো",
      "অতিরিক্ত ক্যাপশন লিখে ছবি না দেয়া"
    ];

    const powers = [
      "‘অনলাইনে আছি’ বলেই অফলাইন হয়ে যাওয়া",
      "কথা না বলেই ঝামেলা সৃষ্টি করা",
      "ঘুম থেকে উঠে আবার ঘুমিয়ে যাওয়া",
      "এক কথায় ৩০ মিনিট সময় নেয়া",
      "সবার প্রশ্ন এড়িয়ে যাওয়া মাস্টার",
      "মেসেঞ্জারে এক্সপার্ট লুকিয়ে থাকা",
      "নিজেকে সব জানলেও কিছু না জানার অভিনয় করা",
      "স্মার্টফোন দিয়ে শুধু ঘুমানো",
      "গ্রুপে ঢুকে আবার গায়েব হওয়া",
      "ভুলে গিয়ে আবার নিজেই বিস্মিত হওয়া"
    ];

    const title = titles[Math.floor(Math.random() * titles.length)];
    const known = knownFor[Math.floor(Math.random() * knownFor.length)];
    const power = powers[Math.floor(Math.random() * powers.length)];

    const message = `⭐️ *${name} এর VIP প্রোফাইল*\n` +
      `\n🪪 উপাধি: ${title}` +
      `\n📌 পরিচিতি: ${known}` +
      `\n✨ বিশেষ ক্ষমতা: ${power}`;

    return api.sendMessage(message, event.threadID, event.messageID);
  }
};
