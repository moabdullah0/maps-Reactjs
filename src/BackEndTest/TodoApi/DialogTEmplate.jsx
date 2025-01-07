import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TodoForm from "./TodoForm";

function DialogTEmplate({ setIsOpen, isOpen, setTodo, todo }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 mt-5 flex items-center justify-center"
      >
        Post Todo
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <TodoForm setTodo={setTodo} todo={todo} setIsOpen={setIsOpen} />

            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
export default DialogTEmplate;
