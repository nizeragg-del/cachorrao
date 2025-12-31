import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AppointmentModal from '../components/AppointmentModal';
import { useData } from '../context/DataContext';

const Dashboard: React.FC = () => {
    const { washings, addWashing, updateWashingStatus, deleteWashing } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const handleNewAppointment = (data: any) => {
        addWashing(data);
    };

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

    // Filter for today's washings
    const today = new Date().toISOString().split('T')[0];
    const todaysWashings = washings.filter(w => w.date === today);

    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
            <Navigation />
            <main className="flex-1 px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full">
                {/* Quick Stats Row */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Stat Card 1 */}
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Lavagens Hoje</p>
                            <span className="material-symbols-outlined text-primary">local_car_wash</span>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">{todaysWashings.length}</p>
                            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-[#078838] dark:text-green-400 text-xs">trending_up</span>
                                <p className="text-[#078838] dark:text-green-400 text-xs font-bold">+20%</p>
                            </div>
                        </div>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Faturamento</p>
                            <span className="material-symbols-outlined text-primary">payments</span>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">R$ {(todaysWashings.length * 50).toFixed(2)}</p>
                            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-[#078838] dark:text-green-400 text-xs">trending_up</span>
                                <p className="text-[#078838] dark:text-green-400 text-xs font-bold">+5%</p>
                            </div>
                        </div>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Fila de Espera</p>
                            <span className="material-symbols-outlined text-orange-500">timer</span>
                        </div>
                        <div className="flex items-end gap-3">
                            <p className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">{todaysWashings.filter(w => w.status === 'Agendado').length}</p>
                            <div className="flex items-center gap-1 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-[#e73908] dark:text-red-400 text-xs">trending_down</span>
                                <p className="text-[#e73908] dark:text-red-400 text-xs font-bold">-10%</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Workspace Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar: Calendar & Filters */}
                    <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
                        <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 shadow-sm">
                            <div className="flex items-center justify-between p-2 mb-2">
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-[#111418] dark:text-white">
                                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                                </button>
                                <p className="text-[#111418] dark:text-white text-base font-bold">Hoje</p>
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-[#111418] dark:text-white">
                                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                                </button>
                            </div>
                            {/* Calendar content placeholder - can remain static for now */}
                            <div className="flex items-center justify-center h-40 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-400 text-sm">
                                Calendário Simplificado
                            </div>
                        </div>
                        <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 shadow-sm">
                            <h3 className="font-bold text-[#111418] dark:text-white mb-3">Funcionários Ativos</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xs font-bold">JD</div>
                                    <div>
                                        <p className="text-sm font-medium text-[#111418] dark:text-white">João D.</p>
                                        <p className="text-xs text-green-600 font-medium">Livre</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">MS</div>
                                    <div>
                                        <p className="text-sm font-medium text-[#111418] dark:text-white">Maria S.</p>
                                        <p className="text-xs text-orange-500 font-medium">Ocupada</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold">CP</div>
                                    <div>
                                        <p className="text-sm font-medium text-[#111418] dark:text-white">Carlos P.</p>
                                        <p className="text-xs text-orange-500 font-medium">Ocupado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Schedule Section */}
                    <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between items-end gap-3 mb-2">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Agenda do Dia</h1>
                                <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Hoje, {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-colors shadow-lg shadow-blue-500/30"
                            >
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span className="truncate">Novo Agendamento</span>
                            </button>
                        </div>
                        {/* Appointments Table */}
                        <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm min-h-[400px]">
                            <div className="overflow-visible">
                                <table className="w-full min-w-[800px]">
                                    <thead className="bg-gray-50 dark:bg-[#23303E] border-b border-border-light dark:border-border-dark">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Horário / Data</th>
                                            <th className="px-6 py-4 text-left text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Cliente / Veículo</th>
                                            <th className="px-6 py-4 text-left text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Serviço</th>
                                            <th className="px-6 py-4 text-left text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Placa</th>
                                            <th className="px-6 py-4 text-left text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-4 text-right text-[#617589] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light dark:divide-border-dark pb-20">
                                        {todaysWashings.length === 0 ? (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-10 text-center text-[#617589] dark:text-gray-400 italic">
                                                    Nenhum agendamento para hoje. Clique em "Novo Agendamento" para começar.
                                                </td>
                                            </tr>
                                        ) : (
                                            todaysWashings.map(washing => (
                                                <tr key={washing.id} className="hover:bg-gray-50 dark:hover:bg-[#23303E] transition-colors group relative">
                                                    <td className="px-6 py-4 text-[#111418] dark:text-white text-sm font-bold">
                                                        <div className="flex flex-col">
                                                            <span>{washing.time}</span>
                                                            <span className="text-[10px] text-gray-500 font-normal">{washing.date}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-[#111418] dark:text-white text-sm font-semibold">{washing.clientName}</span>
                                                            <span className="text-[#617589] dark:text-gray-400 text-xs">{washing.vehicleModel} - {washing.vehicleColor}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-[#111418] dark:text-white text-sm">{washing.serviceType}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-mono border border-gray-200 dark:border-gray-600">{washing.vehiclePlate}</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${washing.status === 'Agendado' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' :
                                                            washing.status === 'Em Andamento' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                                                                'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                                                            }`}>
                                                            <span className={`size-1.5 rounded-full ${washing.status === 'Agendado' ? 'bg-yellow-500' :
                                                                washing.status === 'Em Andamento' ? 'bg-blue-500 animate-pulse' :
                                                                    'bg-green-500'
                                                                }`}></span>{washing.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right relative">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveMenuId(activeMenuId === washing.id ? null : washing.id);
                                                            }}
                                                            className="text-[#617589] hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                            <span className="material-symbols-outlined">more_vert</span>
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
                                                                            if (confirm("Tem certeza que deseja cancelar este agendamento?")) {
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
                            <div className="flex items-center justify-between p-4 border-t border-border-light dark:border-border-dark">
                                <p className="text-xs text-[#617589] dark:text-gray-400">Mostrando {todaysWashings.length} agendamentos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewAppointment}
            />
        </div>
    );
};

export default Dashboard;