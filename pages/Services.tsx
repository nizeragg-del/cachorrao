import React from 'react';
import Navigation from '../components/Navigation';

const Services: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-[#111418] dark:text-white text-3xl font-black">Serviços</h1>
                        <button className="h-10 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined">add</span>
                            Novo Serviço
                        </button>
                    </div>

                    <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] shadow-sm overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-[#24303f]">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-[#617589]">Nome</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-[#617589]">Preço</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-[#617589]">Duração Est.</th>
                                    <th className="px-6 py-4 text-right text-sm font-bold text-[#617589]">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2a3b4d]">
                                {[
                                    { name: 'Lavagem Simples', price: 50, duration: '40 min' },
                                    { name: 'Lavagem Completa', price: 80, duration: '1h 20min' },
                                    { name: 'Polimento', price: 250, duration: '3h' },
                                    { name: 'Higienização Interna', price: 150, duration: '2h' },
                                ].map((service, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-[#24303f]/50">
                                        <td className="px-6 py-4 text-[#111418] dark:text-white font-medium">{service.name}</td>
                                        <td className="px-6 py-4 text-[#111418] dark:text-white">R$ {service.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 text-[#111418] dark:text-white">{service.duration}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-[#617589] hover:text-primary p-2">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Services;
