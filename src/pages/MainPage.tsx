import {
  BellOff,
  CircleEllipsis,
  Image,
  ImagePlay,
  Paperclip,
  Phone,
  SendHorizonal,
  Sticker,
  Video,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Sidebar, SidebarContent } from "../components/ui/sidebar";
import MySidebar from "../MySidebar";

import { Card } from "../components/ui/card";

const MainPage = () => {
  // const { open } = useSidebar();

  return (
    <div className="flex w-full bg-neutral-800 p-4">
      <div className="">
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

      {/* main conversation  */}
      <section className="mx-4 h-full w-full rounded-lg bg-neutral-900 p-2">
        <div className="flex h-[5vh] items-center justify-between border-b border-b-neutral-800 pb-2">
          {/* avatar */}
          <div className="flex w-max items-center gap-2 rounded-lg px-4 py-2 text-neutral-50 hover:bg-neutral-500">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p>Agoii Mode</p>
          </div>
          {/* calls actions */}
          <div className="text-accent mr-4 flex gap-6 text-lg">
            <Phone size={20} />
            <Video size={20} />
            <CircleEllipsis size={20} />
          </div>
        </div>

        {/* Main conversation */}
        <div className="h-[85vh] rounded-none bg-lime-500"></div>

        {/* conversation composer */}
        <div className="mx-4 flex h-[5vh] items-center text-neutral-50">
          <div className="flex gap-4">
            <Paperclip size={16} />
            <Image size={16} />
            <Sticker size={16} />
            <ImagePlay size={16} />
          </div>

          <Input className="mx-6 rounded-full" placeholder="Aa" />

          <SendHorizonal />
        </div>
      </section>

      <section className="">
        <Sidebar collapsible="none" className="w-md rounded-lg bg-neutral-900">
          <SidebarContent></SidebarContent>
        </Sidebar>
      </section>
    </div>
  );
};
export default MainPage;
