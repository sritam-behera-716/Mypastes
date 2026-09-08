import { ArrowLeft, Calendar } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Paste = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((pasteItem) => pasteItem.id === id);

  if (!paste) {
    return (
      <main className="flex flex-1 items-center justify-center bg-slate-50 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Paste not found</h1>

          <p className="mt-2 text-sm text-slate-500">
            The paste you're looking for doesn't exist.
          </p>

          <button
            onClick={() => navigate("/pastes")}
            className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Back to Pastes
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-auto bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* Paste */}
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex flex-col gap-2 px-4 py-5 border-b border-slate-200 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            {/* Title */}
            <h1 className="min-w-0 truncate text-xl font-bold text-slate-900 sm:text-2xl">
              {paste.title}
            </h1>

            {/* Timestamp */}
            <div className="flex shrink-0 items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <Calendar size={15} strokeWidth={2} />

              <span>{new Date(paste.createdAt).toLocaleString()}</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-slate-50/50 p-4 sm:p-6">
            <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-xl bg-white p-4 font-mono text-sm leading-6 text-slate-700 shadow-sm">
              {paste.content}
            </pre>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Paste;
