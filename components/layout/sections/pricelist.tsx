"use client"
import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface LabTest {
    category: string;
    test: string;
    code: string;
    fairviewPrice: number;
    novalichesPrice: number;
    valenzuelaPrice: number;
}

const LabPricelistTableSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Clinical Microscopy');
    const [selectedBranch, setSelectedBranch] = useState('Fairview');

    const labTests: LabTest[] = [
        // Clinical Microscopy
        { category: 'Clinical Microscopy', test: 'URINALYSIS', code: 'P', fairviewPrice: 100.00, novalichesPrice: 110.00, valenzuelaPrice: 95.00 },
        { category: 'Clinical Microscopy', test: 'FECALYSIS', code: '', fairviewPrice: 100.00, novalichesPrice: 95.00, valenzuelaPrice: 105.00 },
        { category: 'Clinical Microscopy', test: 'OCCULT BLOOD', code: '', fairviewPrice: 100.00, novalichesPrice: 105.00, valenzuelaPrice: 90.00 },
        { category: 'Clinical Microscopy', test: 'PREGNANCY TEST (TEST PACK)', code: '', fairviewPrice: 150.00, novalichesPrice: 140.00, valenzuelaPrice: 155.00 },
        { category: 'Clinical Microscopy', test: 'SERUM PREGTEST', code: '', fairviewPrice: 250.00, novalichesPrice: 260.00, valenzuelaPrice: 245.00 },
        { category: 'Clinical Microscopy', test: 'MICRAL TEST', code: '', fairviewPrice: 300.00, novalichesPrice: 290.00, valenzuelaPrice: 310.00 },

        // Clinical Chemistry
        { category: 'Clinical Chemistry', test: 'FASTING BLOOD SUGAR (FBS)', code: 'P', fairviewPrice: 90.00, novalichesPrice: 85.00, valenzuelaPrice: 95.00 },
        { category: 'Clinical Chemistry', test: 'RANDOM BLOOD SUGAR (RBS)', code: '', fairviewPrice: 90.00, novalichesPrice: 95.00, valenzuelaPrice: 85.00 },
        { category: 'Clinical Chemistry', test: 'POST PRANDIAL BLOOD SUGAR (PPBS)', code: '', fairviewPrice: 140.00, novalichesPrice: 145.00, valenzuelaPrice: 135.00 },
        { category: 'Clinical Chemistry', test: 'BLOOD UREA NITROGEN (BUN)', code: '', fairviewPrice: 110.00, novalichesPrice: 105.00, valenzuelaPrice: 115.00 },
        { category: 'Clinical Chemistry', test: 'CREATININE', code: '', fairviewPrice: 130.00, novalichesPrice: 125.00, valenzuelaPrice: 135.00 },
        { category: 'Clinical Chemistry', test: 'URIC ACID', code: '', fairviewPrice: 110.00, novalichesPrice: 115.00, valenzuelaPrice: 105.00 },
        { category: 'Clinical Chemistry', test: 'CHOLESTEROL', code: '', fairviewPrice: 180.00, novalichesPrice: 175.00, valenzuelaPrice: 185.00 },
        { category: 'Clinical Chemistry', test: 'TRIGLYCERIDES', code: '', fairviewPrice: 260.00, novalichesPrice: 270.00, valenzuelaPrice: 250.00 },
        { category: 'Clinical Chemistry', test: 'LIPID PROFILE (Chole, TAG, HDL,LDL,VLDL)', code: '', fairviewPrice: 600.00, novalichesPrice: 580.00, valenzuelaPrice: 620.00 },
        { category: 'Clinical Chemistry', test: 'BILIRUBIN', code: '', fairviewPrice: 250.00, novalichesPrice: 255.00, valenzuelaPrice: 245.00 },
        { category: 'Clinical Chemistry', test: 'ALBUMIN', code: '', fairviewPrice: 200.00, novalichesPrice: 195.00, valenzuelaPrice: 205.00 },
        { category: 'Clinical Chemistry', test: 'TOTAL PROTEIN (Albumin, Globulin, A/G Ratio)', code: '', fairviewPrice: 400.00, novalichesPrice: 420.00, valenzuelaPrice: 390.00 },
        { category: 'Clinical Chemistry', test: '2Hr. ORAL GLUCOSE TOLERANCE TEST (OGTT)', code: '', fairviewPrice: 700.00, novalichesPrice: 680.00, valenzuelaPrice: 720.00 },
        { category: 'Clinical Chemistry', test: '3 Hr. OGTT', code: '', fairviewPrice: 1000.00, novalichesPrice: 1050.00, valenzuelaPrice: 980.00 },
        { category: 'Clinical Chemistry', test: 'HBA1C (GLYCOSYLATED Hgb)', code: '', fairviewPrice: 600.00, novalichesPrice: 590.00, valenzuelaPrice: 610.00 },
        { category: 'Clinical Chemistry', test: 'ORAL GLUCOSE CHALLENGE TEST (OGCT)', code: '', fairviewPrice: 300.00, novalichesPrice: 310.00, valenzuelaPrice: 290.00 },
        { category: 'Clinical Chemistry', test: 'EGFR', code: '', fairviewPrice: 280.00, novalichesPrice: 275.00, valenzuelaPrice: 285.00 },

        // Hematology
        { category: 'Hematology', test: 'COMPLETE BLOOD COUNT', code: '', fairviewPrice: 300.00, novalichesPrice: 320.00, valenzuelaPrice: 295.00 },
        { category: 'Hematology', test: 'ERYTHROCYTE SEDIMENTATION RATE (ESR)', code: '', fairviewPrice: 140.00, novalichesPrice: 135.00, valenzuelaPrice: 145.00 },
        { category: 'Hematology', test: 'RETICULOCYTE COUNT', code: '', fairviewPrice: 180.00, novalichesPrice: 185.00, valenzuelaPrice: 175.00 },
        { category: 'Hematology', test: 'PROTHROMBIN TIME (PTPA)', code: '', fairviewPrice: 400.00, novalichesPrice: 390.00, valenzuelaPrice: 410.00 },
        { category: 'Hematology', test: 'PLASMA THROMBOPLASTIN TIME (PTT)', code: '', fairviewPrice: 450.00, novalichesPrice: 460.00, valenzuelaPrice: 440.00 },
        { category: 'Hematology', test: 'CLOTTING TIME/BLEEDING TIME', code: '', fairviewPrice: 140.00, novalichesPrice: 145.00, valenzuelaPrice: 135.00 },
        { category: 'Hematology', test: 'BLOOD TYPING (ABO & Rh)', code: '', fairviewPrice: 200.00, novalichesPrice: 195.00, valenzuelaPrice: 205.00 },

        // Serology
        { category: 'Serology', test: 'VDRL/ RPR', code: '', fairviewPrice: 140.00, novalichesPrice: 150.00, valenzuelaPrice: 135.00 },
        { category: 'Serology', test: 'RHEUMATOID FACTOR (RA/RF)', code: '', fairviewPrice: 300.00, novalichesPrice: 290.00, valenzuelaPrice: 310.00 },
        { category: 'Serology', test: 'DENGUE NS1', code: '', fairviewPrice: 1200.00, novalichesPrice: 1250.00, valenzuelaPrice: 1180.00 },
        { category: 'Serology', test: 'DENGUE BLOT (IGG/IGM)', code: '', fairviewPrice: 1200.00, novalichesPrice: 1180.00, valenzuelaPrice: 1220.00 },
        { category: 'Serology', test: 'DENGUE DUO (NS1/IGG,IGM)', code: '', fairviewPrice: 1800.00, novalichesPrice: 1750.00, valenzuelaPrice: 1850.00 },
        { category: 'Serology', test: 'LIVER FUNCTION TEST ( LFT)', code: '', fairviewPrice: 1280.00, novalichesPrice: 1300.00, valenzuelaPrice: 1260.00 },
        { category: 'Serology', test: 'HBsAg SCREENING TEST', code: '', fairviewPrice: 300.00, novalichesPrice: 295.00, valenzuelaPrice: 305.00 },

        // Electrolytes
        { category: 'Electrolytes', test: 'SODIUM (Na+)', code: '', fairviewPrice: 190.00, novalichesPrice: 200.00, valenzuelaPrice: 185.00 },
        { category: 'Electrolytes', test: 'POTASSIUM (K+)', code: '', fairviewPrice: 190.00, novalichesPrice: 185.00, valenzuelaPrice: 195.00 },
        { category: 'Electrolytes', test: 'CHLORIDE (Cl )', code: '', fairviewPrice: 190.00, novalichesPrice: 195.00, valenzuelaPrice: 185.00 },
        { category: 'Electrolytes', test: 'CALCIUM (Ca++)', code: '', fairviewPrice: 280.00, novalichesPrice: 275.00, valenzuelaPrice: 285.00 },
        { category: 'Electrolytes', test: 'MAGNESIUM (Mg++)', code: '', fairviewPrice: 450.00, novalichesPrice: 470.00, valenzuelaPrice: 440.00 },
        { category: 'Electrolytes', test: 'PHOSPHORUS', code: '', fairviewPrice: 300.00, novalichesPrice: 290.00, valenzuelaPrice: 310.00 },
        { category: 'Electrolytes', test: 'IONIZED CALCIUM', code: '', fairviewPrice: 680.00, novalichesPrice: 700.00, valenzuelaPrice: 660.00 },

        // Thyroid Function Test
        { category: 'Thyroid Function Test', test: 'T3', code: '', fairviewPrice: 390.00, novalichesPrice: 385.00, valenzuelaPrice: 395.00 },
        { category: 'Thyroid Function Test', test: 'T4', code: '', fairviewPrice: 390.00, novalichesPrice: 395.00, valenzuelaPrice: 385.00 },
        { category: 'Thyroid Function Test', test: 'FT3', code: '', fairviewPrice: 520.00, novalichesPrice: 510.00, valenzuelaPrice: 530.00 },
        { category: 'Thyroid Function Test', test: 'FT4', code: '', fairviewPrice: 520.00, novalichesPrice: 530.00, valenzuelaPrice: 510.00 },
        { category: 'Thyroid Function Test', test: 'TSH', code: '', fairviewPrice: 580.00, novalichesPrice: 570.00, valenzuelaPrice: 590.00 },

        // Enzymes
        { category: 'Enzymes', test: 'SGPT (ALT)', code: '', fairviewPrice: 190.00, novalichesPrice: 195.00, valenzuelaPrice: 185.00 },
        { category: 'Enzymes', test: 'SGOT (AST)', code: '', fairviewPrice: 190.00, novalichesPrice: 185.00, valenzuelaPrice: 195.00 },
        { category: 'Enzymes', test: 'GGTP', code: '', fairviewPrice: 500.00, novalichesPrice: 520.00, valenzuelaPrice: 485.00 },
        { category: 'Enzymes', test: 'LDH', code: '', fairviewPrice: 300.00, novalichesPrice: 295.00, valenzuelaPrice: 305.00 },
        { category: 'Enzymes', test: 'ALKALINE PHOSPHATASE (ALP)', code: '', fairviewPrice: 250.00, novalichesPrice: 260.00, valenzuelaPrice: 245.00 },
        { category: 'Enzymes', test: 'ACID PHOSPHATASE', code: '', fairviewPrice: 550.00, novalichesPrice: 540.00, valenzuelaPrice: 560.00 },
        { category: 'Enzymes', test: 'AMYLASE', code: '', fairviewPrice: 350.00, novalichesPrice: 360.00, valenzuelaPrice: 340.00 },
        { category: 'Enzymes', test: 'LIPASE', code: '', fairviewPrice: 500.00, novalichesPrice: 485.00, valenzuelaPrice: 515.00 },
        { category: 'Enzymes', test: 'TOTAL CPK', code: '', fairviewPrice: 550.00, novalichesPrice: 565.00, valenzuelaPrice: 535.00 },

        // Tumor Markers
        { category: 'Tumor Markers', test: 'AFP', code: '', fairviewPrice: 1200.00, novalichesPrice: 1150.00, valenzuelaPrice: 1250.00 },
        { category: 'Tumor Markers', test: 'CEA - COLON', code: '', fairviewPrice: 1200.00, novalichesPrice: 1220.00, valenzuelaPrice: 1180.00 },
        { category: 'Tumor Markers', test: 'PROSTATIC SPECIFIC ANTIGEN (PSA)', code: '', fairviewPrice: 1450.00, novalichesPrice: 1400.00, valenzuelaPrice: 1500.00 },
        { category: 'Tumor Markers', test: 'B-HCG', code: '', fairviewPrice: 1200.00, novalichesPrice: 1250.00, valenzuelaPrice: 1180.00 },
        { category: 'Tumor Markers', test: 'CA 125 - OVARY', code: '', fairviewPrice: 2050.00, novalichesPrice: 2100.00, valenzuelaPrice: 2000.00 },
        { category: 'Tumor Markers', test: 'CA 15.3 -', code: '', fairviewPrice: 2500.00, novalichesPrice: 2450.00, valenzuelaPrice: 2550.00 },
        { category: 'Tumor Markers', test: 'CA 19.9 - BREAST', code: '', fairviewPrice: 2800.00, novalichesPrice: 2750.00, valenzuelaPrice: 2850.00 },
        { category: 'Tumor Markers', test: 'CA 72.3', code: '', fairviewPrice: 2800.00, novalichesPrice: 2850.00, valenzuelaPrice: 2750.00 }
    ];

    const categories = [...new Set(labTests.map(test => test.category))];
    const branches = ['Fairview', 'Novaliches', 'Valenzuela'];

    const filteredTests = useMemo(() => {
        return labTests.filter(test => {
            const matchesSearch = test.test.toLowerCase().includes(searchTerm.toLowerCase()) ||
                test.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, labTests]);

    const getCurrentPrice = (test: LabTest): number => {
        switch (selectedBranch) {
            case 'Fairview':
                return test.fairviewPrice;
            case 'Novaliches':
                return test.novalichesPrice;
            case 'Valenzuela':
                return test.valenzuelaPrice;
            default:
                return test.fairviewPrice;
        }
    };


    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-md">
            {/* Header - reduced vertical spacing */}
            <div className="text-center mb-2">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">LABORATORY PRICELIST</h1>
                <p className="text-xs text-gray-600 dark:text-white">CN# 0514-2025</p>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{selectedBranch}</p>
            </div>

            {/* Search and Filter Controls - more compact layout */}
            <div className="mb-2 flex flex-col gap-1">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                    <input
                        type="text"
                        placeholder="Search tests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-7 pr-2 py-1 text-sm border border-gray-300 rounded"
                    />
                </div>

                <div className="flex gap-1">
                    <div className="relative flex-1">
                        <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                        <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                            <SelectTrigger className="w-full pl-7 h-8 text-sm">
                                <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                            <SelectContent>
                                {branches.map(branch => (
                                    <SelectItem key={branch} value={branch}>
                                        {branch}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="relative flex-1">
                        <Filter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full pl-7 h-8 text-sm">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Table - reduced cell padding */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 text-sm">
                    <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left font-semibold text-gray-900 dark:text-gray-100">Test</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center font-semibold text-gray-900 dark:text-gray-100">Code</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-right font-semibold text-gray-900 dark:text-gray-100">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredTests.map((test, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 font-medium text-gray-900 dark:text-gray-100">{test.test}</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-center text-gray-700 dark:text-gray-300">{test.code}</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-right font-semibold text-gray-900 dark:text-gray-100">
                                ₱{getCurrentPrice(test).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Footer - reduced spacing */}
            <div className="mt-2 text-center text-xs text-gray-600 dark:text-white space-y-1">
                <p className="font-medium">***Prices are subject to change without prior notice***</p>
                <p>Please call us for price of other special tests not on the list</p>
                <p className="italic">Updated Pricelist as of May 14, 2025</p>
            </div>

            {searchTerm && (
                <div className="mt-2 text-xs text-gray-600 text-center dark:text-white">
                    Showing {filteredTests.length} test(s) matching &ldquo;{searchTerm}&rdquo; for {selectedBranch}
                </div>
            )}
        </div>
    );
};

export default LabPricelistTableSection;