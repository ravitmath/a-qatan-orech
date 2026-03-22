import { MessageCircle, Music, Sparkles, Star, PawPrint } from "lucide-react";

interface Props {
  activeScreen: number;
  onNavigate: (screen: number) => void;
}

const items = [
  { icon: MessageCircle, label: "השתקפות" },
  { icon: Music, label: "מוזיקה" },
  { icon: Sparkles, label: "פעילות" },
  { icon: Star, label: "עידוד" },
  { icon: PawPrint, label: "חיוך" },
];

const BottomNav = ({ activeScreen, onNavigate }: Props) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeScreen === i + 1;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(i + 1)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 active:scale-90 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
              <span className="text-[10px] font-heading font-medium">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
