const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-slate-500 text-lg mb-10">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  )
}

export default NotFound
