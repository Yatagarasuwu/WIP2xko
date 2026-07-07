export type Board = {
    id: string;

    title: string;
    description: string;

    champions: string[];

    resourceIds: string[];

    notes: string;

    isPublic: boolean;
};