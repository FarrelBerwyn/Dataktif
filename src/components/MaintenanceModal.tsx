import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wrench, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

export const MaintenanceModal: React.FC<MaintenanceModalProps> = ({
  isOpen,
  onClose,
  featureName
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: ENTERPRISE_EASING }}
            className="relative w-full max-w-md bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden z-10"
          >
            {/* Top Accent Silk Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

            <div className="p-6 sm:p-8">
              {/* Top Bar: Icon & Close button */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-xs">
                  <Wrench className="w-6 h-6 animate-pulse" />
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Pemberitahuan Sistem</span>
              </div>

              {/* Title: Prompt specifically requested "On Maintanance" */}
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">
                On Maintenance
              </h3>

              {/* Feature Target Name if provided */}
              {featureName && (
                <div className="inline-block px-2.5 py-0.5 mb-3 rounded-md bg-neutral-100 text-neutral-700 text-xs font-mono font-medium">
                  {featureName}
                </div>
              )}

              {/* Explanation */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Halaman dan fitur ini saat ini sedang dalam tahap pemeliharaan sistem (On Maintenance) untuk pembaruan fitur enterprise Dataktif. Kami sedang meningkatkan performa dan kapabilitas integrasi agar memberikan pengalaman terbaik bagi organisasi Anda.
              </p>

              {/* Status info box */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2.5 mb-6 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Status: <strong>Sedang Diperbarui (Maintenance Mode)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Versi: <strong>Dataktif Enterprise 2.4+</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="w-full py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Mengerti</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
