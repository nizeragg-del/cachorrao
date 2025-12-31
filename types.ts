export interface Client {
    id: string;
    name: string;
    initials: string;
    email: string;
    phone: string;
    vehicleModel: string;
    vehiclePlate: string;
    vehicleColor: string;
    lastVisit: string;
    totalSpent: number;
    isVip: boolean;
}

export interface Washing {
    id: string;
    time: string;
    date: string;
    clientName: string;
    vehicleModel: string;
    vehiclePlate: string;
    vehicleColor: string;
    serviceType: string;
    status: 'Agendado' | 'Em Andamento' | 'Concluído' | 'Aguardando';
}

export interface Stat {
    title: string;
    value: string;
    trend: number; // percentage
    trendDirection: 'up' | 'down';
    icon: string;
}

export enum ReportType {
    REVENUE = 'Faturamento',
    VOLUME = 'Volume',
    TEAM = 'Equipe'
}