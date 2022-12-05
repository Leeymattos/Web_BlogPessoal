import { Theme } from "./Theme";

export interface Post {
    id: number;
    title: string;
    text: string;
    theme?: Theme | null
}