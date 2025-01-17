export const LoadingProjects = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="animate-pulse rounded-lg overflow-hidden"
          >
            <div className="aspect-video bg-blue-200/20 dark:bg-blue-900/20" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-blue-200/20 dark:bg-blue-900/20 rounded" />
              <div className="space-y-2">
                <div className="h-4 bg-blue-200/20 dark:bg-blue-900/20 rounded w-3/4" />
                <div className="h-4 bg-blue-200/20 dark:bg-blue-900/20 rounded w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };