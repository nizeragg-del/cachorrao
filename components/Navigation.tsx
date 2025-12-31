import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();
    
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
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-gray-600 shadow-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all" 
                         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")'}}>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;