import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <div className="flex-col justify-center">
      <header className="h-24 w-full bg-neutral-950 text-neutral-50">
        header
      </header>

      <Outlet />

      <footer className="absolute bottom-0 h-24 w-full bg-neutral-950 text-neutral-50">
        Footer
      </footer>
    </div>
  );
};

export default App;
