import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const { clients } = useData();
    const [selectedClientId, setSelectedClientId] = useState('');
    const [formData, setFormData] = useState({
        clientName: '',
        vehicleModel: '',
        vehiclePlate: '',
        vehicleColor: '',
        serviceType: 'Lavagem Simples',
        time: '',
        date: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        if (selectedClientId) {
            const client = clients.find(c => c.id === selectedClientId);
            if (client) {
                setFormData(prev => ({
                    ...prev,
                    clientName: client.name,
                    vehicleModel: client.vehicleModel,
                    vehiclePlate: client.vehiclePlate,
                    vehicleColor: client.vehicleColor
                }));
            }
        }
    }, [selectedClientId, clients]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
        setSelectedClientId('');
        setFormData({
            clientName: '',
            vehicleModel: '',
            vehiclePlate: '',
            vehicleColor: '',
            serviceType: 'Lavagem Simples',
            time: '',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-surface-light dark:bg-surface-dark w-full max-w-md rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
                    <h2 className="text-xl font-bold text-[#111418] dark:text-white">Novo Agendamento</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Selecionar Cliente</label>
                        <select
                            required
                            value={selectedClientId}
                            onChange={(e) => setSelectedClientId(e.target.value)}
                            className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="">-- Selecione um cliente --</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name} ({client.vehiclePlate})</option>
                            ))}
                        </select>
                        {clients.length === 0 && (
                            <p className="text-xs text-orange-500 font-medium">Nenhum cliente cadastrado. Cadastre um cliente primeiro!</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-dashed border-border-light dark:border-border-dark">
                        <div className="flex flex-col">
                            <span className="text-gray-500 uppercase font-bold">Veículo</span>
                            <span className="text-[#111418] dark:text-white font-medium">{formData.vehicleModel || '-'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 uppercase font-bold">Placa</span>
                            <span className="text-[#111418] dark:text-white font-mono font-medium">{formData.vehiclePlate || '-'}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Data</label>
                            <input
                                required
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Horário</label>
                            <input
                                required
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Serviço</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="Lavagem Simples">Lavagem Simples</option>
                            <option value="Lavagem Completa">Lavagem Completa</option>
                            <option value="Ducha">Ducha</option>
                            <option value="Higienização Interna">Higienização Interna</option>
                        </select>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-11 rounded-lg border border-border-light dark:border-border-dark text-[#617589] dark:text-gray-400 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={!selectedClientId}
                            className="flex-1 h-11 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;
