import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPaste } from "../redux/features/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const paste = {
      id: Date.now().toString(),
      title: data.title,
      content: data.content,
      createdAt: new Date().toISOString(),
    };

    const exist = pastes.find(
      (pasteItem) =>
        pasteItem.title.toLowerCase() === paste.title.toLowerCase(),
    );

    if (exist) {
      toast.error("Paste already exists");
      return;
    }

    dispatch(addPaste(paste));
    reset();
  };

  return (
    <main className="flex flex-1 items-center justify-center overflow-auto bg-slate-50 px-4 py-6">
      <div className="w-full max-w-3xl">
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Create a Paste
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Write, save and share your text easily.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Paste Title
              </label>

              <input
                id="title"
                type="text"
                placeholder="Enter a title..."
                {...register("title", {
                  required: "Title is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
                  ${
                    errors.title
                      ? "border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  }`}
              />

              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Content
              </label>

              <textarea
                id="content"
                rows="10"
                placeholder="Write your paste here..."
                {...register("content", {
                  required: "Content is required",
                })}
                className={`w-full resize-none rounded-xl border px-4 py-3 font-mono text-sm leading-6 outline-none transition
                  ${
                    errors.content
                      ? "border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  }`}
              />

              {errors.content && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Create My Paste
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
