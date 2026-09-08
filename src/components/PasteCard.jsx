import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

const PasteCard = ({ paste }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied to clipboard");
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
        <h2 className="min-w-0 truncate text-base font-semibold text-slate-900 sm:text-lg">
          {paste.title}
        </h2>

        <div className="flex shrink-0 items-center gap-2">
          <ActionButton 
            icon={Eye}
            title="View paste"
            hoverColor="indigo"
          />

          <ActionButton
            icon={PencilLine}
            title="Edit paste"
            hoverColor="amber"
          />

          <ActionButton
            icon={Copy}
            title="Copy paste"
            hoverColor="emerald"
            onClick={handleCopy}
          />

          <ActionButton
            icon={Trash2}
            title="Delete paste"
            hoverColor="red"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <p className="line-clamp-4 whitespace-pre-wrap wrap-break-word font-mono text-xs leading-6 text-slate-600 sm:text-sm">
          {paste.content}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center bg-slate-50/50 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Calendar size={14} strokeWidth={2} />

          <span>{new Date(paste.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </article>
  );
};

export default PasteCard;
