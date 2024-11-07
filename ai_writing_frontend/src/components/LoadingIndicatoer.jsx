const LoadingIndicator = () => {
    return (
        <div className="flex justify-center items-center bg-gray-900 ">
            <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-500"></div>
        </div>
    );
}

export default LoadingIndicator;