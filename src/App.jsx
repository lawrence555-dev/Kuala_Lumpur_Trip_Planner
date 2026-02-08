import React, { useState } from 'react';
import { itineraryData } from './data/itinerary';
import ItineraryCard from './components/ItineraryCard';
import { Calendar, Info, Aperture, ChevronDown, ChevronUp } from 'lucide-react';
import CameraGuide from './components/CameraGuide';

function App() {
  const [activeDay, setActiveDay] = useState(1);
  const [showCameraGuide, setShowCameraGuide] = useState(true);

  // Filter current day's data
  const currentDayData = itineraryData.find(d => d.day === activeDay);

  return (
    <div className="min-h-screen bg-sand-50 flex justify-center font-sans tracking-wide text-jungle-900">
      {/* Mobile Container Limit */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl shadow-jungle-900/10 relative pb-20 overflow-hidden border-x border-sand-200">

        {/* Minimal Header */}
        <header className="pt-12 pb-6 px-6 bg-white/80 backdrop-blur-md relative z-50">
          <div className="flex items-baseline justify-between mb-4">
            <h1 className="text-3xl font-serif font-bold text-jungle-900 tracking-tight">
              吉隆坡 <span className="text-gold-600 font-sans font-light text-xl">2026</span>
            </h1>
            <span className="p-2 bg-sand-100 rounded-full border border-sand-200">
              <span className="text-[10px] font-bold tracking-[0.2em] text-jungle-800 block px-1">MY.TRIP</span>
            </span>
          </div>
          <p className="text-xs text-jungle-800/60 tracking-widest uppercase font-medium pl-1 border-l-2 border-gold-500">
            A Family Photography Journey
          </p>
        </header>

        {/* Global Camera Guide (Collapsible) */}
        <div className="mx-6 mb-6">
          <button
            onClick={() => setShowCameraGuide(!showCameraGuide)}
            className="w-full flex items-center justify-between p-3 bg-jungle-900 text-sand-50 rounded-t-xl shadow-lg shadow-jungle-900/20"
          >
            <div className="flex items-center gap-2">
              <Aperture size={16} className="text-teal-500" />
              <span className="text-xs font-bold tracking-widest uppercase">X-M5 Master Config</span>
            </div>
            {showCameraGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showCameraGuide && <CameraGuide />}
        </div>

        {/* Day Selector (Minimal Tab) */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-sand-200 py-2 px-6 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-4">
            {itineraryData.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`
                  flex flex-col items-center justify-center min-w-[50px] py-2 px-1 rounded-lg transition-all duration-300 shrink-0 select-none
                  ${activeDay === day.day
                    ? 'text-jungle-900 scale-105'
                    : 'text-sand-200 hover:text-jungle-800/60'
                  }
                `}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${activeDay === day.day ? 'opacity-100' : 'opacity-0'}`}>DAY</span>
                <span className={`text-2xl font-serif font-light ${activeDay === day.day ? 'font-medium' : ''}`}>{day.day}</span>
                {activeDay === day.day && <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="px-6 py-8 animate-fadeIn">
          <div className="mb-10 pl-2">
            <span className="text-xs font-bold text-gold-600 tracking-widest uppercase mb-2 block">{currentDayData.date}</span>
            <h2 className="text-2xl font-serif font-medium text-jungle-900 mb-3 leading-snug">{currentDayData.title}</h2>
            <p className="text-sm text-jungle-800/70 leading-relaxed font-light border-l border-sand-200 pl-4">
              {currentDayData.summary}
            </p>
          </div>

          <div className="space-y-6">
            {currentDayData.activities.map((activity, index) => (
              <ItineraryCard
                key={index}
                activity={activity}
                isLast={index === currentDayData.activities.length - 1}
              />
            ))}
          </div>

          {/* Practical Notes Section (Minimal) */}
          {currentDayData.notes && currentDayData.notes.length > 0 && (
            <div className="mt-12 border-t border-sand-200 pt-8">
              <h3 className="text-[10px] font-bold text-jungle-800/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Info size={12} /> Notes & Backup
              </h3>
              <div className="space-y-4">
                {currentDayData.notes.map((note, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-sand-50 rounded-xl border border-sand-100/50">
                    <div className="text-gold-600 shrink-0 mt-0.5">
                      <note.icon size={16} />
                    </div>
                    <p className="text-xs text-jungle-800/80 leading-relaxed font-medium">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
