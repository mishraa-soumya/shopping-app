export type StyleSheet = { [key: string]: string };
/**
 * Utility function to get cssClassNames for components
 * @param styles Loaded scss styles as StyleType
 * @param cssClasses Array of css classes that you want to apply
 */
export function getStyles(styles: StyleSheet, cssClasses: string[]): string {
    let classNames = '';
    if (cssClasses && cssClasses.length && !!styles) {
        cssClasses.map((className: string) => {
            classNames += styles[className] + ' ';
        });
    }
    return classNames;
}

export type TabID = number | string;

export interface TabItem {
    id: TabID;
    value: string;
}
export interface TabType {
    id: TabID;
    text: string;
}

export type ListId = number | string;

export interface ListObject {
    key: string;
    id:  ListId;
    name: string;
    imageUrl: string;
    shortDescription: string;
    quantity: number;
    price: string;
}
