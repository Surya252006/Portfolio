import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] flex items-center justify-center p-6">
          <div className="max-w-md w-full p-6 rounded-2xl border border-red-500/30 bg-slate-900/90 backdrop-blur-md shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
              <h2 className="font-display font-bold text-xl text-red-400">Application Error</h2>
            </div>
            <p className="text-sm text-slate-300 font-body">
              An unexpected error occurred during rendering. Please reload the page.
            </p>
            <pre className="p-3 rounded-lg bg-black/60 border border-slate-800 text-xs text-red-300 font-mono overflow-auto max-h-40">
              {this.state.error?.message || 'Unknown error'}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
