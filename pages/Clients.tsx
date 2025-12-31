import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ClientModal from '../components/ClientModal';

const Clients: React.FC = () => {
    const { clients, addClient } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewClient = (data: any) => {
        addClient(data);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark">
            <Navigation />
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-6 py-8 max-w-[1200px]">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 items-center mb-6">
                            <Link to="/" className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[#617589] dark:text-gray-400 text-sm">chevron_right</span>
                            <span className="text-[#111418] dark:text-white text-sm font-medium">Clientes</span>
                        </div>
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight">Gerenciamento de Clientes</h1>
                                <p className="text-[#617589] dark:text-gray-400 text-base font-normal">Visualize e gerencie todos os seus clientes cadastrados e seus históricos.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold h-12 px-6 shadow-lg shadow-blue-500/20 transition-all active:scale-95 shrink-0"
                            >
                                <span className="material-symbols-outlined">add</span>
                                <span className="whitespace-nowrap">Novo Cliente</span>
                            </button>
                        </div>

                        {/* Search */}
                        <div className="bg-white dark:bg-[#1e2732] p-4 rounded-xl shadow-sm border border-[#dbe0e6] dark:border-gray-700 mb-6 flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#617589]">search</span>
                                <input className="w-full h-12 rounded-lg pl-12 pr-4 bg-[#f6f7f8] dark:bg-gray-800 border border-transparent focus:bg-white dark:focus:bg-[#1e2732] focus:border-primary focus:ring-0 text-[#111418] dark:text-white placeholder:text-[#617589] transition-all" placeholder="Buscar por nome, telefone ou placa..." />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white dark:bg-[#1e2732] rounded-xl shadow-sm border border-[#dbe0e6] dark:border-gray-700 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[#f6f7f8] dark:bg-gray-800 border-b border-[#dbe0e6] dark:border-gray-700">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider">Nome do Cliente</th>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider">Contato</th>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider">Veículo Principal</th>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider">Última Visita</th>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider text-right">Total Gasto</th>
                                            <th className="px-6 py-4 text-xs font-bold text-[#617589] dark:text-gray-400 uppercase tracking-wider text-center">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
                                        {clients.length === 0 ? (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-10 text-center text-[#617589] dark:text-gray-400 italic">
                                                    Nenhum cliente cadastrado. Clique em "Novo Cliente" para começar.
                                                </td>
                                            </tr>
                                        ) : (
                                            clients.map(client => (
                                                <tr key={client.id} className="group hover:bg-[#f8faff] dark:hover:bg-gray-800/50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">{client.initials}</div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[#111418] dark:text-white font-bold text-sm">{client.name}</span>
                                                                {client.isVip && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 w-fit">VIP</span>}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex flex-col">
                                                            <span className="text-[#111418] dark:text-white text-sm font-medium">{client.phone}</span>
                                                            <span className="text-[#617589] dark:text-gray-400 text-xs">{client.email}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-[#111418] dark:text-white text-sm font-medium">{client.vehicleModel} <span className="text-[#617589] dark:text-gray-400 font-normal">- {client.vehicleColor}</span></span>
                                                            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-[#111418] dark:text-gray-300 font-mono text-xs border border-gray-200 dark:border-gray-600 w-fit">{client.vehiclePlate}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 text-sm">
                                                            <span className="material-symbols-outlined text-xs">schedule</span>{client.lastVisit}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                                        <span className="text-[#111418] dark:text-white font-bold text-sm">R$ {client.totalSpent.toFixed(2)}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <button className="p-2 rounded-lg text-[#617589] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <ClientModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewClient}
            />
        </div>
    );
};

export default Clients;