import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  // mesma coisa
  //function onBackClick() {
  //  navigate(-1);
  //}

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button // mesma coisa que a função onBackClick
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 "
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center ">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>

      {/* Add your task page content here */}
    </div>
  );
}

export default TaskPage;
