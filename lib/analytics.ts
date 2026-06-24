// lib/analytics.ts
export interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
  callback?: (metric: Metric) => void;
}

export const trackMetric = (metric: Metric): void => {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.value),
      delta: Math.round(metric.delta),
      id: metric.id,
    });
  }

  // Send to Vercel Analytics (if available)
  if (typeof window !== 'undefined' && (window as any).webVitals) {
    (window as any).webVitals(metric);
  }

  // Call custom callback if provided
  if (metric.callback) {
    metric.callback(metric);
  }

  // Log to console in development (only in dev)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]:', metric);
  }
};

export const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('../components/WebVitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default {
  trackMetric,
  reportWebVitals,
};