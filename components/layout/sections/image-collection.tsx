'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Images, Filter, X } from 'lucide-react';

type BranchType = 'fairview' | 'novaliches' | 'valenzuela';

interface ImageData {
    id: number;
    src: string;
    branch: BranchType;
    title: string;
}

interface Branch {
    id: 'all' | BranchType;
    label: string;
    color: string;
}

export const ImageGalleryDialog = () => {
    const [selectedBranch, setSelectedBranch] = useState<'all' | BranchType>('all');
    const [isOpen, setIsOpen] = useState(false);

    const images: ImageData[] = [
        { id: 1, src: '/fairview/facilities/lobby.jpg', branch: 'fairview', title: 'Lobby' },
        { id: 2, src: '/fairview/facilities/ace-front.jpg', branch: 'novaliches', title: 'Front' },
        { id: 3, src: '/fairview/facilities/cashier.jpg', branch: 'valenzuela', title: 'Cashier' },
        { id: 4, src: '/fairview/facilities/ctscan.jpg', branch: 'fairview', title: 'CT-Scan' },
        { id: 5, src: '/fairview/facilities/doctorsclinic.jpg', branch: 'fairview', title: 'Doctors Clinic' },
        { id: 6, src: '/fairview/facilities/ecg.jpg', branch: 'fairview', title: 'ECG' },
        { id: 7, src: '/fairview/facilities/echo.jpg', branch: 'novaliches', title: 'Echo' },
        { id: 8, src: '/fairview/facilities/kiosk.jpg', branch: 'valenzuela', title: 'Kiosk' },
        { id: 9, src: '/fairview/facilities/laboratory.jpg', branch: 'valenzuela', title: 'Laboratory' },
        { id: 10, src: '/fairview/facilities/ultrasound.jpg', branch: 'novaliches', title: 'Ultrasound' },
        { id: 11, src: '/fairview/facilities/pedia-room.jpg', branch: 'fairview', title: 'Pedia Room' },
        { id: 12, src: '/fairview/facilities/stress.jpg', branch: 'novaliches', title: 'Stress Test' },
    ];

    const branches: Branch[] = [
        { id: 'all', label: 'All Branches', color: 'bg-slate-100 text-slate-800 hover:bg-slate-200' },
        { id: 'fairview', label: 'Fairview', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
        { id: 'novaliches', label: 'Novaliches', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
        { id: 'valenzuela', label: 'Valenzuela', color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
    ];

    const filteredImages = selectedBranch === 'all' ? images : images.filter(img => img.branch === selectedBranch);

    const getBranchColor = (branch: BranchType): string => {
        const branchColors: Record<BranchType, string> = {
            fairview: 'bg-blue-500',
            novaliches: 'bg-green-500',
            valenzuela: 'bg-purple-500',
        };
        return branchColors[branch];
    };

    return (
        <div>
            <Button onClick={() => setIsOpen(true)} className="flex items-center gap-2 text-white">
                <Images className="w-5 h-5" />
                Check out our facilities
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white w-[90vw] h-[90vh] rounded-lg shadow-lg overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="px-6 py-4 border-b bg-white/80 sticky top-0 z-10">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <Images className="w-6 h-6 text-primary" />
                                    Branches Facilities
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-red-100 dark:text-black"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Filters */}
                            <div className="flex items-center gap-2 mt-4">
                                <Filter className="w-4 h-4 text-gray-500" />
                                <div className="flex flex-wrap gap-2">
                                    {branches.map(branch => (
                                        <Badge
                                            key={branch.id}
                                            onClick={() => setSelectedBranch(branch.id)}
                                            className={`cursor-pointer transition-all duration-200 ${
                                                selectedBranch === branch.id
                                                    ? 'bg-primary text-white'
                                                    : branch.color
                                            }`}
                                        >
                                            {branch.label}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredImages.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
                                        style={{
                                            animationName: 'fadeInUp',
                                            animationDuration: '0.6s',
                                            animationTimingFunction: 'ease-out',
                                            animationFillMode: 'forwards',
                                            animationDelay: `${index * 0.1}s`,
                                            opacity: 0,
                                            transform: 'translateY(20px)'
                                        }}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden relative">
                                            <Image
                                                src={image.src}
                                                alt={image.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                                                    {image.title}
                                                </h3>
                                                <div className={`w-3 h-3 rounded-full ${getBranchColor(image.branch)}`} />
                                            </div>
                                            <Badge variant="outline" className="text-xs capitalize">
                                                {image.branch}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredImages.length === 0 && (
                                <div className="text-center py-20">
                                    <Images className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-500 mb-2">No images found</h3>
                                    <p className="text-gray-400">Try selecting a different branch filter</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t bg-white/80">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Showing {filteredImages.length} of {images.length} projects</span>
                                <span>Filter: {branches.find(b => b.id === selectedBranch)?.label}</span>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
            @keyframes fadeInUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
                </div>
            )}
        </div>
    );
};
