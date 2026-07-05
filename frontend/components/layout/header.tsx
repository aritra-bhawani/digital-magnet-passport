export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <p className="text-sm text-muted-foreground">
          Digital Magnet Passport Platform
        </p>
      </div>

      <div className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
        Frontend Prototype
      </div>
    </header>
  );
}