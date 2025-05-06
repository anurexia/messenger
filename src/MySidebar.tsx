import {
  SidebarContent,
  SidebarFooter,
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
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
    icon: <MessageCircle className="text-neutral-50" size={24} />,
    path: "/",
  },
  {
    title: "requests",
    icon: <MessageCircleMore className="text-neutral-50" size={24} />,
    path: "/",
  },
  {
    title: "archive",
    icon: <Archive className="text-neutral-50" size={24} />,
    path: "/",
  },
];

const MySidebar = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="inset" className="bg-neutral-800">
      <SidebarContent className="bg-neutral-800">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex w-full">
              {sidebarOptions.map((option) => (
                <SidebarMenuItem key={option.title}>
                  <SidebarMenuButton className="flex items-center bg-neutral-700">
                    <div>{option.icon}</div>
                    {open && (
                      <span className="text-sm font-bold tracking-tight text-neutral-50">
                        {option.title}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-neutral-800">
        <div onClick={toggleSidebar}>
          <PanelRight />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MySidebar;
