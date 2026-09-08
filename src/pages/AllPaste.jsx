import { Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PasteCard from "../components/PasteCard";

const AllPastes = () => {
  const [searchText, setSearchText] = useState("");

  const pastes = useSelector((state) => state.paste.pastes);

  const filteredData = pastes.filter((pasteItem) =>
    pasteItem.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <main className="min-h-full bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            All Pastes
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Search, view and manage your saved pastes.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative mb-6">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search pastes..."
            value={searchText}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        {/* Paste Count */}
        {filteredData.length > 0 && (
          <p className="mb-3 text-sm text-slate-500">
            {filteredData.length}{" "}
            {filteredData.length === 1 ? "paste" : "pastes"} found
          </p>
        )}

        {/* Pastes */}
        {filteredData.length > 0 ? (
          <div className="space-y-4">
            {" "}
            {filteredData.map((paste) => (
              <PasteCard key={paste.id} paste={paste} />
            ))}{" "}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Search size={22} className="text-slate-400" />
            </div>

            <h2 className="font-semibold text-slate-800">
              {searchText ? "No pastes found" : "No pastes yet"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {searchText
                ? "Try searching with a different title."
                : "Create your first paste to see it here."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllPastes;
