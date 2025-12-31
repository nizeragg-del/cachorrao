import React, { createContext, useContext, useState, useEffect } from 'react';
import { Client, Washing } from '../types';

interface DataContextType {
    clients: Client[];
    washings: Washing[];
    addClient: (client: Omit<Client, 'id' | 'initials' | 'totalSpent' | 'lastVisit'>) => void;
    addWashing: (washing: Omit<Washing, 'id' | 'status'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [clients, setClients] = useState<Client[]>(() => {
        const saved = localStorage.getItem('clients');
        return saved ? JSON.parse(saved) : [];
    });

    const [washings, setWashings] = useState<Washing[]>(() => {
        const saved = localStorage.getItem('washings');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients));
    }, [clients]);

    useEffect(() => {
        localStorage.setItem('washings', JSON.stringify(washings));
    }, [washings]);

    const addClient = (clientData: Omit<Client, 'id' | 'initials' | 'totalSpent' | 'lastVisit'>) => {
        const newClient: Client = {
            ...clientData,
            id: Math.random().toString(36).substr(2, 9),
            initials: clientData.name.split(' ').map(n => n[0]).join('').toUpperCase().substr(0, 2),
            totalSpent: 0,
            lastVisit: 'Recém cadastrado',
            isVip: false
        };
        setClients(prev => [newClient, ...prev]);
    };

    const addWashing = (washingData: Omit<Washing, 'id' | 'status'>) => {
        const newWashing: Washing = {
            ...washingData,
            id: Math.random().toString(36).substr(2, 9),
            status: 'Agendado'
        };
        setWashings(prev => [newWashing, ...prev]);
    };

    return (
        <DataContext.Provider value={{ clients, washings, addClient, addWashing }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
