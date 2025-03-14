// /app/loading.tsx
export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          <p className="mt-4 text-lg text-gray-700">Loading ... Please Wait !!! </p>
        </div>
      </div>
    );
  }
  