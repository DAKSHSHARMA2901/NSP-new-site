export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-100 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-48 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="hidden md:flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-4">
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-4/5 h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex space-x-4">
              <div className="w-32 h-12 bg-blue-200 rounded-full animate-pulse"></div>
              <div className="w-32 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="space-y-8 py-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="w-64 h-8 bg-gray-200 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                  <div className="w-3/4 h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
