import styles from '../home.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormSetValue, useForm } from 'react-hook-form';
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
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
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
        <DialogShareGame
          setValue={form.setValue}
          link="http://chessone.com/game/dqdnvlkqjnvks"
        />
      </div>
      <Input
        {...form.register('gameUrl')}
        className="w-full text-lg"
        type="url"
        placeholder="link"
      />
      <Button className="text-lg" variant={'ghost'} type="submit">
        Join
      </Button>
    </form>
  );
};

export function DialogShareGame({
  link,
  setValue,
}: {
  link: string;
  setValue: UseFormSetValue<{
    gameUrl: string;
  }>;
}) {
  const [copyTrigged, setCopyTrigged] = useState(false);

  function copyToClipboard(textToCopy: string) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    } else {
      // text area method
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        // here the magic happens
        document.execCommand('copy') ? res(link) : rej();
        textArea.remove();
      });
    }
  }

  const handleCopyLinkToClipBoard = () => {
    copyToClipboard(link);
    setCopyTrigged(true);
    const timer = setTimeout(() => {
      setCopyTrigged(false);
      clearTimeout(timer);
    }, 1000);
  };

  useEffect(()=> {
    setValue("gameUrl",link)
  },[])
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-lg" variant={'secondary'}>
          New Game +
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.dialog}>
        <DialogHeader className="text-sky-100">
          <DialogTitle className="text-2xl">Share link</DialogTitle>
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
              className="text-sky-100"
              defaultValue={link}
              readOnly
            />
          </div>
          <Button
            onClick={handleCopyLinkToClipBoard}
            size="sm"
            className="px-3"
          >
            {!copyTrigged ? (
              <>
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </>
            ) : (
              <CheckIcon className="h-4 w-4" />
            )}
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
