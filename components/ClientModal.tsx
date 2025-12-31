import React, { useState } from 'react';

interface ClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        vehicleModel: '',
        vehiclePlate: '',
        vehicleColor: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
        setFormData({
            name: '',
            phone: '',
            email: '',
            vehicleModel: '',
            vehiclePlate: '',
            vehicleColor: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-surface-light dark:bg-surface-dark w-full max-w-md rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
                    <h2 className="text-xl font-bold text-[#111418] dark:text-white">Cadastrar Novo Cliente</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Nome Completo</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome do cliente"
                            className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">WhatsApp / Fone</label>
                            <input
                                required
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemplo@email.com"
                                className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="border-t border-border-light dark:border-border-dark pt-4">
                        <h3 className="text-sm font-bold text-[#111418] dark:text-white mb-4">Informações do Veículo</h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Modelo / Marca</label>
                                <input
                                    required
                                    type="text"
                                    name="vehicleModel"
                                    value={formData.vehicleModel}
                                    onChange={handleChange}
                                    placeholder="Ex: Toyota Corolla"
                                    className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Placa</label>
                                    <input
                                        required
                                        type="text"
                                        name="vehiclePlate"
                                        value={formData.vehiclePlate}
                                        onChange={handleChange}
                                        placeholder="ABC-1234"
                                        className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all font-mono uppercase"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-[#617589] dark:text-gray-400">Cor</label>
                                    <input
                                        required
                                        type="text"
                                        name="vehicleColor"
                                        value={formData.vehicleColor}
                                        onChange={handleChange}
                                        placeholder="Ex: Prata"
                                        className="w-full h-11 px-4 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
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
                            className="flex-1 h-11 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors"
                        >
                            Salvar Cliente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientModal;
