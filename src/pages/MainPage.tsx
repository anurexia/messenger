import { BellOff, CircleEllipsis } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Sidebar, SidebarContent } from "../components/ui/sidebar";
import MySidebar from "../MySidebar";
import ChatWindow from "../ChatWindow";
import { Card } from "../components/ui/card";
import { useSidebarStore } from "../store/sidebarStore";

const MainPage = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div className="flex w-full bg-neutral-800 py-4">
      <div>
        <MySidebar />
      </div>

      <section className="">
        <Sidebar
          collapsible="none"
          className="w-md rounded-lg bg-neutral-900 p-4"
        >
          <SidebarContent className="text-neutral-50">
            <h3>Chats</h3>
            <Input className="rounded-full" placeholder="Search Messenger" />

            {/* threads */}
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p>iyakan center</p>
                <p>wait mo nalang, nasend ko na kay pj</p>
              </div>

              <div className="ml-auto flex items-center gap-1 text-neutral-600">
                <CircleEllipsis />
                <BellOff size={16} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p>iyakan center</p>
                <p>wait mo nalang, nasend ko na kay pj</p>
              </div>

              <div className="ml-auto flex items-center gap-1 text-neutral-600">
                <CircleEllipsis />
                <BellOff className="invisible" size={16} />
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
      </section>

      {/* chat window or composer  */}
      <ChatWindow />

      {isOpen && (
        <section className="mr-4">
          {/* <Sidebar collapsible="none" className="w-md rounded-lg bg-neutral-900">
          <SidebarContent></SidebarContent>
        </Sidebar> */}
          <Card className="h-full w-md border-0 bg-neutral-900"></Card>
        </section>
      )}
    </div>
  );
};
export default MainPage;
