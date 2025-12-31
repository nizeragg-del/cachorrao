import React from 'react';
import Navigation from '../components/Navigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Seg', value: 4200 },
  { name: 'Ter', value: 5800 },
  { name: 'Qua', value: 3500 },
  { name: 'Qui', value: 6900 },
  { name: 'Sex', value: 8900 },
  { name: 'Sáb', value: 9800 },
  { name: 'Dom', value: 6200 },
];

const Reports: React.FC = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
            <Navigation />
            <div className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-8">
                <div className="flex flex-col max-w-[1200px] w-full mx-auto flex-1 gap-8">
                    {/* Page Heading & Filters */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap justify-between gap-4 items-end">
                            <div className="flex min-w-72 flex-col gap-2">
                                <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Relatórios de Desempenho</h1>
                                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">Acompanhe as métricas e o crescimento do seu lava-rápido.</p>
                            </div>
                            <div className="flex flex-wrap items-end gap-3 w-full md:w-auto">
                                <label className="flex flex-col min-w-[160px] flex-1 md:flex-none">
                                    <span className="text-[#111418] dark:text-gray-300 text-xs font-medium leading-normal pb-1">Período</span>
                                    <div className="relative">
                                        <input className="form-input flex w-full md:w-48 rounded-lg text-[#111418] dark:text-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 focus:border-primary focus:ring-0 h-10 px-3 text-sm" type="date" defaultValue="2023-10-25"/>
                                    </div>
                                </label>
                                <label className="flex flex-col min-w-[160px] flex-1 md:flex-none">
                                    <span className="text-[#111418] dark:text-gray-300 text-xs font-medium leading-normal pb-1">Tipo de Relatório</span>
                                    <select className="form-select flex w-full md:w-48 rounded-lg text-[#111418] dark:text-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 focus:border-primary focus:ring-0 h-10 px-3 text-sm">
                                        <option>Faturamento</option>
                                        <option>Volume de Lavagens</option>
                                        <option>Desempenho da Equipe</option>
                                    </select>
                                </label>
                                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] shadow-sm shadow-blue-500/20">
                                    <span className="material-symbols-outlined text-[20px]">download</span>
                                    <span className="truncate">Exportar PDF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* KPI Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                         {[
                            { title: "Faturamento Total", icon: "payments", value: "R$ 12.450,00", grow: "+12%" },
                            { title: "Lavagens Realizadas", icon: "local_laundry_service", value: "342", grow: "+5%" },
                            { title: "Ticket Médio", icon: "receipt_long", value: "R$ 36,40", grow: "+2%" },
                            { title: "Novos Clientes", icon: "person_add", value: "48", grow: "+15%" },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-3 rounded-xl p-5 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                    <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">{stat.title}</p>
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-md text-xl">{stat.icon}</span>
                                </div>
                                <div>
                                    <p className="text-[#111418] dark:text-white tracking-tight text-2xl font-bold leading-tight">{stat.value}</p>
                                    <p className="text-[#078838] text-xs font-bold mt-1 bg-green-50 dark:bg-green-900/30 w-fit px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> {stat.grow} vs mês anterior
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Revenue Chart */}
                        <div className="lg:col-span-2 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm p-6 flex flex-col min-h-[400px]">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[#111418] dark:text-white text-lg font-bold">Evolução de Faturamento</h3>
                                <button className="text-primary text-sm font-semibold hover:underline">Ver Detalhes</button>
                            </div>
                            <div className="flex-1 w-full min-h-0">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                        <XAxis 
                                            dataKey="name" 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{ fill: '#6b7280', fontSize: 12 }} 
                                            dy={10}
                                        />
                                        <YAxis 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{ fill: '#6b7280', fontSize: 12 }}
                                            tickFormatter={(value) => `R$${value/1000}k`}
                                        />
                                        <Tooltip 
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Bar 
                                            dataKey="value" 
                                            fill="#137fec" 
                                            radius={[4, 4, 0, 0]} 
                                            barSize={32}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        {/* Services Breakdown */}
                        <div className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm p-6 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[#111418] dark:text-white text-lg font-bold">Serviços Populares</h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-center h-full">
                                {[
                                    {n: "Lavagem Completa", p: "45%", c: "bg-primary"},
                                    {n: "Ducha Simples", p: "30%", c: "bg-[#3c4a5b]"},
                                    {n: "Polimento", p: "15%", c: "bg-[#617589]"},
                                    {n: "Higienização Interna", p: "10%", c: "bg-[#9aa8b8]"},
                                ].map((svc, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-[#111418] dark:text-white">{svc.n}</span>
                                            <span className="font-bold text-[#111418] dark:text-gray-300">{svc.p}</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div className={`h-full ${svc.c} rounded-full transition-all duration-1000 ease-out`} style={{width: svc.p}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;