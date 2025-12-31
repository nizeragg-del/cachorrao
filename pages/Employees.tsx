import React from 'react';
import Navigation from '../components/Navigation';

const Employees: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-[#111418] dark:text-white text-3xl font-black">Funcionários</h1>
                        <button className="h-10 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined">add</span>
                            Novo Funcionário
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'João da Silva', role: 'Lavador', status: 'Ativo' },
                            { name: 'Maria Souza', role: 'Gerente', status: 'Ativo' },
                            { name: 'Carlos Pereira', role: 'Polidor', status: 'Férias' },
                        ].map((emp, i) => (
                            <div key={i} className="bg-white dark:bg-[#1a2634] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {emp.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#111418] dark:text-white">{emp.name}</h3>
                                    <p className="text-sm text-[#617589]">{emp.role}</p>
                                </div>
                                <span className={`ml-auto px-2 py-1 rounded text-xs font-bold ${emp.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {emp.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Employees;
