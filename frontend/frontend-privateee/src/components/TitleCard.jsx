import React from 'react';

const TitleCard = ({ title, description }) => {
    return (
        <div className="bg-green-50 border-l-4 border-emerald-500 shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold text-emerald-700 mb-2">{title}</h2>
            <p className="text-emerald-600">{description}</p>
        </div>
    );
}

export default TitleCard;
