import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Users, ShieldCheck } from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setEmail('');
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ duration: 0.3, ease: ENTERPRISE_EASING }}
            className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden z-10"
          >
            {/* Top Accent Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />

            <div className="p-6 sm:p-8">
              {/* Top Bar: Close button */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isSubmitted ? (
                <>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-2">
                    Coming Soon
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    Sesi demo interaktif Dataktif Enterprise sedang dalam tahap persiapan akhir. Daftarkan email perusahaan Anda pada <strong>Waitlist</strong> untuk mendapatkan undangan akses prioritas dan demo langsung bersama arsitek solusi kami.
                  </p>

                  {/* Waitlist Form */}
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    {/* Waitlist Button with Hover & Tap Animations */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 28px -4px rgba(26, 86, 219, 0.45)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                      <span>{isLoading ? 'Mendaftarkan...' : 'Waitlist'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>

                  {/* Security Guarantee Note */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero-Spam & PDP Compliant</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>150+ Enterprise in queue</span>
                    </div>
                  </div>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h4 className="text-xl font-bold text-neutral-900 tracking-tight">
                    Terima Kasih! Anda Masuk Waitlist
                  </h4>

                  <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Email <strong>{email || 'perusahaan Anda'}</strong> telah diprioritaskan dalam antrean demo enterprise Dataktif. Kami akan segera mengirimkan jadwal briefing privat.
                  </p>

                  <div className="pt-2">
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-full text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
                    >
                      Tutup
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
