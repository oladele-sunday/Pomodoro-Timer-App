import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TaskList from "../../components/Task/TaskList";

function Tasks() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">
          My Tasks
        </h1>

        <TaskList />
      </main>

      <Footer />

    </div>
  );
}

export default Tasks;