import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// detect if running inside GitHub Actions Puppeteer
const isGitHubAction = navigator.userAgent.includes('GitHubActions-Puppeteer');

root.render( // render the app but don't render analytics if running in GitHub Actions
    <React.StrictMode>
        <App />
        {!isGitHubAction && <Analytics />}
        {!isGitHubAction && <SpeedInsights />}
    </React.StrictMode>
);

reportWebVitals();