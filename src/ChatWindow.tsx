import {
  CircleEllipsis,
  Image,
  ImagePlay,
  Paperclip,
  Phone,
  SendHorizonal,
  Sticker,
  Video,
} from "lucide-react";

import { Input } from "./components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Card } from "./components/ui/card";
import { useSidebarStore } from "./store/sidebarStore";

const ChatWindow = () => {
  const { setIsOpen } = useSidebarStore();

  return (
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
          <CircleEllipsis
            onClick={setIsOpen}
            className="cursor-pointer"
            size={20}
          />
        </div>
      </div>

      {/* Main conversation */}
      <div className="h-[85vh] space-y-6 rounded-none p-4">
        {/* friend */}
        <div className="flex items-end gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Card className="max-w-[40rem] border-none bg-neutral-800 p-3 text-neutral-50">
            <p className="text-sm font-medium text-neutral-200">
              Hey Jamie, just checking in—did you manage to finish the report we
              discussed yesterday? I need to review it before our call this
              afternoon. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quasi molestias culpa voluptates rerum laborum blanditiis
              corporis, tenetur minima ea veritatis. Ipsum eveniet dolorum
              ratione sequi cumque commodi quia ipsa illo!
            </p>
          </Card>
        </div>

        {/* reply */}
        <div className="flex flex-row-reverse items-end gap-2">
          <Card className="max-w-[40rem] bg-neutral-100 p-3 text-neutral-700">
            <p className="text-sm font-medium">
              Hey! Yes, I’ve been working on it most of the morning. I’m just
              wrapping up the summary and double-checking the data in the last
              section. I should have it ready in about 20 minutes.
            </p>
          </Card>
        </div>
      </div>

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
  );
};
export default ChatWindow;
