import { alice, vastago } from '../fonts';

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gradient-to-r from-[#A07CFE] via-[#FE8FB5] to-[#FFBE7B] bg-clip-text text-transparent animate-gradient">
    {children}
  </span>
);

export default function ProfilePage() {
  return (
    <div className={`min-h-screen bg-[#1a1a1a] pt-24 ${alice.variable} ${vastago.variable}`}>
      <div className="max-w-4xl mx-auto px-8">
        <h1 className={`${alice.className} text-4xl font-bold text-white text-center mb-12`}>
          Your <GradientText>Profile</GradientText>
        </h1>
        
        <div className="bg-[#252525] rounded-xl shadow-lg overflow-hidden border border-[#2a2a2a]">
          <div className="p-8 flex flex-col items-center border-b border-[#2a2a2a]">
            <div className="relative h-24 w-24 mb-6 ring-2 ring-rose-400/30 rounded-full overflow-hidden bg-rose-400 flex items-center justify-center text-white text-4xl">
              D
            </div>
            <h2 className={`${vastago.className} text-2xl font-bold text-white mb-2`}>
              Demo User
            </h2>
            <p className="text-[#666666]">demo@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 