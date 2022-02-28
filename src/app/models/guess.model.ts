import { Pion } from "./pion.model";

export interface Guess{
    pions: Pion[];
    white?: number;
    black?: number;
    essai?: number;
}