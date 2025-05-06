import { Link } from "react-router";
import {
  SidebarContent,
  SidebarFooter,
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "./components/ui/sidebar";
import {
  Archive,
  MessageCircle,
  MessageCircleMore,
  PanelRight,
} from "lucide-react";

const sidebarOptions = [
  {
    title: "chats",
    icon: <MessageCircle className="text-neutral-50" size={20} />,
    path: "/",
  },
  {
    title: "requests",
    icon: <MessageCircleMore className="text-neutral-50" size={20} />,
    path: "/",
  },
  {
    title: "archive",
    icon: <Archive className="text-neutral-50" size={20} />,
    path: "/",
  },
];

const MySidebar = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="inset" className="bg-neutral-800">
      <SidebarContent className="overflow-hidden bg-neutral-800">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={`flex ${open ? "items-start" : ""}`}>
              {sidebarOptions.map((option) => (
                <SidebarMenuItem
                  key={option.title}
                  className={`bg-neutral-700 ${open ? "w-full" : ""} rounded-lg`}
                >
                  <Link
                    to="#"
                    className={`flex justify-center px-2 py-3 text-neutral-50 ${open ? "w-full justify-start gap-2" : ""}`}
                  >
                    <span className="">{option.icon}</span>
                    {open && (
                      <span className="font-medium capitalize">
                        {option.title}
                      </span>
                    )}
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-neutral-800 text-neutral-50">
        <div onClick={toggleSidebar}>
          <PanelRight />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MySidebar;
