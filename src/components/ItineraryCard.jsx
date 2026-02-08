import React from 'react';

const ItineraryCard = ({ activity, isLast }) => {
    const { time, title, desc, icon: Icon, type, highlight, camera } = activity;

    // Japanese Pure White Style Mappings
    // KL Urban Jungle Style Mappings
    const typeStyles = {
        transit: 'bg-sand-50 text-jungle-800/60 border-sand-100',
        stay: 'bg-sand-100/50 text-jungle-900 border-sand-200',
        dining: 'bg-gold-50 text-gold-600 border-gold-100', // Gold for food (Royal)
        shopping: 'bg-jungle-50 text-jungle-800 border-jungle-100', // Jungle Green for shopping (Abundance)
        activity: 'bg-teal-500/10 text-teal-600 border-teal-500/20', // Aqua for activities (Pool/River)
    };

    const styleClass = typeStyles[type] || 'bg-sand-50 text-jungle-800/40';

    return (
        <div className={`relative flex gap-6 ${isLast ? '' : 'pb-12'}`}>

            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-[1px] bg-sand-200/80" />
            )}

            {/* Time & Icon Column */}
            <div className="flex flex-col items-center shrink-0 w-10 gap-2 pt-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10 transition-colors duration-300 ${highlight
                    ? 'bg-jungle-900 text-gold-500 ring-4 ring-gold-50 shadow-gold-500/20 shadow-lg'
                    : 'bg-white border border-sand-200 text-jungle-800/40'
                    }`}>
                    <Icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium text-jungle-800/40 font-mono tracking-tighter">{time}</span>
            </div>

            {/* Content Card */}
            <div className={`flex-1 group transition-all duration-500 ${highlight ? 'transform translate-x-1' : ''}`}>
                <div className={`
          p-5 rounded-3xl border transition-all duration-300 relative overflow-hidden
          ${highlight
                        ? 'bg-white border-gold-100 shadow-glass shadow-gold-500/5'
                        : 'bg-white/60 border-transparent hover:bg-white hover:border-sand-100 hover:shadow-lg hover:shadow-jungle-900/5'
                    }
        `}>
                    {/* Decorative accent for highlighted items */}
                    {highlight && <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50" />}

                    <div className="flex justify-between items-start relative z-10">
                        <h3 className={`text-base font-bold mb-1 leading-snug tracking-wide font-serif ${highlight ? 'text-jungle-900' : 'text-jungle-800/80'}`}>
                            {title}
                        </h3>
                    </div>

                    <p className="text-sm text-jungle-800/60 leading-relaxed font-light tracking-wide mb-3 relative z-10">
                        {desc}
                    </p>

                    {/* Camera Config Badge */}
                    {camera && (
                        <div className="mt-3 inline-flex flex-col gap-1 bg-sand-50 border border-sand-100 rounded-xl p-3 w-full sm:w-auto hover:border-gold-200 transition-colors group/camera relative z-10">
                            <div className="flex items-center gap-2 text-xs font-bold text-jungle-800 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                                <span>攝影配置 | {camera.mode}</span>
                            </div>
                            <div className="text-[10px] text-jungle-800/40 flex flex-col gap-0.5 pl-3.5 border-l border-gold-200">
                                <span className="font-medium text-jungle-800/60">{camera.desc}</span>
                                <span className="font-mono text-jungle-800/40 opacity-80">{camera.settings}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
