import { FaPlus } from "react-icons/fa";
import { MainLayout } from "../../layout/MainLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProjectItem } from "../../components/project/ProjectItem";

export const ProjectPage = () => {
  const projects = useSelector((state) => state.projects.project);

  return (
    <MainLayout>
      <div className="flex items-center justify-end bg-[#fff] mb-[20px] dark:bg-[#0D0D0D] dark:text-white">
        <h1 className="mr-auto text-[28px]">Список проектов</h1>

        <Link to="create/" className="btn-default mb-0">
          <div className="icon">
            <FaPlus className="mr-[10px]" fontSize={13} />
          </div>
          Создать проект
        </Link>
      </div>
      <ProjectItem projects={projects} />
    </MainLayout>
  );
};
