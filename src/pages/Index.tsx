import { useState } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import ReflectionCards from "@/components/ReflectionCards";
import Playlist from "@/components/Playlist";
import MiniActivity from "@/components/MiniActivity";
import EncouragementWall from "@/components/EncouragementWall";
import SmileCorner from "@/components/SmileCorner";
import BottomNav from "@/components/BottomNav";
import ShareButton from "@/components/ShareButton";

const Index = () => {
  const [screen, setScreen] = useState(0);

  if (screen === 0) {
    return <OpeningScreen onStart={() => setScreen(1)} />;
  }

  const screens: Record<number, JSX.Element> = {
    1: <ReflectionCards />,
    2: <Playlist />,
    3: <MiniActivity />,
    4: <EncouragementWall />,
    5: <SmileCorner />,
  };

  return (
    <div className="pb-20">
      {screens[screen]}
      <BottomNav activeScreen={screen} onNavigate={setScreen} />
      <ShareButton />
    </div>
  );
};

export default Index;
