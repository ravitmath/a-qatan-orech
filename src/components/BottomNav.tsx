import { MessageCircle, Music, Sparkles, Star, PawPrint } from "lucide-react";

interface Props {
  activeScreen: number;
  onNavigate: (screen: number) => void;
}

const items = [
  { icon: MessageCircle, label: "השתקפות", color: "text-primary" },
  { icon: Music, label: "מוזיקה", color: "text-turquoise" },
  { icon: Sparkles, label: "פעילות", color: "text-sunshine" },
  { icon: Star, label: "עידוד", color: "text-sunshine" },
  { icon: PawPrint, label: "חיוך", color: "text-rose-custom" },
];

const BottomNav = ({ activeScreen, onNavigate }: Props) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-t border-border nav-glow">
      <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeScreen === i + 1;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(i + 1)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 active:scale-85 ${
                isActive ? item.color : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "scale-125 drop-shadow-[0_0_8px_currentColor]" : ""}`} />
              <span className="text-[10px] font-heading font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
