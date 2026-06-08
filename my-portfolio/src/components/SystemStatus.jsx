import React, { useMemo } from 'react';
import { Terminal, Activity, GitCommit, Zap } from 'lucide-react';

const SystemStatus = () => {
  // Generate random mock contribution data (35 weeks to fit nicely on most screens without scrolling)
  const weeks = 35;
  const daysPerWeek = 7;
  
  const contributionData = useMemo(() => {
    const data = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Generate a random intensity between 0 and 4
        const rand = Math.random();
        let intensity = 0;
        if (rand > 0.95) intensity = 4;
        else if (rand > 0.85) intensity = 3;
        else if (rand > 0.70) intensity = 2;
        else if (rand > 0.50) intensity = 1;
        
        week.push(intensity);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getIntensityClass = (intensity) => {
    switch(intensity) {
      case 4: return 'bg-ember opacity-100';
      case 3: return 'bg-ember opacity-75';
      case 2: return 'bg-ember opacity-50';
      case 1: return 'bg-ember opacity-25';
      default: return 'bg-border/30'; // Base empty state
    }
  };

  return (
    <section className="border-t border-border bg-surface py-12 font-mono">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-5 h-5 text-ink-light" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink">System Metrics & Activity</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left: Metrics */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-l-2 border-ember pl-4">
              <div className="flex items-center gap-2 text-[11px] text-ink-light uppercase tracking-wider">
                <Activity className="w-3 h-3" /> System Status
              </div>
              <div className="text-sm font-medium text-ink flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                All Systems Operational
              </div>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-border pl-4">
              <div className="flex items-center gap-2 text-[11px] text-ink-light uppercase tracking-wider">
                <Zap className="w-3 h-3" /> Uptime
              </div>
              <div className="text-sm font-medium text-ink">
                99.99% (Last 30 Days)
              </div>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-border pl-4">
              <div className="flex items-center gap-2 text-[11px] text-ink-light uppercase tracking-wider">
                <GitCommit className="w-3 h-3" /> Last Deployment
              </div>
              <div className="text-sm font-medium text-ink">
                2 hours ago (v2.4.1)
              </div>
            </div>
          </div>

          {/* Right: Contribution Graph */}
          <div className="lg:col-span-3">
            <div className="flex flex-col">
              <div className="text-[11px] text-ink-light uppercase tracking-wider mb-4 flex justify-between items-center">
                <span>Contribution Activity</span>
                <span className="text-ink font-medium tracking-normal">1,402 Contributions</span>
              </div>
              
              {/* Hide scrollbar trick via Tailwind class or inline style */}
              <div 
                className="flex gap-1 overflow-x-auto pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {contributionData.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1 shrink-0">
                    {week.map((intensity, dIndex) => (
                      <div 
                        key={`${wIndex}-${dIndex}`} 
                        className={`w-3 h-3 rounded-[2px] transition-colors duration-300 hover:ring-1 hover:ring-ink ${getIntensityClass(intensity)}`}
                        title={`Activity level ${intensity}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-[10px] text-ink-light mt-2 justify-end w-full">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-[2px] bg-border/30" />
                  <div className="w-3 h-3 rounded-[2px] bg-ember opacity-25" />
                  <div className="w-3 h-3 rounded-[2px] bg-ember opacity-50" />
                  <div className="w-3 h-3 rounded-[2px] bg-ember opacity-75" />
                  <div className="w-3 h-3 rounded-[2px] bg-ember opacity-100" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemStatus;
