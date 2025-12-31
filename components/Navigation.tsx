import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path
            ? "text-primary border-primary border-b-2 pb-0.5 font-bold"
            : "text-[#111418] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium";
    };

    const linkClass = (path: string) => {
        const baseClass = "text-sm leading-normal transition-colors cursor-pointer ";
        return baseClass + isActive(path);
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-3 shadow-sm">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-primary no-underline group">
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">local_car_wash</span>
                    <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Cachorrão</h2>
                </Link>

                {/* Search Bar (Visible on larger screens) */}
                <label className="hidden md:flex flex-col min-w-40 h-10 w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                        <div className="text-[#617589] dark:text-gray-400 flex border-none bg-[#f0f2f4] dark:bg-[#2A3B4C] items-center justify-center pl-4 pr-2">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-[#2A3B4C] focus:border-none h-full placeholder:text-[#617589] dark:placeholder:text-gray-500 px-2 text-sm font-normal leading-normal" placeholder="Buscar cliente, placa..." />
                    </div>
                </label>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-1 justify-end gap-6 items-center">
                <nav className="hidden lg:flex items-center gap-6">
                    <Link to="/" className={linkClass("/")}>Dashboard</Link>
                    <Link to="/lavagens" className={linkClass("/lavagens")}>Lavagens</Link>
                    <Link to="/clientes" className={linkClass("/clientes")}>Clientes</Link>
                    <Link to="/relatorios" className={linkClass("/relatorios")}>Relatórios</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center rounded-lg size-10 bg-[#f0f2f4] dark:bg-[#2A3B4C] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>

                    {/* Profile Dropdown */}
                    <div ref={menuRef} className="relative">
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-gray-600 shadow-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")' }}
                        >
                        </div>

                        {isMenuOpen && (
                            <div className="absolute right-0 top-12 z-50 w-56 bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-border-light dark:border-border-dark overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="p-3 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-[#1a2634]">
                                    <p className="font-bold text-[#111418] dark:text-white">Admin User</p>
                                    <p className="text-xs text-[#617589]">admin@cachorrao.com</p>
                                </div>
                                <div className="py-1">
                                    <button onClick={() => handleNavigate('/perfil')} className="w-full text-left px-4 py-2 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">person</span>
                                        Meu Perfil
                                    </button>
                                    <button onClick={() => handleNavigate('/servicos')} className="w-full text-left px-4 py-2 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">list_alt</span>
                                        Serviços
                                    </button>
                                    <button onClick={() => handleNavigate('/funcionarios')} className="w-full text-left px-4 py-2 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">badge</span>
                                        Funcionários
                                    </button>
                                    <button onClick={() => handleNavigate('/configuracoes')} className="w-full text-left px-4 py-2 text-sm text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">settings</span>
                                        Configurações
                                    </button>
                                    <div className="h-px bg-border-light dark:bg-gray-700 my-1"></div>
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">logout</span>
                                        Sair
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;