import { type WebsiteItem } from "@/@types/website"

export interface DropDownProps {
    data: WebsiteItem[];
    value: string;
    onChange: (value: string) => void;
}