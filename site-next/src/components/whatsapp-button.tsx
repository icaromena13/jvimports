import { WhatsAppIcon } from "@/components/icons";
import { PopButton, type PopButtonProps } from "@/components/pop-button";
import { whatsappLink } from "@/lib/site";

interface WhatsAppButtonProps extends Pick<PopButtonProps, "color" | "size" | "className"> {
  /** Mensagem pré-preenchida, conforme a seção de origem. */
  message: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  children = "Chamar no WhatsApp",
  ...props
}: WhatsAppButtonProps) {
  return (
    <PopButton asChild {...props}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </PopButton>
  );
}
