import { FaLeaf } from "react-icons/fa";
import VoiceComponent from "@/components/VoiceComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#25D366] text-white px-4">
      {/* Soft background glow */}
      <div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#25D366]/20 via-[#128C7E]/15 to-[#DCF8C6]/20 blur-[140px] animate-pulse" />

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-lg font-semibold text-[#DCF8C6]">
          HealthyChat
        </span>
        <FaLeaf className="text-[#25D366] text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-[#DCF8C6] drop-shadow-md text-center leading-tight">
        Your Healthy Eating Guide
      </h1>

      {/* Subheading */}
      <p className="max-w-lg text-center text-gray-200 mb-8">
        Get personalized, real-time guidance on maintaining a balanced diet and making
        healthier food choices — all through natural conversation.
      </p>

      {/* Voice Component Container */}
      <div className="p-6 w-full sm:max-w-xl md:max-w-2xl bg-[#0B3C35]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#25D366]/30 hover:shadow-[#25D366]/40 transition-all duration-300">
        <VoiceComponent />
      </div>

      {/* Footer */}
      <small className="text-xs text-gray-300 mt-8 italic text-center max-w-xs mb-6">
        Please allow microphone access to start your healthy eating journey.
      </small>

      {/* Branding Note */}
      <small className="text-sm text-[#25D366] font-medium tracking-wide">
        Powered by HealthyChat
      </small>
    </main>
  );
}
