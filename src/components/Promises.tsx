import { useReveal } from '../hooks/useReveal';

const Promises: React.FC = () => {
  const reveal1 = useReveal({ direction: 'left', duration: 1.2 });
  const reveal2 = useReveal({ direction: 'right', duration: 1.2 });
  const reveal3 = useReveal({ direction: 'left', duration: 1.2 });

  return (
    <div className="relative w-full">
      <div className="grid-lines fixed inset-0 z-0 pointer-events-none opacity-50"></div>

      {/* Promise 1 */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-[#FFFFFF] dark:bg-[#050505] z-10 border-b border-black/10 dark:border-white/10 px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm pointer-events-none">
          <div className="w-[80vw] h-[60vh] border-2 border-current rounded-xl"></div>
        </div>
        <div ref={reveal1} className="relative z-20 text-center">
          <span className="text-sm font-mono uppercase tracking-widest mb-4 block text-black dark:text-white">01. Dashboard</span>
          <h2 className="text-[15vw] md:text-[18vw] leading-none font-bold tracking-tighter uppercase text-black dark:text-white">
            Visibility
          </h2>
          <p className="text-xl md:text-3xl mt-8 font-light text-black dark:text-white text-center max-w-2xl mx-auto">
            All work. One place. Real-time visibility.
          </p>
        </div>
      </section>

      {/* Promise 2 */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-[#FFFFFF] dark:bg-[#050505] z-20 border-b border-black/10 dark:border-white/10 px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm pointer-events-none">
          <div className="w-[40vw] h-[40vw] rounded-full border-2 border-current"></div>
        </div>
        <div ref={reveal2} className="relative z-20 text-center">
          <span className="text-sm font-mono uppercase tracking-widest mb-4 block text-black dark:text-white">02. Task Flow</span>
          <h2 className="text-[15vw] md:text-[18vw] leading-none font-bold tracking-tighter uppercase text-black dark:text-white">
            Control
          </h2>
          <p className="text-xl md:text-3xl mt-8 font-light text-black dark:text-white text-center max-w-2xl mx-auto">
            Assign. Track. Control. Instantly.
          </p>
        </div>
      </section>

      {/* Promise 3 */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-[#FFFFFF] dark:bg-[#050505] z-30 border-b border-black/10 dark:border-white/10 px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm pointer-events-none">
          <div className="w-[60vw] h-[30vh] border-2 border-current transform skew-x-12"></div>
        </div>
        <div ref={reveal3} className="relative z-20 text-center">
          <span className="text-sm font-mono uppercase tracking-widest mb-4 block text-black dark:text-white">03. User</span>
          <h2 className="text-[15vw] md:text-[18vw] leading-none font-bold tracking-tighter uppercase text-black dark:text-white">
            Rewards
          </h2>
          <p className="text-xl md:text-3xl mt-8 font-light text-black dark:text-white text-center max-w-2xl mx-auto">
            Vouchers, experiences, and company perks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Promises;