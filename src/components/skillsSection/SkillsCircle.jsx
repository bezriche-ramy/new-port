import React from "react";
import { FcSettings } from "react-icons/fc";

const metrics = [
  { label: "Frontend Development", value: 95 },
  { label: "Backend Development", value: 88 },
  { label: "UI/UX Design", value: 85 },
  { label: "Database Management", value: 90 },
];

const SkillsCircle = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card-elevated p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <FcSettings className="w-12 h-12 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-black mb-2">Expertise Levels</h3>
          <p className="text-muted text-sm">Professional proficiency across key areas</p>
        </div>
        
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-black font-medium text-sm">{metric.label}</span>
                <span className="text-accent font-semibold text-sm">{metric.value}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-highlight rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-muted text-sm">
            Continuously improving and learning new technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCircle;