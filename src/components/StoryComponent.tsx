import { Heart } from "lucide-react";

type Props = {
  darkMode: boolean;
};

export default function StoryComponent({ darkMode }: Props) {
  return (
    <section
      className={`relative z-10 px-6 py-20 md:px-12 ${darkMode ? "bg-gray-800/30" : "bg-gradient-to-br from-amber-100/40 to-blue-100/40"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 border shadow-xl ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-amber-100"}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-amber-600 mb-1">
                من وين جات الفكرة
              </h3>
              <h2
                className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                مؤسس خزانتي
              </h2>
            </div>
          </div>
          <div
            className={`space-y-4 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <p
              className={`text-xl md:text-2xl font-medium border-r-4 border-amber-500 pr-4 ${darkMode ? "text-gray-200" : "text-gray-800"}`}
            >
              "كل صباح، مرتي تسألني على الطقس متاع غدوة... والأهم من هذا كلّه:
              'شنوة نلبس؟'"
            </p>
            <p>
              كل يوم نفس السؤال. كل يوم نفس التوتر. خزانة مليانة بالملابس، أما
              دايماً "ماعندي شي نلبسو".
            </p>
            <p>
              من هنا جات الفكرة:علاش مينجمش يكون عندنا مساعد ذكي يعرف الطقس،
              يعرف المناسبة، ويعرف شنية الملابس إلي عندنا؟
            </p>
            <p
              className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              خزانتي هو الحل. ماهوش مجرد تطبيق، هو صديقك إلي يفهمك ويساعدك كل
              صباح.
            </p>
          </div>
          <div
            className={`mt-8 pt-6 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full">
                <img
                  src="pic_profil.png"
                  alt="Lakhak Nasereddine"
                  className="object-contain rounded-3xl"
                />
              </div>
              <div>
                <p
                  className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  نصرالدين الأكحل
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  مؤسس ومدير تنفيذي
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
