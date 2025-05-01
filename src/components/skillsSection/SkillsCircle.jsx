import React from "react";
import { FcSettings } from "react-icons/fc";

const metrics = [
  { label: "SYSTEM_SECURITY", value: 92 },
  { label: "NETWORK_ANALYSIS", value: 88 },
  { label: "THREAT_DETECTION", value: 85 },
  { label: "EXPLOIT_MITIGATION", value: 90 },
];

const SkillsCircle = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Matrix background effect */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      
      <div className="bg-black/30 p-6 border border-accent/30 rounded-lg relative">
        <div className="terminal-header flex items-center gap-2 mb-6 pb-2 border-b border-accent/30">
          <div className="w-2 h-2 rounded-full bg-accent/50"></div>
          <div className="w-2 h-2 rounded-full bg-accent/30"></div>
          <div className="w-2 h-2 rounded-full bg-accent/20"></div>
        </div>

        <p className="text-accent mb-6 font-code">{">"} analyzing_security_metrics</p>
        
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between mb-2">
                <span className="text-accent/80 font-code text-sm">{metric.label}</span>
                <span className="text-accent font-code text-sm">{metric.value}%</span>
              </div>
              <div className="h-2 bg-black/50 rounded-sm overflow-hidden border border-accent/20">
                <div 
                  className="h-full bg-accent/30 relative"
                  style={{ 
                    width: `${metric.value}%`,
                    animation: `matrix-scan 2s linear infinite`,
                  }}
                >
                  <div className="absolute inset-0 matrix-bg"></div>
                </div>
              </div>
              {/* Scanning line effect */}
              <div 
                className="absolute top-0 left-0 w-full h-full opacity-50"