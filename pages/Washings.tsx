import React from 'react';
import Navigation from '../components/Navigation';

const Washings: React.FC = () => {
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
                            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-all shadow-sm">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span>Nova Lavagem</span>
                            </button>
                        </div>
                        
                        <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] p-4 shadow-sm flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <label className="flex flex-col flex-1 min-w-[200px] relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#617589]">search</span>
                                    <input className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#24303f] dark:text-white h-12 pl-12 pr-4 text-base placeholder:text-[#617589] focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Buscar por cliente ou placa" />
                                </label>
                                <label className="flex flex-col w-full md:w-64 relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#617589]">calendar_today</span>
                                    <input className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#24303f] dark:text-white h-12 pl-12 pr-4 text-base placeholder:text-[#617589] focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[#617589]" type="date"/>
                                </label>
                            </div>
                            <div className="flex gap-2 flex-wrap items-center">
                                <span className="text-xs font-semibold uppercase text-[#617589] mr-2">Status:</span>
                                <button className="flex h-8 items-center justify-center px-4 rounded-full bg-[#111418] text-white text-sm font-medium transition-colors">Todos</button>
                                <button className="flex h-8 items-center justify-center px-4 rounded-full bg-[#f0f2f4] dark:bg-[#24303f] text-[#111418] dark:text-white hover:bg-[#dbe0e6] dark:hover:bg-[#334155] text-sm font-medium transition-colors">Em Andamento</button>
                                <button className="flex h-8 items-center justify-center px-4 rounded-full bg-[#f0f2f4] dark:bg-[#24303f] text-[#111418] dark:text-white hover:bg-[#dbe0e6] dark:hover:bg-[#334155] text-sm font-medium transition-colors">Aguardando</button>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 overflow-hidden rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] bg-white dark:bg-[#1a2634] shadow-sm">
                            <div className="overflow-x-auto">
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
                                        <tr className="group hover:bg-gray-50 dark:hover:bg-[#24303f]/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-[#617589] dark:text-[#94a3b8] text-sm">#1024</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">24 Out</span>
                                                    <span className="text-xs text-[#617589]">14:30</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm font-medium">Carlos Silva</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-[#111418] dark:text-white text-sm font-medium">Honda Civic</span>
                                                    <span className="text-xs text-[#617589] uppercase">ABC-1234</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">Completa + Cera</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>Em Andamento
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-[#617589] hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a3b4d]">
                                                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                            <tr className="group hover:bg-gray-50 dark:hover:bg-[#24303f]/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-[#617589] dark:text-[#94a3b8] text-sm">#1023</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">24 Out</span>
                                                    <span className="text-xs text-[#617589]">13:15</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm font-medium">Ana Souza</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-[#111418] dark:text-white text-sm font-medium">Fiat Argo</span>
                                                    <span className="text-xs text-[#617589] uppercase">XYZ-9876</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[#111418] dark:text-white text-sm">Simples</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold">
                                                    Concluído
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-[#617589] hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a3b4d]">
                                                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Washings;