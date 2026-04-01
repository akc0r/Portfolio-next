interface FooterProps {
  copy: { text: string };
}

export function Footer({ copy }: FooterProps) {
  const content = copy.text.replace("{year}", `${new Date().getFullYear()}`);

  return (
    <footer className="border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted-soft)]">
      <p>{content}</p>
    </footer>
  );
}
