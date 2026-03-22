import { Share2 } from "lucide-react";

const ShareButton = () => {
  const share = () => {
    const text = encodeURIComponent("מצאתי רגע קטן של אוויר לצוותים שלנו 💜\n\n");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}${url}`, "_blank");
  };

  return (
    <button
      onClick={share}
      className="fixed bottom-20 left-4 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-90"
      aria-label="שתפי"
    >
      <Share2 className="w-5 h-5" />
    </button>
  );
};

export default ShareButton;
