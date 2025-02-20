'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

function calculateTax(annualIncome: number): number {
  if (annualIncome <= 600000) {
    return 0;
  } else if (annualIncome <= 1200000) {
    return (annualIncome - 600000) * 0.15;
  } else if (annualIncome <= 1600000) {
    return 90000 + (annualIncome - 1200000) * 0.2;
  } else if (annualIncome <= 3200000) {
    return 170000 + (annualIncome - 1600000) * 0.3;
  } else if (annualIncome <= 5600000) {
    return 650000 + (annualIncome - 3200000) * 0.4;
  } else {
    return 1610000 + (annualIncome - 5600000) * 0.45;
  }
}

export default function TaxCalculator() {
  const [income, setIncome] = useState<string>(''); // user input (monthly salary)
  const [calculatedIncome, setCalculatedIncome] = useState<number>(0); // monthly salary stored on calculate
  const [monthlyTax, setMonthlyTax] = useState<number>(0);
  const [yearlyIncome, setYearlyIncome] = useState<number>(0);
  const [yearlyTax, setYearlyTax] = useState<number>(0);
  const [monthlyAfterTax, setMonthlyAfterTax] = useState<number>(0);
  const [yearlyAfterTax, setYearlyAfterTax] = useState<number>(0);

  const handleCalculate = () => {
    const incomeValue = parseFloat(income.replace(/,/g, ''));
    if (!isNaN(incomeValue) && incomeValue > 0) {
      setCalculatedIncome(incomeValue);
      const computedYearlyIncome = incomeValue * 12;
      const computedYearlyTax = calculateTax(computedYearlyIncome);
      const computedMonthlyTax = computedYearlyTax / 12;
      setMonthlyTax(computedMonthlyTax);
      setYearlyIncome(computedYearlyIncome);
      setYearlyTax(computedYearlyTax);
      setMonthlyAfterTax(incomeValue - computedMonthlyTax);
      setYearlyAfterTax(computedYearlyIncome - computedYearlyTax);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="max-w-md">
        <h2 className="text-2xl font-bold text-[#3180d4]">Salary Tax</h2>
        <h3 className="text-3xl font-bold">Calculator</h3>
        <p className="text-gray-600 mt-4">
          Our salary tax calculator helps you calculate tax based on the latest regulations in Pakistan.
        </p>
      </div>
      <Card className="p-6 w-full max-w-lg">
        <CardContent className="flex flex-col gap-4">
          <Input
            type="text"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter Monthly Salary"
          />
          <Button onClick={handleCalculate} className="bg-[#3c71aa] text-white">
            Calculate
          </Button>
          <div className="grid grid-cols-2 gap-4 border-t pt-4 mt-4 text-center">
            <div>
              <p className="text-gray-500">Monthly Salary</p>
              <p className="text-xl font-bold">{calculatedIncome.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Monthly Tax</p>
              <p className="text-xl font-bold">{monthlyTax.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Yearly Salary</p>
              <p className="text-xl font-bold">{yearlyIncome.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Yearly Tax</p>
              <p className="text-xl font-bold">{yearlyTax.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Salary After Tax</p>
              <p className="text-xl font-bold">{monthlyAfterTax.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Salary After Tax (Yearly)</p>
              <p className="text-xl font-bold">{yearlyAfterTax.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
