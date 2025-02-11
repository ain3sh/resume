import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Analytics, BeforeSendEvent } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


// custom vercel analytics config
const IS_PRODUCTION = process.env.NODE_ENV
const SAMPLE_RATE = 0.8 // capture 80% of traffic in production
const beforeSend = (event: BeforeSendEvent | null): BeforeSendEvent | null => {
    if (!event) return null; // safety check

    // filter out admin routes and test paths
    if (event.url.includes('/admin') || event.url.includes('/test')) {
        return null;
    }

    // clean hash-based routes for better analytics
    if (event.url.includes('#')) {
        return { ...event, url: event.url.split('#')[0] };
    }

    return event;
};


// detect if running inside GitHub Actions Puppeteer
const isGitHubAction = navigator.userAgent.includes('GitHubActions-Puppeteer');


// render app but don't track vercel analytics if running in GitHub Actions
root.render(
    <React.StrictMode>
        <App />

        {!isGitHubAction &&
            // Vercel Web Analytics Config:
            //     - Use production mode detection
            //     - Filter out admin routes and testing paths
            //     - Debugging enabled only in development
            <Analytics
                mode={IS_PRODUCTION ? 'production' : 'development'}
                beforeSend={beforeSend}
                debug={!IS_PRODUCTION}
            />
        }

        {!isGitHubAction &&
            // Vercel Speed Insights Config:
            //     - Handle route detection for hash navigation
            //     - Use production mode detection for sampling scalability
            //     - Debugging enabled only in development
            <SpeedInsights
                route="/" // base route since using hash navigation
                sampleRate={IS_PRODUCTION ? SAMPLE_RATE : 1}
                debug={!IS_PRODUCTION}
            />
        }
    </React.StrictMode>
);

reportWebVitals();