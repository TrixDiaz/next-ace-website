"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import LabPricelistTableSection from './sections/pricelist';

export const Price: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPriceList = () => {
        setIsOpen(true);
    };

    return (
        <div className="">
            <Button
                variant="outline"
                onClick={openPriceList}
            >
                View Price List
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] w-[90vw] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Laboratory Price List</DialogTitle>
                    </DialogHeader>
                    <LabPricelistTableSection />
                </DialogContent>
            </Dialog>
        </div>
    );
};