import React, { useState, useEffect } from 'react';
import { Cloud, DollarSign, RefreshCw, Sun, CloudRain } from 'lucide-react';

export default function DashboardStatus() {
    const [weather, setWeather] = useState(null);
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);

    // Kuala Lumpur Coordinates
    const KL_LAT = 3.1390;
    const KL_LON = 101.6869;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Weather (Open-Meteo)
                const weatherRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${KL_LAT}&longitude=${KL_LON}&current=temperature_2m,weather_code&timezone=auto`
                );
                const weatherData = await weatherRes.json();

                // 2. Fetch Exchange Rates (Exchangerate-API) - Base MYR
                const rateRes = await fetch('https://open.er-api.com/v6/latest/MYR');
                const rateData = await rateRes.json();

                if (weatherData && rateData) {
                    setWeather({
                        temp: Math.round(weatherData.current.temperature_2m),
                        code: weatherData.current.weather_code
                    });
                    setRates({
                        TWD: rateData.rates.TWD.toFixed(2),
                        THB: rateData.rates.THB.toFixed(2)
                    });
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Weather Code Interpretation
    const getWeatherIcon = (code) => {
        if (code <= 3) return <Sun size={16} className="text-gold-500" />;
        if (code >= 51) return <CloudRain size={16} className="text-teal-500" />;
        return <Cloud size={16} className="text-sand-400" />;
    };

    if (loading) return null; // Or a small skeleton loader

    return (
        <div className="mx-6 mt-4 mb-2 grid grid-cols-2 gap-3 animate-fadeIn">
            {/* Weather Widget */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                <div className="bg-sand-50 p-2 rounded-full">
                    {weather ? getWeatherIcon(weather.code) : <Cloud size={16} />}
                </div>
                <div>
                    <h3 className="text-[10px] uppercase font-bold text-jungle-800/40 tracking-wider">KL Weather</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-jungle-900 font-mono">{weather?.temp}°C</span>
                    </div>
                </div>
            </div>

            {/* Currency Widget */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand-200 rounded-xl p-3 flex flex-col justify-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-10">
                    <DollarSign size={40} />
                </div>
                <h3 className="text-[10px] uppercase font-bold text-jungle-800/40 tracking-wider mb-1">Exchange Rates</h3>
                <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-jungle-800/60">TWD</span>
                        <span className="text-sm font-bold text-gold-600 font-mono">{rates?.TWD}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-t border-sand-100 pt-0.5">
                        <span className="text-xs font-medium text-jungle-800/60">THB</span>
                        <span className="text-sm font-bold text-teal-600 font-mono">{rates?.THB}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
