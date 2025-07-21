import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './components/MainPage';
import './styles/main.scss';
import './styles/branch-card.scss';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <MainPage />
        </React.StrictMode>
    );
}