import { createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 60000,
      },
    },
  })

  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: false,
      context: { queryClient },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      defaultErrorComponent: ({ error }) => (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter text-brand-red">System Failure</h1>
          <p className="text-white/50 mb-8 max-w-md font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            The mission protocol encountered an unrecoverable exception. 
            Manual override required.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-brand-red text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Reboot Interface
          </button>
          {(import.meta as any).env.DEV && (
            <pre className="mt-12 p-4 bg-neutral-900 border border-white/5 text-[8px] text-left overflow-auto max-w-2xl text-brand-red/50">
              {error.message}
              {error.stack}
            </pre>
          )}
        </div>
      ),
      defaultNotFoundComponent: () => <p>not found</p>,
    }),
    queryClient,
  )

  return router
}
