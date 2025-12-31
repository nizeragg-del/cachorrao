import React from 'react';
import Navigation from '../components/Navigation';

const Settings: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[#111418] dark:text-white text-3xl font-black mb-8">Configurações</h1>

                    <div className="flex flex-col gap-6">
                        <section className="bg-white dark:bg-[#1a2634] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] shadow-sm">
                            <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">Geral</h2>
                            <div className="flex items-center justify-between py-3 border-b border-[#dbe0e6] dark:border-[#2a3b4d]">
                                <div>
                                    <p className="font-medium text-[#111418] dark:text-white">Modo Escuro</p>
                                    <p className="text-sm text-[#617589]">Ativar tema escuro na aplicação</p>
                                </div>
                                <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-3 pt-4">
                                <div>
                                    <p className="font-medium text-[#111418] dark:text-white">Notificações</p>
                                    <p className="text-sm text-[#617589]">Receber alertas de novos agendamentos</p>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-[#1a2634] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] shadow-sm">
                            <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">Sistema</h2>
                            <div className="flex flex-col gap-4">
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#24303f] transition-colors text-[#111418] dark:text-white font-medium">
                                    Backup de Dados
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#24303f] transition-colors text-[#111418] dark:text-white font-medium">
                                    Restaurar padrão de fábrica
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-red-600 font-medium">
                                    Encerrar Sessão
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
