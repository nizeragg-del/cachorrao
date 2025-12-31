import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Profile: React.FC = () => {
    const [name, setName] = useState('Admin User');
    const [email, setEmail] = useState('admin@cachorrao.com');

    return (
        <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[#111418] dark:text-white text-3xl font-black mb-8">Meu Perfil</h1>

                    <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#dbe0e6] dark:border-[#2a3b4d] p-6 shadow-sm">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="size-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-[#1a2634] shadow-lg">
                                AU
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111418] dark:text-white">{name}</h3>
                                <p className="text-[#617589]">Administrador</p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Nome Completo</span>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-gray-50 dark:bg-[#24303f] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/50"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Email</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex w-full rounded-lg border border-[#dbe0e6] dark:border-[#2a3b4d] bg-gray-50 dark:bg-[#24303f] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/50"
                                />
                            </label>

                            <div className="flex justify-end pt-4">
                                <button className="h-10 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-colors">
                                    Salvar Alterações
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
