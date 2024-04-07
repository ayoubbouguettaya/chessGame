import styles from '../home.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@chessxone-project/ui';
import { CopyIcon } from '@radix-ui/react-icons';
type Props = {};

const CreateGame = (props: Props) => {
  return (
    <div className={styles.create_game}>
      <div>
        <h3>Create Instant Game</h3>
        <p>
          share the Link with a Friend and start play with seconds, just copy
          and paste
        </p>
        <div className={styles.form}>
          <JoinGame />
        </div>
      </div>
      <div className={styles.bg}>
        <img src="/background.png" />
      </div>
    </div>
  );
};

export default CreateGame;

const formSchema = z.object({
  gameUrl: z.string().min(2).max(50),
});

const JoinGame = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameUrl: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <form
      className="flex w-full  items-center gap-1"
      onSubmit={form.handleSubmit(onSubmit)}
    >
        <div>
      <DialogShareGame />
        </div>
      <Input
        {...form.register('gameUrl')}
        className="w-full text-lg"
        type="url"
        placeholder="link"
      />
      <Button className="text-lg" variant={'outline'} type="submit">
        Join
      </Button>
    </form>
  );
};

export function DialogShareGame() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="text-lg" variant={'secondary'}>
          New Game +
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.dialog} >
        <DialogHeader className='text-sky-100'>
          <DialogTitle className='text-2xl' >Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link can enter the game.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              className='text-sky-100'
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
