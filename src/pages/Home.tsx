import React, { useState } from 'react';
import MedicineList from '../components/MedicineList';

interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Home: React.FC = () => {
  const [medicines] = useState<Medicine[]>([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'Pain reliever and fever reducer',
      price: 50,
      stock: 100
    },
    {
      id: 2,
      name: 'Ibuprofen 400mg',
      description: 'Anti-inflammatory drug',
      price: 80,
      stock: 75
    },
    {
      id: 3,
      name: 'Amoxicillin 250mg',
      description: 'Antibiotic for bacterial infections',
      price: 120,
      stock: 50
    },
    {
      id: 4,
      name: 'Cetirizine 10mg',
      description: 'Antihistamine for allergies',
      price: 45,
      stock: 90
    },
    {
      id: 5,
      name: 'Omeprazole 20mg',
      description: 'Proton pump inhibitor for acid reflux',
      price: 95,
      stock: 60
    }
  ]);

  return (
    <div className="page-content">
      <h1>Welcome to MedStore - Bangalore</h1>
      <p>Your trusted medical medicine online store</p>
      <p>Contact: sumitsinghrajput56@gmail.com | Location: Bangalore, India</p>
      <MedicineList medicines={medicines} />
    </div>
  );
};

export default Home;
