export interface ICard {
    id?: string;
    title: string;
    description: string | null;
    position: number;
    status_id: string;
    board_id: string;
    created_at?: string;
    updated_at?: string;
}
export interface ReorderBody {
    sourceCardId: string;
    moveTo: {
        targetCardId: string;
        position: 'top' | 'bottom';
    };
}
