import * as React from 'react';
import './EmptyPage.css';

export interface EmptyPageProps {
    message?: string;
}

const EmptyPage = (props: EmptyPageProps) => {
    const msg = (props.message) ? props.message : "NO RESPONSE";
    return (
        <div className="emptyPageWrapper">
            {msg}
        </div>
    );
}

export default EmptyPage;