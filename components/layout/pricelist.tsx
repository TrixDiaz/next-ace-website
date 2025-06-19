import React from 'react';
import {Button} from '@/components/ui/button';

export const PriceList: React.FC = () => {
    const openPriceList = () => {
        // Assuming the PDF is in the public folder
        const pdfUrl = '/ace-pricelist-2025.pdf';
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="">
            <Button
                variant="outline"
                onClick={openPriceList} >
                View Price List
            </Button>
        </div>
    );
};
