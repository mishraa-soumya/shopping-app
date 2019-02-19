export type TabID = number | string;

export interface TabItem {
    id: TabID;
    value: string;
}
export interface TabType {
    id: TabID;
    text: string;
}