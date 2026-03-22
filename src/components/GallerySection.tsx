import { useState, useRef, useCallback } from "react";
import { Camera, Upload, X, Download, Heart } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  liked: boolean;
}

const GallerySection = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target?.result as string;
        setPhotos((prev) => [
          { id: crypto.randomUUID(), src, liked: false },
          ...prev,
        ]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  }, []);

  const toggleLike = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  }, []);

  const removePhoto = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    setSelectedPhoto(null);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="reveal text-center mb-10">
          <span className="text-3xl">📸</span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
            style={{ lineHeight: "1.3" }}
          >
            גלריית רגעים שלנו
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            שתפו רגע יפה מהחג — צלמו או העלו תמונה
          </p>
        </div>

        {/* Upload buttons */}
        <div className="reveal reveal-delay-1 flex justify-center gap-3 mb-8">
          <button
            onClick={() => cameraInputRef.current?.click()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-gold/20 hover:border-gold/40 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
          >
            <Camera className="w-4 h-4 text-gold" />
            צלמו רגע
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-spring/20 hover:border-spring/40 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
          >
            <Upload className="w-4 h-4 text-spring" />
            העלו תמונה
          </button>
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileChange}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Photo grid */}
        {photos.length === 0 ? (
          <div className="reveal reveal-delay-2 text-center py-16 rounded-2xl bg-card border border-border/50">
            <span className="text-5xl block mb-4">🌷</span>
            <p className="text-muted-foreground text-sm">
              עדיין אין תמונות — היו הראשונים לשתף!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} relative group aspect-square rounded-xl overflow-hidden cursor-pointer border border-border/30 hover:border-gold/30 transition-all duration-200`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt="תמונה שהועלתה"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                <button
                  onClick={(e) => toggleLike(photo.id, e)}
                  className="absolute bottom-2 left-2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm transition-transform duration-150 active:scale-90"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      photo.liked
                        ? "fill-blossom text-blossom"
                        : "text-white/80"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt="תמונה מוגדלת"
                className="w-full rounded-xl"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={(e) => removePhoto(selectedPhoto.id, e)}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white transition-colors active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <button
                  onClick={(e) => toggleLike(selectedPhoto.id, e)}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm transition-transform active:scale-90"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      selectedPhoto.liked
                        ? "fill-blossom text-blossom"
                        : "text-white/80"
                    }`}
                  />
                </button>
                <a
                  href={selectedPhoto.src}
                  download="pesach-moment.jpg"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white transition-colors active:scale-90"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
