interface FooterProps {
  copy: { text: string };
}

export function Footer({ copy }: FooterProps) {
  const content = copy.text.replace("{year}", `${new Date().getFullYear()}`);

  return (
    <footer className="border-t border-slate-200/70 pt-8 text-center text-xs text-slate-500 dark:border-slate-500/35 dark:text-slate-300/65">
      <p>{content}</p>
    </footer>
  );
}
