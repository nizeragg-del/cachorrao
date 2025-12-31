import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useData } from '../context/DataContext';
import AppointmentModal from '../components/AppointmentModal';
import { Washing } from '../types';

const Washings: React.FC = () => {
    const { washings, addWashing, updateWashingStatus, deleteWashing } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [filterStatus, setFilterStatus] = useState<'Todos' | 'Em Andamento' | 'Aguardando'>('Todos');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenuId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter Logic
    const filteredWashings = washings.filter(washing => {
        const matchesSearch =
            washing.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            washing.vehiclePlate.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = filterDate ? washing.date === filterDate : true;

        const matchesStatus = filterStatus === 'Todos'
            ? true
            : filterStatus === 'Aguardando'
                ? washing.status === 'Agendado'
                : washing.status === filterStatus;

        return matchesSearch && matchesDate && matchesStatus;
    });

    const handleNewWashing = (data: any) => {
        addWashing(data);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
            <Navigation />
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Lavagens</h2>
                                <p className="text-[#617589] dark:text-[#94a3b8] text-base font-normal leading-normal">Gerencie todas as lavagens agendadas, em andamento e realizadas.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-all shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span>Nova Lavagem</span>
                            </button>
                        </div>

                        <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] p-4 shadow-sm flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <label className="flex flex-col flex-1 min-w-[200px] relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#617589]">search</span>
                                    <input
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#24303f] dark:text-white h-12 pl-12 pr-4 text-base placeholder:text-[#617589] focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="Buscar por cliente ou placa"
                                    />
                                </label>
                                <label className="flex flex-col w-full md:w-64 relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#617589]">calendar_today</span>
                                    <input
                                        type="date"
                                        value={filterDate}
                                        onChange={(e) => setFilterDate(e.target.value)}
                                        className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#24303f] dark:text-white h-12 pl-12 pr-4 text-base placeholder:text-[#617589] focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[#617589]"
                                    />
                                </label>
                            </div>
                            <div className="flex gap-2 flex-wrap items-center">
                                <span className="text-xs font-semibold uppercase text-[#617589] mr-2">Status:</span>
                                {['Todos', 'Em Andamento', 'Aguardando'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setFilterStatus(status as any)}
                                        className={`flex h-8 items-center justify-center px-4 rounded-full text-sm font-medium transition-colors ${filterStatus === status
                                            ? 'bg-[#111418] text-white'
                                            : 'bg-[#f0f2f4] dark:bg-[#24303f] text-[#111418] dark:text-white hover:bg-[#dbe0e6] dark:hover:bg-[#334155]'
                                            }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 overflow-hidden rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#1a2634] shadow-sm pb-32">
                            <div className="overflow-visible">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-[#24303f] border-b border-[#dbe0e6] dark:border-[#2a3b4d]">
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">ID</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">Data/Hora</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">Cliente</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">Veículo</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">Serviço</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-4 text-[#111418] dark:text-white text-right text-xs font-bold uppercase tracking-wider">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2a3b4d]">
                                        {filteredWashings.length === 0 ? (
                                            <tr>
                                                <td colSpan={7} className="px-6 py-10 text-center text-[#617589] dark:text-[#94a3b8] italic">
                                                    Nenhuma lavagem encontrada.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredWashings.map((washing) => (
                                                <tr key={washing.id} className="group hover:bg-gray-50 dark:hover:bg-[#24303f]/50 transition-colors relative">
                                                    <td className="px-6 py-4 whitespace-nowrap text-[#617589] dark:text-[#94a3b8] text-sm">#{washing.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">
                                                        <div className="flex flex-col">
                                                            <span className="font-medium">{new Date(washing.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}</span>
                                                            <span className="text-xs text-[#617589]">{washing.time}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm font-medium">{washing.clientName}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex flex-col">
                                                            <span className="text-[#111418] dark:text-white text-sm font-medium">{washing.vehicleModel}</span>
                                                            <span className="text-xs text-[#617589] uppercase">{washing.vehiclePlate}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">{washing.serviceType}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${washing.status === 'Agendado' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                            washing.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                                                'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                            }`}>
                                                            {washing.status === 'Em Andamento' && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>}
                                                            {washing.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right relative">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveMenuId(activeMenuId === washing.id ? null : washing.id);
                                                            }}
                                                            className="text-[#617589] hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a3b4d]"
                                                        >
                                                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                        </button>

                                                        {activeMenuId === washing.id && (
                                                            <div
                                                                ref={menuRef}
                                                                className="absolute right-8 top-8 z-50 w-48 bg-white dark:bg-surface-dark rounded-lg shadow-xl border border-border-light dark:border-border-dark overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right text-left"
                                                            >
                                                                <div className="py-1">
                                                                    {washing.status === 'Agendado' && (
                                                                        <button
                                                                            onClick={() => {
                                                                                updateWashingStatus(washing.id, 'Em Andamento');
                                                                                setActiveMenuId(null);
                                                                            }}
                                                                            className="w-full text-left px-4 py-2.5 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                                                        >
                                                                            <span className="material-symbols-outlined text-blue-500 text-[18px]">play_arrow</span>
                                                                            Iniciar Lavagem
                                                                        </button>
                                                                    )}
                                                                    {washing.status === 'Em Andamento' && (
                                                                        <button
                                                                            onClick={() => {
                                                                                updateWashingStatus(washing.id, 'Concluído');
                                                                                setActiveMenuId(null);
                                                                            }}
                                                                            className="w-full text-left px-4 py-2.5 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                                                        >
                                                                            <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                                                                            Concluir Lavagem
                                                                        </button>
                                                                    )}

                                                                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>

                                                                    <button
                                                                        onClick={() => {
                                                                            if (confirm("Tem certeza que deseja cancelar esta lavagem?")) {
                                                                                deleteWashing(washing.id);
                                                                                setActiveMenuId(null);
                                                                            }
                                                                        }}
                                                                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                                                                    >
                                                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                                                        Cancelar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
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

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewWashing}
                initialStatus="Em Andamento"
            />
        </div>
    );
};

export default Washings;