  import React from 'react'
  import Sidebar from '../../components/sidebar';

  const Alumni = () => {
    return (
      <div className="grid grid-cols-5 min-h-screen bg-yellow-300">
        <Sidebar />

        <div className="col-span-4 p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Alumni Directory</h1>
          </header>

        
          <div className="grid grid-cols-3 gap-8">
            <section className="col-span-2 space-y-4">
              <div className="flex items-center p-4 border rounded-lg bg-white shadow-sm">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Alumnus"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Oliver Closehoff</p>
                  <p className="text-sm text-gray-600">
                    Direct Lending Analyst at Asset Management LLC
                  </p>
                  <span className="text-xs text-green-600">Open to Work</span>
                </div>
              </div>
            </section>

            <aside className="col-span-1 space-y-6">
              <div>
                <label
                  htmlFor="keywordSearch"
                  className="block font-semibold mb-2"
                >
                  Keyword Search
                </label>
                <input
                  id="keywordSearch"
                  type="text"
                  placeholder="Type your keyword..."
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div>
                <h2 className="font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option>All</option>
                      <option>Louisiana</option>
                      <option>Texas</option>
                      <option>Mississippi</option>
            
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="employer"
                    >
                      Current Employer
                    </label>
                    <select
                      id="employer"
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option>All</option>
                      <option>Amazon</option>
                      <option>Meta</option>
                      <option></option>
                    </select>
                  </div>

                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    )
  }

  export default Alumni
