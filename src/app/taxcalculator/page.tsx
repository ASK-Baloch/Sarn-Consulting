'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles, Calculator, Landmark, Banknote } from 'lucide-react';

function calculateBusinessTaxAnnual(annualIncome: number): number {
  if (annualIncome <= 600000) return 0;
  if (annualIncome <= 1200000) return (annualIncome - 600000) * 0.15;
  if (annualIncome <= 1600000) return 90000 + (annualIncome - 1200000) * 0.2;
  if (annualIncome <= 3200000) return 170000 + (annualIncome - 1600000) * 0.3;
  if (annualIncome <= 5600000) return 650000 + (annualIncome - 3200000) * 0.4;
  return 1610000 + (annualIncome - 5600000) * 0.45;
}

function calculateSalaryTaxAnnual(annualIncome: number): number {
  if (annualIncome <= 600000) return 0;
  if (annualIncome <= 1200000) return (annualIncome - 600000) * 0.05;
  if (annualIncome <= 2200000) return 30000 + (annualIncome - 600000) * 0.15;
  if (annualIncome <= 3200000) return 180000 + (annualIncome - 2200000) * 0.25;
  if (annualIncome <= 4100000) return 430000 + (annualIncome - 3200000) * 0.3;
  return 700000 + (annualIncome - 4100000) * 0.35;
}

const AnimatedSparkles = () => (
  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse-slow inline-block" />
);

export function BusinessSalaryTaxCalculator() {
  const [annualIncome, setAnnualIncome] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [taxType, setTaxType] = useState<'business' | 'salary'>('business');

  const handleCalculate = () => {
    const incomeValue = parseFloat(annualIncome.replace(/,/g, ''));
    if (!isNaN(incomeValue) && incomeValue > 0) {
      setResult(taxType === 'business' ? calculateBusinessTaxAnnual(incomeValue) : calculateSalaryTaxAnnual(incomeValue));
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12 mt-12 bg-gradient-to-br from-blue-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-white/10 my-5 mx-5">
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full opacity-20 blur-3xl translate-x-20 translate-y-20"></div>
      
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-md relative z-10 space-y-6 text-white text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:whitespace-nowrap md:mr-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          <AnimatedSparkles /> Tax Calculator
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 flex items-center justify-center md:justify-start gap-2">
          <Calculator className="w-6 h-6 text-blue-400" /> Annual Tax Estimator
        </h3>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
          Calculate your yearly tax liability for business/AOP or salary income. Get a quick estimate to help with your financial planning.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="w-full max-w-md relative z-10">
        <Card className="p-6 md:p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="flex flex-col gap-6">
            <Input type="text" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} placeholder="Enter Annual Income" className="text-xl py-3 px-4 border-2 border-blue-400/50 rounded-xl shadow-inner bg-black/20 text-white focus:ring-2 focus:ring-blue-400/70 transition-all placeholder:text-gray-400" />
            <div className="flex justify-center gap-4 md:gap-6">
              {['business', 'salary'].map(type => (
                <Button key={type} onClick={() => setTaxType(type as 'business' | 'salary')} className={cn(
                  "px-4 md:px-6 py-2 md:py-3 rounded-full text-lg font-semibold transition-all flex items-center gap-2",
                  taxType === type
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-blue-400 border-2 border-blue-500/30 hover:bg-blue-500/20 hover:scale-105',
                  "shadow-md hover:shadow-blue-500/30"
                )}>
                  {type === 'business' ? <Landmark className="w-5 h-5" /> : <Banknote className="w-5 h-5" />} {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </div>
            <Button onClick={handleCalculate} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold py-3 md:py-4 rounded-full shadow-lg hover:scale-105 transition-all shadow-blue-500/50">
              Calculate Tax
            </Button>
            {result !== null && (
              <div className="border-t pt-4 mt-6 text-center">
                <p className="text-gray-400 text-lg">Annual Tax</p>
                <p className="text-3xl font-bold text-white drop-shadow-md">PKR:{result.toFixed(2)}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function TaxCalculator() {
  return <div className="space-y-10"><BusinessSalaryTaxCalculator /></div>;
}
