
import React from 'react';
import { DeviceIcon } from '../icons/DeviceIcon';
import { ServerIcon } from '../icons/ServerIcon';

export const FederatedLearningDiagram: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-[400px]">
            <div className="relative w-full max-w-4xl flex items-center justify-between">
                {/* Devices */}
                <div className="flex flex-col items-center space-y-4">
                    <DeviceIcon className="h-16 w-16 text-text-primary" />
                    <span className="font-semibold text-sm">Device 1</span>
                    <div className="text-xs text-center text-text-secondary">Local Data</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <DeviceIcon className="h-16 w-16 text-text-primary" />
                    <span className="font-semibold text-sm">Device 2</span>
                     <div className="text-xs text-center text-text-secondary">Local Data</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <DeviceIcon className="h-16 w-16 text-text-primary" />
                    <span className="font-semibold text-sm">Device N</span>
                     <div className="text-xs text-center text-text-secondary">Local Data</div>
                </div>

                {/* Arrows */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" className="fill-brand-primary" />
                        </marker>
                    </defs>
                    {/* Upload */}
                    <path d="M100 100 Q 250 20, 500 100" strokeDasharray="5,5" className="stroke-brand-primary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    <path d="M500 100 Q 500 100, 500 100" strokeDasharray="5,5" className="stroke-brand-primary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    <path d="M900 100 Q 750 20, 500 100" strokeDasharray="5,5" className="stroke-brand-primary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    {/* Download */}
                    <path d="M500 100 Q 250 180, 100 100" className="stroke-brand-secondary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    <path d="M500 100 Q 500 100, 500 100" className="stroke-brand-secondary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    <path d="M500 100 Q 750 180, 900 100" className="stroke-brand-secondary" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                </svg>
            </div>
            
            <div className="mt-20 text-center">
                 <ServerIcon className="h-20 w-20 mx-auto text-text-primary animate-pulse-slow"/>
                 <span className="font-semibold text-lg mt-2 block">Central Server</span>
                 <p className="text-xs text-text-secondary max-w-xs mx-auto mt-2">
                    <span className="text-brand-primary font-bold">Upload:</span> Local model updates (not data) <br/>
                    <span className="text-brand-secondary font-bold">Download:</span> Updated global model
                 </p>
            </div>
        </div>
    );
};
