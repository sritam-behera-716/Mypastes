const ActionButton = ({icon: Icon,title,hoverColor = "indigo",onClick}) => {
  const hoverStyles = {
    indigo: "hover:bg-indigo-50 hover:text-indigo-600",
    amber: "hover:bg-amber-50 hover:text-amber-600",
    emerald: "hover:bg-emerald-50 hover:text-emerald-600",
    red: "hover:bg-red-50 hover:text-red-600",
  };

  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className={`rounded-lg p-2 border text-slate-400 transition-all active:scale-95 ${hoverStyles[hoverColor]}`}
    >
      <Icon size={17} strokeWidth={2} />
    </button>
  );
};

export default ActionButton;
